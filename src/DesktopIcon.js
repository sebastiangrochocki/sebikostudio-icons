
    import React, { forwardRef } from 'react';
  
    export const DesktopIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "desktop, screen, monitor, view"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 14.5V17.5H7.5V14.5M5.5 17.5H14.5M2 14.5H18C18.2761 14.5 18.5 14.2761 18.5 14V4C18.5 3.72386 18.2761 3.5 18 3.5H2C1.72386 3.5 1.5 3.72386 1.5 4V14C1.5 14.2761 1.72386 14.5 2 14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DesktopIcon;
  