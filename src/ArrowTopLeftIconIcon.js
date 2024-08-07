
    import React, { forwardRef } from 'react';
  
    export const ArrowTopLeftIconIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "arrow, arrow top left, top, left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 4.5L15.5 15.5M4.5 4.5L4.50001 11.5M4.5 4.5L11.5001 4.50004" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ArrowTopLeftIconIcon;
  