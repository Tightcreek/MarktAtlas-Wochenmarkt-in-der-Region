import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from '@/components/SEOHead';
import { getAllBlogPosts } from '@/data/blogdata';

const Blog = () => {
  const allBlogPosts = getAllBlogPosts();

  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Marktfinder Blog",
      "description": "Aktuelle Beiträge und Tipps rund um Wochenmärkten und regionale Produkte",
      "url": `${window.location.origin}/blog`,
      "blogPost": allBlogPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "url": `${window.location.origin}/blog/${post.slug}`,
        "image": post.imageUrl ? `${window.location.origin}${post.imageUrl}` : undefined,
        "author": {
          "@type": "Organization",
          "name": "Marktfinder"
        }
      }))
    };
  };

  return (
    <>
      <SEOHead
        title="Blog - Marktfinder"
        description="Entdecken Sie spannende Artikel rund um Wochenmärkte, regionale Produkte und kulinarische Trends in Deutschland."
        keywords="blog, wochenmärkte, regionale produkte, kulinarik, märkte deutschland"
        canonicalUrl={`${window.location.origin}/blog`}
        schemaData={generateStructuredData()}
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">Marktfinder Blog</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Entdecken Sie spannende Artikel rund um Wochenmärkte, regionale Produkte und kulinarische Trends
              </p>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBlogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {post.imageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  
                  {/* Market Tags */}
                  {post.marketSlugs.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.marketSlugs.slice(0, 2).map((marketSlug) => (
                        <Badge key={marketSlug} variant="secondary" className="text-xs">
                          {marketSlug.split('-').slice(0, 2).join(' ')}
                        </Badge>
                      ))}
                      {post.marketSlugs.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.marketSlugs.length - 2}
                        </Badge>
                      )}
                    </div>
                  )}
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Weiterlesen →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {allBlogPosts.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Noch keine Blogbeiträge</h2>
              <p className="text-muted-foreground">
                Schauen Sie bald wieder vorbei für interessante Artikel rund um Märkte und regionale Produkte.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;