
    import React, { forwardRef } from 'react';
  
    export const CounterClockwiseClockIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "counter clockwise clock, clock, time, arrow, time"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.16781 6.94514C4.3375 4.32562 6.96531 2.5 10.0195 2.5C14.1616 2.5 17.5195 5.85786 17.5195 10C17.5195 14.1421 14.1616 17.5 10.0195 17.5C6.80918 17.5 4.06996 15.483 3 12.6471" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5.5V10L13 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 7.5H2.5V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CounterClockwiseClockIcon;
  