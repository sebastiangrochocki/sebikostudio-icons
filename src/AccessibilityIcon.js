
    import React, { forwardRef } from 'react';
  
    export const AccessibilityIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "accessibility, a11y, user, person, human, circle, sign"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 15L9 11.5H11L12.5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 7.5L9 8.5H11L14.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="5" r="1.5" fill="currentColor"/>
<path d="M9 8.5V11.5H11V8.5H9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default AccessibilityIcon;
  