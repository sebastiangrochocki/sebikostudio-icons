
    import React, { forwardRef } from 'react';
  
    export const StackIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "stack, layers, boxes"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4 11.5L2.5 12.5L10 17.5L17.5 12.5L16 11.5M2.5 7.5L10 12.5L17.5 7.5L10 2.5L2.5 7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default StackIcon;
  