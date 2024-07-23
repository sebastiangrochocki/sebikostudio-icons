
    import React, { forwardRef } from 'react';
  
    export const EnterFullScreenIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "enter full screen, full screen, screen, enter, box, corners"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 7.5V3.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 7.5V3.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 12.5V16.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 12.5V16.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EnterFullScreenIcon;
  