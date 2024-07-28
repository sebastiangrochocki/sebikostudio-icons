
    import React, { forwardRef } from 'react';
  
    export const RowIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "row component, row, content, web row, container"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 13.5H1.5V6.5H18.5V13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 1.5V2.5C3.5 3.05228 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.05228 16.5 2.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 18.5V17.5C3.5 16.9477 3.94772 16.5 4.5 16.5H15.5C16.0523 16.5 16.5 16.9477 16.5 17.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default RowIcon;
  