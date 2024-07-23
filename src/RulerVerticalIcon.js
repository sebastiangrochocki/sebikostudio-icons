
    import React, { forwardRef } from 'react';
  
    export const RulerVerticalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "ruler vertical, size, cm, mm, inch"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 1.5L6.5 18.5H13.5L13.5 1.5L6.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 15.5L10.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 12.5L8.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9.5L8.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 6.5L10 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 3.5L8.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default RulerVerticalIcon;
  