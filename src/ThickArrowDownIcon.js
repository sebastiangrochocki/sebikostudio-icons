
    import React, { forwardRef } from 'react';
  
    export const ThickArrowDownIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "thick arrow top, thick arrow, arrow, arrow top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 8.5L10 16.5L16.5 8.5L12.5 8.5V3.5H7.5L7.5 8.5H3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ThickArrowDownIcon;
  