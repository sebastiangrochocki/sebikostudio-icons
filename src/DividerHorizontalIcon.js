
    import React, { forwardRef } from 'react';
  
    export const DividerHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "divider horizontal, divider, horizontal, split, separate"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 9.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 1.5V4.5C3.5 5.05228 3.94772 5.5 4.5 5.5H15.5C16.0523 5.5 16.5 5.05228 16.5 4.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 17.5V14.5C3.5 13.9477 3.94772 13.5 4.5 13.5H15.5C16.0523 13.5 16.5 13.9477 16.5 14.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DividerHorizontalIcon;
  