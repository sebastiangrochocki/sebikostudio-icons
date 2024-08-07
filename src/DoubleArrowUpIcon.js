
    import React, { forwardRef } from 'react';
  
    export const DoubleArrowUpIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "double arrow top, arrow top, chevron top, top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5 8.5L10 3.5L4.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 16.5L10 11.5L4.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DoubleArrowUpIcon;
  