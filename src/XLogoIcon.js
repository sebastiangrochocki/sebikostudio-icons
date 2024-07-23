
    import React, { forwardRef } from 'react';
  
    export const XLogoIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "x logo, x, logo"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.5158 8.77569L17.4682 2H16.0582L10.8875 7.88203L6.76083 2H2L8.24173 10.8955L2 18H3.41002L8.86681 11.787L13.2258 18H17.9867M3.91893 3.04127H6.08513L16.0571 17.0099H13.8904" fill="currentColor"/>
</svg>

    ));
  
    export default XLogoIcon;
  