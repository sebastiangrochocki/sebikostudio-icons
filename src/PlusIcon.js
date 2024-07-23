
    import React, { forwardRef } from 'react';
  
    export const PlusIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "plus, add"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3 9.5H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2.5L10 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PlusIcon;
  