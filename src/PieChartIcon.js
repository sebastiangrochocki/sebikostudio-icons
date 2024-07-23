
    import React, { forwardRef } from 'react';
  
    export const PieChartIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pie chart, chart, pie"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.50015 4.02052C6.42031 4.27453 4 6.85462 4 10C4 13.3137 6.68629 16 10 16C13.1454 16 15.7255 13.5797 15.9795 10.4998C16.0022 10.2246 15.7761 10 15.5 10H10V4.5C10 4.22386 9.77536 3.99783 9.50015 4.02052Z" fill="currentColor"/>
</svg>

    ));
  
    export default PieChartIcon;
  