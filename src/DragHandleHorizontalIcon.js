
    import React, { forwardRef } from 'react';
  
    export const DragHandleHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "drag handle horizontal, drag handle, handle, horizontal, lines"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 5.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 8.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 11.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 14.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DragHandleHorizontalIcon;
  