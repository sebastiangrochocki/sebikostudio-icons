
    import React, { forwardRef } from 'react';
  
    export const EnvelopeOpenIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "envelope opened, envelope, letter, send"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 15.5V5.5L10 1.5L1.5 5.5V15.5C1.5 16.0523 1.94772 16.5 2.5 16.5H17.5C18.0523 16.5 18.5 16.0523 18.5 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 5.5L10 10.5L18.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EnvelopeOpenIcon;
  