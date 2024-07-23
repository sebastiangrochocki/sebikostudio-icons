
    import React, { forwardRef } from 'react';
  
    export const BarChartHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "bar chart horizontal, chart, bars, lines"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.5 2.5L3.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 5.5L3.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 17.5L3.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 8.5L3.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 14.5L3.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 11.5L3.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BarChartHorizontalIcon;
  