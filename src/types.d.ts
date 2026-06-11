declare module '*.svg?component' {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  import React = require('react');
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
