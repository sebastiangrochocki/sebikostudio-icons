
    import React, { forwardRef } from 'react';
  
    export const EyedropperIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "eyedropper, sample, color picker, picker"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17 6.49988C17.9763 5.52357 17.9763 3.97622 17 2.9999C16.0237 2.02359 14.4763 2.02365 13.5 2.99996L11.5 5L15 8.5L17 6.49988Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 7.5L7 16.5L3.267 17.3296C2.90975 17.4089 2.59106 17.0902 2.67045 16.733L3.5 13L12.5 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 9.5L10.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EyedropperIcon;
  