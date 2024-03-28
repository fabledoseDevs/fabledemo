import { useEffect } from 'react';

import type { UseScript as UseScriptType } from '@/components/NewsletterForm/NewsletterForm.types';

const useScript: UseScriptType = src => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);
};

export default useScript;
