
    import React, { forwardRef } from 'react';
  
    export const EnvelopeClosedIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "envelope closed, envelope, letter, send"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H17.5C18.0523 3.5 18.5 3.94772 18.5 4.5V15.5C18.5 16.0523 18.0523 16.5 17.5 16.5H2.5C1.94772 16.5 1.5 16.0523 1.5 15.5V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 6.5L10 11.5L15.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EnvelopeClosedIcon;
  