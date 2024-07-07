
    import React, { forwardRef } from 'react';

    export const ComponentInstanceIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="component instance, instance, block" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2.5L17.5 10L10 17.5L2.5 10L10 2.5Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));

    export default ComponentInstanceIcon;
  