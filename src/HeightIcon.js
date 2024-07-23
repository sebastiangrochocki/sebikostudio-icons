
    import React, { forwardRef } from 'react';
  
    export const HeightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "height, up, down, arrow, arrow up, arrow down"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 6.5L10 2.5L13.5 6.5M13.5 13.5L10 17.5L6.5 13.5M10 3V17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default HeightIcon;
  