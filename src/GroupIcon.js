
    import React, { forwardRef } from 'react';
  
    export const GroupIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "group, elements together, container"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 3.5V1.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 16.5V18.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 1.5H18.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 18.5H18.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 1.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 18.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 7.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default GroupIcon;
  