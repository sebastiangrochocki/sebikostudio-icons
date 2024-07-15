
    import React, { forwardRef } from 'react';

    export const LetterCaseToggleIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="letter case toggle, lowercase, uppercase, lower, upper, large, small" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 15.5L15 4.5L18.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 11.5H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 7.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<ellipse cx="5" cy="11.5" rx="3.5" ry="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default LetterCaseToggleIcon;
  