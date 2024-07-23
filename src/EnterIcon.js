
    import React, { forwardRef } from 'react';
  
    export const EnterIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "enter, arrow right, box in, in, inside"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M13.5 10H2.5M13.5 10L9.5 13.5M13.5 10L9.5 6.5M7.5 1.5H16.5C17.0523 1.5 17.5 1.94772 17.5 2.5V17.5C17.5 18.0523 17.0523 18.5 16.5 18.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EnterIcon;
  