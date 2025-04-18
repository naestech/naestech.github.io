declare global {
  interface Window {
    SubstackFeedWidget: {
      init: (config: {
        substackUrl: string;
        posts: number;
        layout: string;
        theme: string;
        colors: {
          primary: string;
          accent: string;
          text: string;
          background: string;
        };
      }) => void;
    };
  }
} 