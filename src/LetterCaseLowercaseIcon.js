
    import React, { forwardRef } from 'react';
  
    export const LetterCaseLowercaseIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "letter case lowercase, lowercase, letters"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.5 7.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="5" cy="11.5" rx="3.5" ry="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="15" cy="11.5" rx="3.5" ry="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LetterCaseLowercaseIcon;
  