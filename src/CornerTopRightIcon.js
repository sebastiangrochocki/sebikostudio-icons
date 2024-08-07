
    import React, { forwardRef } from 'react';
  
    export const CornerTopRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "corner top right, corner, corner top, top, right"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5 15.5V11.5C15.5 7.63401 12.366 4.5 8.5 4.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CornerTopRightIcon;
  