
    import React, { forwardRef } from 'react';
  
    export const Share2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "share, arrow up, box out, arrow out, out"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 1.5V12.5M10 1.5L13.5 5.5M10 1.5L6.5 5.5M6.5 8.5H4.5C3.94771 8.5 3.5 8.94772 3.5 9.5V16.5C3.5 17.0523 3.94771 17.5 4.5 17.5L15.5 17.5C16.0523 17.5 16.5 17.0523 16.5 16.5V9.5C16.5 8.94772 16.0523 8.5 15.5 8.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Share2Icon;
  