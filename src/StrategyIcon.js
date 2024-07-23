
    import React, { forwardRef } from 'react';
  
    export const StrategyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "strategy, circles, cross, navigate, arrow, plan, objectives"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="16.5" cy="5.5" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="8.5" cy="14.5" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5.5H8.5C4.63401 5.5 1.5 8.63401 1.5 12.5V16.5M12 5.5L9.5 8M12 5.5L9.5 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 12.5L18.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 12.5L14.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default StrategyIcon;
  