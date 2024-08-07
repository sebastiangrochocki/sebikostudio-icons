
    import React, { forwardRef } from 'react';
  
    export const LapTimerFilledIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "lap timer filled, lap timer, timer, time"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 11.5C17 7.63401 13.866 4.5 10 4.5C6.13401 4.5 3 7.63401 3 11.5C3 15.366 6.13401 18.5 10 18.5C13.866 18.5 17 15.366 17 11.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5008 7.02738C7.25044 7.27573 5.5 9.18345 5.5 11.5C5.5 13.9853 7.51472 16 10 16C12.3166 16 14.2243 14.2496 14.4726 11.9992C14.5029 11.7247 14.2761 11.5 14 11.5H10V7.5C10 7.22386 9.77528 6.99708 9.5008 7.02738Z" fill="currentColor"/>
<path d="M10 1.5V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 4.5L15 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 1.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LapTimerFilledIcon;
  