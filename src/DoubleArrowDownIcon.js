
    import React, { forwardRef } from 'react';
  
    export const DoubleArrowDownIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "double arrow down, arrow down, chevron down, down, bottom"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5 11.5L10 16.5L4.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 3.5L10 8.5L4.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DoubleArrowDownIcon;
  