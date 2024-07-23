
    import React, { forwardRef } from 'react';
  
    export const ArrowDownIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "arrow, arrow down, down, bottom"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 16V3.5M15.5 10.5L10 16.5L4.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ArrowDownIcon;
  