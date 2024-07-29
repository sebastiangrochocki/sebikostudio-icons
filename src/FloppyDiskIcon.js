
    import React, { forwardRef } from 'react';
  
    export const FloppyDiskIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "floppy disk, disk, save"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 18.5H18.5V3.5L16.5 1.5H1.5V18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 1.5V9.5H14.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 1.5V6.5H10.5V1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 12.5L10.5001 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 15.5L10.5001 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FloppyDiskIcon;
  