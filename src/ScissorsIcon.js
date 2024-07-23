
    import React, { forwardRef } from 'react';
  
    export const ScissorsIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "scissors, cut, cutters, slice, split"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="4" cy="14" r="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="4" cy="6" r="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 12.5L10.5 9.5M10.5 9.5L18.5 4.5H16L10.5 7.5V9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 4.5H18.5L10.5 9.5V7.5L16 4.5Z" fill="currentColor"/>
<path d="M16 15.5H18.5L11.5 11V13L16 15.5Z" fill="currentColor"/>
<path d="M6 7.5L7.5 8.46M18.5 15.5H16L11.5 13V11L18.5 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ScissorsIcon;
  