
    import React, { forwardRef } from 'react';
  
    export const ColumnIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "column component, column, content, web column, container"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 18.5L6.5 1.5L13.5 1.5L13.5 18.5L6.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 3.5L17.5 3.5C16.9477 3.5 16.5 3.94772 16.5 4.5L16.5 15.5C16.5 16.0523 16.9477 16.5 17.5 16.5L18.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 3.5L2.5 3.5C3.05228 3.5 3.5 3.94772 3.5 4.5L3.5 15.5C3.5 16.0523 3.05228 16.5 2.5 16.5L1.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ColumnIcon;
  