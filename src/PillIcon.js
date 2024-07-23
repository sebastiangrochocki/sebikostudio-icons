
    import React, { forwardRef } from 'react';
  
    export const PillIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pill, medicine, meds"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 1.5C8.067 1.5 6.5 3.067 6.5 5V15C6.5 16.933 8.067 18.5 10 18.5C11.933 18.5 13.5 16.933 13.5 15V5C13.5 3.067 11.933 1.5 10 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PillIcon;
  