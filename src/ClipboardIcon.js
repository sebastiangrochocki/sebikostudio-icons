
    import React, { forwardRef } from 'react';
  
    export const ClipboardIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "clipboard, copy to, copy"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 2.5H4.5C3.94772 2.5 3.5 2.94772 3.5 3.5V17.5C3.5 18.0523 3.94772 18.5 4.5 18.5H15.5C16.0523 18.5 16.5 18.0523 16.5 17.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 4.5V1.5H13.5V4.5H6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ClipboardIcon;
  