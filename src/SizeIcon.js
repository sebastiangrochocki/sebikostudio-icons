
    import React, { forwardRef } from 'react';
  
    export const SizeIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "size, arrow size, diagonal arrows"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 15.5L15.5 4.5M4.5 15.5V10.5M4.5 15.5H9.5M15.5 4.5V9.5M15.5 4.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default SizeIcon;
  