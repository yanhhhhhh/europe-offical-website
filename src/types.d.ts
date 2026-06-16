declare module '*.svg?component' {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
declare namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_ENV: 'development' | 'production';
    NEXT_PUBLIC_APP_BASE_API: string;
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_HOST: string;
  }
}
