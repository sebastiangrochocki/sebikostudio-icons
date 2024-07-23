
    import React, { forwardRef } from 'react';
  
    export const MixIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mix, shapes, square, triangle, circle, cross"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 17.5V12.5H17.5V17.5H12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="5" cy="5" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 2.5L17.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 2.5L12.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 18.5V11.5L8.5 15L2.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MixIcon;
  