
    import React, { forwardRef } from 'react';
  
    export const BorderLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "border left, border"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6 1.5H18.5L18.5 18.5H6.00001" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 2V18C1.5 18.2761 1.72386 18.5 2 18.5C2.27614 18.5 2.5 18.2761 2.5 18V2C2.5 1.72386 2.27614 1.5 2 1.5C1.72386 1.5 1.5 1.72386 1.5 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BorderLeftIcon;
  