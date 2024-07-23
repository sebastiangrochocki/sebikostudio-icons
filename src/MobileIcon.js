
    import React, { forwardRef } from 'react';
  
    export const MobileIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mobile, phone, cell phone, cell, call"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 15.5H12.5M15.5 2.5V17.5C15.5 18.0523 15.0523 18.5 14.5 18.5H5.5C4.94771 18.5 4.5 18.0523 4.5 17.5V2.5C4.5 1.94772 4.94772 1.5 5.5 1.5H14.5C15.0523 1.5 15.5 1.94772 15.5 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MobileIcon;
  