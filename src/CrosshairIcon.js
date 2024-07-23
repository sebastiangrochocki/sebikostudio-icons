
    import React, { forwardRef } from 'react';
  
    export const CrosshairIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "crosshair, target, aim, shoot"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 2.5C14.4183 2.5 18 6.08172 18 10.5C18 14.9183 14.4183 18.5 10 18.5C5.58172 18.5 2 14.9183 2 10.5C2 6.08172 5.58172 2.5 10 2.5ZM10 2.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5V18.5001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0001 10.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 10.5H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CrosshairIcon;
  