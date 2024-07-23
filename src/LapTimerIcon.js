
    import React, { forwardRef } from 'react';
  
    export const LapTimerIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "lap timer, timer, time"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 11.5C17 7.63401 13.866 4.5 10 4.5C6.13401 4.5 3 7.63401 3 11.5C3 15.366 6.13401 18.5 10 18.5C13.866 18.5 17 15.366 17 11.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 7C7.51472 7 5.5 9.01472 5.5 11.5C5.5 13.9853 7.51472 16 10 16C12.4853 16 14.5 13.9853 14.5 11.5H10V7Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 1.5V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 4.5L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 1.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LapTimerIcon;
  