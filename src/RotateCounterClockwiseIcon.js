
    import React, { forwardRef } from 'react';
  
    export const RotateCounterClockwiseIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "rotate counter clock wise, rotate, clock wise"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.6538 18.5H3.34615C2.32655 18.5 1.5 17.6734 1.5 16.6538L1.5 8.34615C1.5 7.32655 2.32655 6.5 3.34615 6.5L11.6538 6.5C12.6734 6.5 13.5 7.32655 13.5 8.34615V16.6538C13.5 17.6734 12.6734 18.5 11.6538 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 2.5H12C15.0376 2.5 17.5 4.96243 17.5 8V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.61133 0.759117L6.31202 2.29199C6.16359 2.39094 6.16359 2.60906 6.31202 2.70801L8.61133 4.24088C8.77746 4.35164 9 4.23254 9 4.03287V0.967129C9 0.767455 8.77746 0.648357 8.61133 0.759117Z" fill="currentColor"/>
</svg>

    ));
  
    export default RotateCounterClockwiseIcon;
  