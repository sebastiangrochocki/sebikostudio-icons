
    import React, { forwardRef } from 'react';
  
    export const TouchpadIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "touchpad, touch gesture, navigate, control"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 12.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 12.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 16.5V3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5V16.5C18.5 17.0523 18.0523 17.5 17.5 17.5H2.5C1.94772 17.5 1.5 17.0523 1.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TouchpadIcon;
  