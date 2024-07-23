
    import React, { forwardRef } from 'react';
  
    export const WidthIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "width, arrow width, arrow, arrow left, arrow right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 6.5L17.5 10L13.5 13.5M6.5 13.5L2.5 10L6.5 6.5M17 10L3 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default WidthIcon;
  