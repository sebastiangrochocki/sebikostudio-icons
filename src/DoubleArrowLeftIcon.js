
    import React, { forwardRef } from 'react';
  
    export const DoubleArrowLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "double arrow left, arrow left, chevron left, left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.5 15.5L3.5 10L8.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 15.5L10.5 10L15.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DoubleArrowLeftIcon;
  