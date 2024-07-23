
    import React, { forwardRef } from 'react';
  
    export const Crosshair2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "crosshair, target, aim, shoot"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 13.5V18.5001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 1.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 10H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10H1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Crosshair2Icon;
  