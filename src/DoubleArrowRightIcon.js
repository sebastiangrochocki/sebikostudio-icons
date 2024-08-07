
    import React, { forwardRef } from 'react';
  
    export const DoubleArrowRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "double arrow right, arrow right, chevron right, right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5 15.5L16.5 10L11.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 15.5L9.5 10L4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DoubleArrowRightIcon;
  