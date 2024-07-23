
    import React, { forwardRef } from 'react';
  
    export const ThickArrowUpIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "thick arrow down, thick arrow, arrow, arrow down, arrow bottom, bottom"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 11.5L10 3.5L16.5 11.5L12.5 11.5V16.5H7.5L7.5 11.5H3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ThickArrowUpIcon;
  