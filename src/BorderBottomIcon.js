
    import React, { forwardRef } from 'react';
  
    export const BorderBottomIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "border bottom, border"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 14V1.5H18.5V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="1.5" y="17.5" width="17" height="1" rx="0.5" fill="#D9D9D9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BorderBottomIcon;
  