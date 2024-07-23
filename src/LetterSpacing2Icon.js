
    import React, { forwardRef } from 'react';
  
    export const LetterSpacing2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "letter spacing, text letter spacing, letter, spacing"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 1.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 1.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 15.5L10 4.5L14.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.30005 11.5L12.7001 11.5001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LetterSpacing2Icon;
  