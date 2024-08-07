
    import React, { forwardRef } from 'react';
  
    export const FacebookLogoIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "facebook logo, logo, facebook"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M19 10.055C19 5.05405 14.9706 1 10 1C5.02939 1 1 5.05405 1 10.055C1 14.5746 4.29121 18.3207 8.59375 19V12.6725H6.30865V10.055H8.59375V8.06005C8.59375 5.7907 9.93736 4.53709 11.9931 4.53709C12.9779 4.53709 14.0078 4.71394 14.0078 4.71394V6.94234H12.8729C11.7549 6.94234 11.4062 7.64029 11.4062 8.35642V10.055H13.9023L13.5033 12.6725H11.4062V19C15.7089 18.3207 19 14.5746 19 10.055Z" fill="currentColor"/>
</svg>

    ));
  
    export default FacebookLogoIcon;
  