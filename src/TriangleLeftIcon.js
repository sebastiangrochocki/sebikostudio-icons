
    import React, { forwardRef } from 'react';
  
    export const TriangleLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "triangle left, triangle filled, left, chevron left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 6.5L7.5 10L11.5 13.5V6.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TriangleLeftIcon;
  