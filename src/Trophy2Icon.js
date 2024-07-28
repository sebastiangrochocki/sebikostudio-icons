
    import React, { forwardRef } from 'react';
  
    export const Trophy2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "trophy, award, winner, success, champion, gold, first place"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 1.5H10H15.5V8C15.5 11.0376 13.0376 13.5 10 13.5C6.96243 13.5 4.5 11.0376 4.5 8V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17.5V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="6" y="16" width="8" height="3" rx="0.5" fill="currentColor"/>
<path d="M5 10.5C3 10.5 1.5 8.5 1.5 6V3.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 10.5C17 10.5 18.5 8.5 18.5 6V3.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Trophy2Icon;
  