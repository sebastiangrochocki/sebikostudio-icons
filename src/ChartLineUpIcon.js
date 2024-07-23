
    import React, { forwardRef } from 'react';
  
    export const ChartLineUpIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "chart line up, chart line, uptrend, trend up, growth, increase, bull market"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.5 3.5V16.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 12.5L7.5 8.5L10.5 11.5L17.5 5.5M17.5 5.5V8.5M17.5 5.5H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ChartLineUpIcon;
  