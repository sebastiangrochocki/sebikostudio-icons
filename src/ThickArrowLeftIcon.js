
    import React, { forwardRef } from 'react';
  
    export const ThickArrowLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "thick arrow left, thick arrow, arrow, arrow left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 16.5L3.5 10L11.5 3.5L11.5 7.5L16.5 7.5L16.5 12.5L11.5 12.5L11.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ThickArrowLeftIcon;
  