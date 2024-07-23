
    import React, { forwardRef } from 'react';
  
    export const CalendarIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "calendar, date, time, day, month, year, planner, plan"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.5 17V4C2.5 3.72386 2.72386 3.5 3 3.5H17C17.2761 3.5 17.5 3.72386 17.5 4V17C17.5 17.2761 17.2761 17.5 17 17.5H3C2.72386 17.5 2.5 17.2761 2.5 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 8.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 1.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 1.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CalendarIcon;
  