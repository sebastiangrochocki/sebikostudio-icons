
    import React, { forwardRef } from 'react';
  
    export const ZoomOutIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "magnifying glass, glass, magnify, zoom out, minus"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 17.5L12.7722 12.7722" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="8.5" cy="8.5" r="6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 8.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ZoomOutIcon;
  