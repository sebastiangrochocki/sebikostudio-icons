
    import React, { forwardRef } from 'react';
  
    export const TriangleUpIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "triangle top, triangle filled, top, chevron top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 11.5L10 7.5L13.5 11.5L6.5 11.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TriangleUpIcon;
  