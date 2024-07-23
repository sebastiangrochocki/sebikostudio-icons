
    import React, { forwardRef } from 'react';
  
    export const PauseIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pause, two lines vertical"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PauseIcon;
  