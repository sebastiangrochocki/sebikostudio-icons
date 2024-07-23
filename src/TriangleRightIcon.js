
    import React, { forwardRef } from 'react';
  
    export const TriangleRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "triangle right, triangle filled, right, chevron right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.5 6.5L12.5 10L8.5 13.5V6.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TriangleRightIcon;
  