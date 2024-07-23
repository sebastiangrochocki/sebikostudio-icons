
    import React, { forwardRef } from 'react';
  
    export const FlipHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "flip horizontal, reflect, horizontally, mirror x, x, x axis"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4.5L6.5 10L1.5 15.5V4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 15.5L13.5 10L18.5 4.5V15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="9.75" y="1.75" width="0.5" height="0.5" rx="0.25" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="9.75" y="5.75" width="0.5" height="0.5" rx="0.25" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="9.75" y="9.75" width="0.5" height="0.5" rx="0.25" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="9.75" y="13.75" width="0.5" height="0.5" rx="0.25" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="9.75" y="17.75" width="0.5" height="0.5" rx="0.25" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FlipHorizontalIcon;
  