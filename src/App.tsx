import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// PosthogProvider now lazy loaded above
import { usePageTracking } from "@/hooks/usePageTracking";
import { lazy, Suspense } from "react";

// Lazy load heavy non-critical components
const PosthogProvider = lazy(() => import("@/components/PosthogProvider").then(m => ({ default: m.PosthogProvider })));

import { registerServiceWorker } from "@/components/PerformanceMonitor";

// Code splitting: Lazy load all page components for better performance
const Index = lazy(() => import("./pages/Index"));
const Markets = lazy(() => import("./pages/Markets"));
const MarketDetail = lazy(() => import("./pages/MarketDetail"));
const ChristmasMarkets = lazy(() => import("./pages/ChristmasMarkets"));
const ChristmasMarketDetail = lazy(() => import("./pages/ChristmasMarketDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPostDetail = lazy(() => import("./pages/BlogPostDetail"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppRoutes = () => {
  usePageTracking();
  
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    }>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/market/:slug" element={<MarketDetail />} />
        <Route path="/weihnachtsmaerkte" element={<ChristmasMarkets />} />
        <Route path="/weihnachtsmaerkte/:slug" element={<ChristmasMarketDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPostDetail />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

const App = () => {
  // Register service worker for caching
  registerServiceWorker();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <PosthogProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </TooltipProvider>
        </PosthogProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
