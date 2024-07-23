
    import React, { forwardRef } from 'react';
  
    export const MouseIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mouse, pointer, cursor, navigate"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 1.5C6.96243 1.5 4.5 3.96243 4.5 7V13C4.5 16.0376 6.96243 18.5 10 18.5C13.0376 18.5 15.5 16.0376 15.5 13V7C15.5 3.96243 13.0376 1.5 10 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MouseIcon;
  