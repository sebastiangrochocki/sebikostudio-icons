
    import React, { forwardRef } from 'react';
  
    export const SquareIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "square, box, shape"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 18.5L2.5 18.5C1.94772 18.5 1.5 18.0523 1.5 17.5L1.5 2.5C1.5 1.94772 1.94772 1.5 2.5 1.5L17.5 1.5C18.0523 1.5 18.5 1.94772 18.5 2.5L18.5 17.5C18.5 18.0523 18.0523 18.5 17.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default SquareIcon;
  