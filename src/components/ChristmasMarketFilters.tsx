import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ChevronDown, RotateCcw } from 'lucide-react';
import { Filters } from '@/hooks/useChristmasMarketFilters';

interface ChristmasMarketFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  onReset: () => void;
}

const statusOptions = [
  { value: 'all', label: 'Alle Status' },
  { value: 'open', label: 'Geöffnet' },
  { value: 'closed', label: 'Geschlossen' }
];

const admissionOptions = [
  { value: 'all', label: 'Alle Märkte' },
  { value: 'free', label: 'Eintritt frei' },
  { value: 'paid', label: 'Kostenpflichtig' }
];

const featureOptions = [
  { value: 'familienfreundlich', label: 'Familienfreundlich' },
  { value: 'bio-produkte', label: 'Bio-Produkte' },
  { value: 'kunsthandwerk', label: 'Kunsthandwerk' },
  { value: 'kulinarik', label: 'Kulinarik' }
];

export const ChristmasMarketFilters = ({ 
  filters, 
  onFiltersChange, 
  onReset 
}: ChristmasMarketFiltersProps) => {
  const updateFilter = (key: keyof Filters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    updateFilter('features', newFeatures);
  };

  const hasActiveFilters = 
    filters.status !== 'all' || 
    filters.admission !== 'all' || 
    filters.features.length > 0 ||
    filters.searchQuery.trim() !== '';

  return (
    <div className="space-y-4">
      {/* Filter Buttons Row */}
      <div className="flex flex-wrap gap-3 items-center">
        {/* Status Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="gap-2 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              Status: {statusOptions.find(opt => opt.value === filters.status)?.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background border border-red-200 dark:border-red-800">
            {statusOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => updateFilter('status', option.value)}
                className="hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Admission Filter */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="outline" 
              className="gap-2 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"
            >
              Eintritt: {admissionOptions.find(opt => opt.value === filters.admission)?.label}
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background border border-red-200 dark:border-red-800">
            {admissionOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => updateFilter('admission', option.value)}
                className="hover:bg-red-50 dark:hover:bg-red-950/20"
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Reset Button */}
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            onClick={onReset}
            className="gap-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
          >
            <RotateCcw className="h-4 w-4" />
            Filter zurücksetzen
          </Button>
        )}
      </div>

      {/* Feature Tags */}
      <div className="space-y-2">
        <p className="text-sm font-medium text-red-700 dark:text-red-300">Besonderheiten:</p>
        <div className="flex flex-wrap gap-2">
          {featureOptions.map((feature) => {
            const isActive = filters.features.includes(feature.value);
            return (
              <Badge
                key={feature.value}
                variant={isActive ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 ${
                  isActive 
                    ? 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700' 
                    : 'border-red-300 text-red-600 hover:bg-red-50 dark:border-red-600 dark:text-red-400 dark:hover:bg-red-950/20'
                }`}
                onClick={() => toggleFeature(feature.value)}
              >
                {feature.label}
              </Badge>
            );
          })}
        </div>
      </div>

      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="text-sm text-red-600 dark:text-red-400">
          🎯 {filters.features.length > 0 && `${filters.features.length} Besonderheit${filters.features.length !== 1 ? 'en' : ''} ausgewählt`}
          {filters.status !== 'all' && ` • Status: ${statusOptions.find(opt => opt.value === filters.status)?.label}`}
          {filters.admission !== 'all' && ` • ${admissionOptions.find(opt => opt.value === filters.admission)?.label}`}
        </div>
      )}
    </div>
  );
};