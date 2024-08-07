
    import React, { forwardRef } from 'react';
  
    export const HeadingIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "heading, h, letter, letter h, h1, h2, h3, h4, capital, capital letter"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 16.5L7 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 3.5L7 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 9.5L14.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 16.5L16 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 3.5L16 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default HeadingIcon;
  