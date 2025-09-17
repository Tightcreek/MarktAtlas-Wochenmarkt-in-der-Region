import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useCallback, useEffect, useState } from 'react';

interface ChristmasMarketSearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const ChristmasMarketSearch = ({ 
  value, 
  onChange, 
  placeholder = "Nach Marktname, Stadt oder Besonderheiten suchen..." 
}: ChristmasMarketSearchProps) => {
  const [internalValue, setInternalValue] = useState(value);

  // Debounced search
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(internalValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [internalValue, onChange]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
  }, []);

  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder={placeholder}
        value={internalValue}
        onChange={handleInputChange}
        className="pl-10 pr-4 py-3 text-base border-red-200 dark:border-red-800 focus:border-red-400 dark:focus:border-red-600 focus:ring-red-400 dark:focus:ring-red-600"
      />
    </div>
  );
};