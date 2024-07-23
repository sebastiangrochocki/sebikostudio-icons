
    import React, { forwardRef } from 'react';
  
    export const CornerTopLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "corner top left, corner, corner top, top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 15.5V11.5C4.5 7.63401 7.63401 4.5 11.5 4.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CornerTopLeftIcon;
  