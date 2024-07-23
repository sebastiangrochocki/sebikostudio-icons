
    import React, { forwardRef } from 'react';
  
    export const PillarIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pillar, dom, house, government, courthouse, support"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 4.5V1.5H1.5V4.5L3.5 5.5V7.5L4.5 8V9.5H15.5V8L16.5 7.5V5.5L18.5 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 9.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 9.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 9.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 9.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 5.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PillarIcon;
  