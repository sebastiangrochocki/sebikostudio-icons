
    import React, { forwardRef } from 'react';
  
    export const TriangleIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "triangle, shape"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 16.5L1.5 16.5L10 2.5L18.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TriangleIcon;
  