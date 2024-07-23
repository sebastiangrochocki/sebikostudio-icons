
    import React, { forwardRef } from 'react';
  
    export const TextNoneIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "text none, text, t, letter, letter t, none, text slash, slash"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 5.5V4C4.5 3.72386 4.72386 3.5 5 3.5L12.5 3.5M15.5 5.5V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3.5V7M10 16.5V10.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16.5L12 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 18L17.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TextNoneIcon;
  