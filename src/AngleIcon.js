
    import React, { forwardRef } from 'react';
  
    export const AngleIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "angle"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 2.5V16.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 16.5C11.5 12.0817 7.91828 8.5 3.5 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default AngleIcon;
  