
    import React, { forwardRef } from 'react';
  
    export const MicSlashIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mic slash, slash, sound off, volume down, off, no sound, music off, mic off"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C8.61929 1.5 7.5 2.61929 7.5 4V9M8.35526 11.8828C8.79485 12.2671 9.37023 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5C13.0376 15.5 15.5 13.0376 15.5 10V8.5M10 15.5V18.5M10 15.5C8.61576 15.5 7.35096 14.9886 6.3842 14.1445L6.2 14M4.5 6.5V10C4.5 10.7056 4.63286 11.3801 4.87494 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 17.5L17.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MicSlashIcon;
  