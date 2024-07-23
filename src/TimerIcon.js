
    import React, { forwardRef } from 'react';
  
    export const TimerIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "timer, stopwatch"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.51526 4.67609C2.96673 6.13498 2 8.20459 2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5V4.78571" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0002 10.5001L7.14307 7.07153" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.2144V18.5001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.0001 10.5H15.7144" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.28571 10.5H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.4286 2.5L15.7144 4.21429" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 3.5L16.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TimerIcon;
  