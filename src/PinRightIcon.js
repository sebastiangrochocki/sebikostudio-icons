
    import React, { forwardRef } from 'react';
  
    export const PinRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pin, pin right, arrow, arrow right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 10L9.5 13.5M13.5 10L9.5 6.5M13.5 10H1.5M17.5 2.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PinRightIcon;
  