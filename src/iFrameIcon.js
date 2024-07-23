
    import React, { forwardRef } from 'react';
  
    export const IFrameIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "iframe, www, web, frame"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4C1.5 3.72386 1.72386 3.5 2 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V16C18.5 16.2761 18.2761 16.5 18 16.5H2C1.72386 16.5 1.5 16.2761 1.5 16V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 7.5L15.5 10L13 12.5M7 7.5L4.5 10L7 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 6L9 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default IFrameIcon;
  