
    import React, { forwardRef } from 'react';
  
    export const BarChartIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "bar chart, chart, bars, lines"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.5 10.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 12.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 12.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 7.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 7.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 4.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BarChartIcon;
  