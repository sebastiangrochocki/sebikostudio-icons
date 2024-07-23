
    import React, { forwardRef } from 'react';
  
    export const ArrowRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "arrow, arrow right, right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16 10H3.5M10.5 15.5L16.5 10L10.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ArrowRightIcon;
  