import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from '@/components/SEOHead';
import { OrganizationSchema } from '@/components/StructuredData';
import { blogPosts, type BlogPost } from '@/data/blogdata';

const BlogPostDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Ungültiger Blogbeitrag</h1>
          <p className="text-muted-foreground mb-6">Der angeforderte Blogbeitrag konnte nicht gefunden werden.</p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Blog-Übersicht
          </Link>
        </div>
      </div>
    );
  }

  // Find the blog post by slug
  const blogPost = blogPosts.find(post => post.slug === slug);

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Beitrag nicht gefunden</h1>
          <p className="text-muted-foreground mb-6">
            Der Blogbeitrag mit dem Slug "{slug}" existiert nicht.
          </p>
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Blog-Übersicht
          </Link>
        </div>
      </div>
    );
  }

  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "url": `${window.location.origin}/blog/${blogPost.slug}`,
      "image": blogPost.imageUrl ? `${window.location.origin}${blogPost.imageUrl}` : undefined,
      "author": {
        "@type": "Organization",
        "name": "Marktfinder"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Marktfinder"
      }
    };
  };

  return (
    <>
      <SEOHead
        title={`${blogPost.title} - Marktfinder Blog`}
        description={blogPost.excerpt}
        keywords={`${blogPost.title}, ${blogPost.marketSlugs.join(", ")}, wochenmärkte, blog`}
        canonicalUrl={`${window.location.origin}/blog/${blogPost.slug}`}
        ogImage={blogPost.imageUrl}
        schemaData={generateStructuredData()}
      />
      
      <OrganizationSchema 
        name="MarktAtlas Deutschland"
        url="https://markt-atlas-finden.lovable.app"
        logo="https://markt-atlas-finden.lovable.app/lovable-uploads/20688308-10c0-4483-9eda-63494df4b92a.png"
        sameAs={[
          "https://facebook.com/marktatlas",
          "https://twitter.com/marktatlas",
          "https://instagram.com/marktatlas"
        ]}
        description="Deutschlands führende Plattform für die Suche nach Wochenmärkten und Bauernmärkten"
      />
      
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Blog-Übersicht
            </Link>
          </div>

          {/* Article */}
          <article>
            {/* Hero Image */}
            {blogPost.imageUrl && (
              <div className="mb-8 overflow-hidden rounded-lg">
                <img 
                  src={blogPost.imageUrl} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}

            {/* Article Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {blogPost.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6">
                {blogPost.excerpt}
              </p>

              {/* Market Tags */}
              {blogPost.marketSlugs.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="h-4 w-4" />
                    <span>Verwandte Märkte:</span>
                  </div>
                  {blogPost.marketSlugs.map((marketSlug) => (
                    <Badge key={marketSlug} variant="secondary">
                      <Link 
                        to={`/market/${marketSlug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {marketSlug.split("-").slice(0, 2).join(" ")}
                      </Link>
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Article Content */}
            <Card>
              <CardContent className="pt-6">
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: blogPost.content }}
                />
              </CardContent>
            </Card>

            {/* Footer Navigation */}
            <footer className="mt-12 pt-8 border-t">
              <div className="flex justify-between items-center">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Alle Blogbeiträge
                </Link>
                
                <Link 
                  to="/markets" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  Märkte entdecken
                </Link>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
};

export default BlogPostDetail;