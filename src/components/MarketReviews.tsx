import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

interface MarketReviewsProps {
  marketId: string;
  marketName: string;
}

const MarketReviews = ({ marketId, marketName }: MarketReviewsProps) => {
  const [reviews] = useState<Review[]>([
    {
      id: '1',
      author: 'Maria K.',
      rating: 5,
      comment: 'Fantastische Auswahl an frischen Produkten! Die Qualität ist hervorragend und die Preise fair.',
      date: '2024-09-15',
      verified: true
    },
    {
      id: '2',
      author: 'Thomas H.',
      rating: 4,
      comment: 'Sehr schöner Markt mit regionalen Spezialitäten. Komme gerne wieder!',
      date: '2024-09-10',
      verified: true
    }
  ]);

  const [newReview, setNewReview] = useState('');
  const [userRating, setUserRating] = useState(0);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const StarRating = ({ rating, interactive = false, onRatingChange }: { 
    rating: number; 
    interactive?: boolean; 
    onRatingChange?: (rating: number) => void;
  }) => (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-4 h-4",
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300",
            interactive && "cursor-pointer hover:text-yellow-400"
          )}
          onClick={interactive ? () => onRatingChange?.(star) : undefined}
        />
      ))}
    </div>
  );

  return (
    <section className="mt-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Bewertungen für {marketName}</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <StarRating rating={averageRating} />
            <span className="font-semibold">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviews.length} Bewertungen)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">{review.author}</span>
                    {review.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verifiziert
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Bewertung abgeben</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Ihre Bewertung</label>
                <StarRating 
                  rating={userRating} 
                  interactive 
                  onRatingChange={setUserRating}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Kommentar</label>
                <Textarea
                  placeholder="Teilen Sie Ihre Erfahrungen mit diesem Markt..."
                  value={newReview}
                  onChange={(e) => setNewReview(e.target.value)}
                  rows={4}
                />
              </div>
              
              <Button 
                className="w-full" 
                disabled={!userRating || !newReview.trim()}
              >
                Bewertung senden
              </Button>
              
              <p className="text-xs text-muted-foreground">
                Ihre Bewertung hilft anderen Besuchern bei der Auswahl des richtigen Marktes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketReviews;