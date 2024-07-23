
    import React, { forwardRef } from 'react';
  
    export const UnsplashIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "unsplash, logo"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7 6.5V2H13V6.5H7ZM13 9H18V18H2V9H7V13.5H13V9Z" fill="currentColor"/>
</svg>

    ));
  
    export default UnsplashIcon;
  