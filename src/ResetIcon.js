
    import React, { forwardRef } from 'react';
  
    export const ResetIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "reset, arrow left, curve arrow to left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.5 16.5H12C15.0376 16.5 17.5 14.0376 17.5 11C17.5 7.96243 15.0376 5.5 12 5.5H3.5M3.5 5.5L6.5 8.5M3.5 5.5L6.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ResetIcon;
  