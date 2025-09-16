/// <reference types="vite/client" />

declare global {
  interface Window {
    webflow: {
      setExtensionSize: (size: 'small' | 'medium' | 'large') => void;
    };
  }
  
  const webflow: {
    setExtensionSize: (size: 'small' | 'medium' | 'large') => void;
  };
}