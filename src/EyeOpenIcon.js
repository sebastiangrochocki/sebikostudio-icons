
    import React, { forwardRef } from 'react';
  
    export const EyeOpenIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "eye, eye opened"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3.5C4.5 3.5 1.5 9.5 1.5 9.5C1.5 9.5 4.5 15.5 10 15.5C15.5 15.5 18.5 9.5 18.5 9.5C18.5 9.5 15.5 3.5 10 3.5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M13 9.5C13 11.1569 11.6569 12.5 10 12.5C8.3431 12.5 7 11.1569 7 9.5C7 7.8431 8.3431 6.5 10 6.5C11.6569 6.5 13 7.8431 13 9.5Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EyeOpenIcon;
  