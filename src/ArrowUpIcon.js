
    import React, { forwardRef } from 'react';
  
    export const ArrowUpIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "arrow, arrow up, up, top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4V16.5M15.5 9.5L10 3.5L4.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ArrowUpIcon;
  