
    import React, { forwardRef } from 'react';
  
    export const PillarsIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pillars, dom, house, government, courthouse"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 18.5H1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 15.5H5.5V9.5H2.5V15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 15.5H11.5V9.5H8.5V15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 15.5H17.5V9.5H14.5V15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 6.5L10 1.5L18.5 6.5H11.5H8.5H1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PillarsIcon;
  