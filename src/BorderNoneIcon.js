
    import React, { forwardRef } from 'react';
  
    export const BorderNoneIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "border none, none, borders none"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 2.5V1.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 17.5V18.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 1.5L18.5 1.5L18.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 18.5H18.5L18.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 1.5H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 6V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 6V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 18.5H8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 1.5H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 12V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 12V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.5H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BorderNoneIcon;
  