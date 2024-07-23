
    import React, { forwardRef } from 'react';
  
    export const CrossCircleIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "cross circle, cross, circle, close circle, close"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 7L13 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7L7 13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CrossCircleIcon;
  