
    import React, { forwardRef } from 'react';
  
    export const Cross2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "cross, x, close, menu close"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 4.5L15.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 4.5L4.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Cross2Icon;
  