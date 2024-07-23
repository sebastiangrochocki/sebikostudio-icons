
    import React, { forwardRef } from 'react';
  
    export const LaptopIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "laptop, screen, monitor, view, portable"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 14.5V5C17.5 4.72386 17.2761 4.5 17 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5V14.5M17.5 14.5H2.5M17.5 14.5H18.5V15.5H1.5V14.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LaptopIcon;
  