
    import React, { forwardRef } from 'react';
  
    export const DrawingPinIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "drawing pin, pin"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8 12L3.5 16.5M8 12L11.5 15.5M8 12L4.5 8.5M8 12L5.5 9.5L13.5 3.5L15 5L16.5 6.5L10.5 14.5L8 12ZM12.5 2.5L17.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DrawingPinIcon;
  