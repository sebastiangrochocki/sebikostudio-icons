
    import React, { forwardRef } from 'react';
  
    export const SpaceEvenlyHorizontallyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "space evenly horizontally, space evenly, evenly, space, even"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 1.5L18.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 1.5L1.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect width="4" height="5" rx="1" transform="matrix(-4.37114e-08 1 1 4.37114e-08 11 8)" fill="currentColor"/>
<rect width="4" height="5" rx="1" transform="matrix(-4.37114e-08 1 1 4.37114e-08 4 8)" fill="currentColor"/>
</svg>

    ));
  
    export default SpaceEvenlyHorizontallyIcon;
  