import { createContext, useContext, useEffect, ReactNode } from 'react';
import posthog from 'posthog-js';

interface PosthogContextType {
  posthog: typeof posthog;
}

const PosthogContext = createContext<PosthogContextType | null>(null);

interface PosthogProviderProps {
  children: ReactNode;
  apiKey?: string;
  options?: {
    api_host?: string;
    person_profiles?: 'always' | 'never' | 'identified_only';
    capture_pageview?: boolean;
    capture_pageleave?: boolean;
  };
}

export const PosthogProvider = ({ 
  children, 
  apiKey = 'YOUR_POSTHOG_PROJECT_KEY', // Replace with your actual key
  options = {}
}: PosthogProviderProps) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && apiKey && apiKey !== 'YOUR_POSTHOG_PROJECT_KEY') {
      posthog.init(apiKey, {
        api_host: 'https://app.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle this manually with React Router
        capture_pageleave: true,
        ...options,
      });
    }
  }, [apiKey, options]);

  return (
    <PosthogContext.Provider value={{ posthog }}>
      {children}
    </PosthogContext.Provider>
  );
};

export const usePosthog = () => {
  const context = useContext(PosthogContext);
  if (!context) {
    throw new Error('usePosthog must be used within a PosthogProvider');
  }
  return context.posthog;
};