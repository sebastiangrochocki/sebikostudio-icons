
    import React, { forwardRef } from 'react';
  
    export const BoxIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "box, square"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.5 18.5L3.5 18.5C2.39543 18.5 1.5 17.6046 1.5 16.5L1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5L16.5 1.5C17.6046 1.5 18.5 2.39543 18.5 3.5L18.5 16.5C18.5 17.6046 17.6046 18.5 16.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BoxIcon;
  