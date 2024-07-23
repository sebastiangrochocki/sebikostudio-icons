
    import React, { forwardRef } from 'react';
  
    export const ClipboardCopyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "clipboard copy, copied, copied to"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 2.5H4.5C3.94772 2.5 3.5 2.94772 3.5 3.5V17.5C3.5 18.0523 3.94772 18.5 4.5 18.5H5.5M13.5 2.5H15.5C16.0523 2.5 16.5 2.94772 16.5 3.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 4.5V1.5H13.5V4.5H6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 9.5V8.5H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 16.5V17.5H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 8.5L17.5 8.5L17.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 17.5H17.5L17.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 12.5V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 12.5V13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 8.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 17.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ClipboardCopyIcon;
  