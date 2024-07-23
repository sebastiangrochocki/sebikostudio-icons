
    import React, { forwardRef } from 'react';
  
    export const PinTopIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pin, pin top, arrow, arrow top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 5.5L13.5 9.5M10 5.5L6.5 9.5M10 5.5V17.5M2.5 2.5L17.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PinTopIcon;
  