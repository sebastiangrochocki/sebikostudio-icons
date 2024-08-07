
    import React, { forwardRef } from 'react';
  
    export const StrikethroughIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "strikethrough, u, strike"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.5 4.5V11C5.5 13.4853 7.51472 15.5 10 15.5C12.4853 15.5 14.5 13.4853 14.5 11V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 9.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default StrikethroughIcon;
  