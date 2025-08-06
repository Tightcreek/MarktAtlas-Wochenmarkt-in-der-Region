import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePosthog } from '@/components/PosthogProvider';

export const usePageTracking = () => {
  const location = useLocation();
  const posthog = usePosthog();

  useEffect(() => {
    if (posthog) {
      posthog.capture('$pageview', {
        $current_url: window.location.href,
        $pathname: location.pathname,
        $search: location.search,
      });
    }
  }, [location, posthog]);
};