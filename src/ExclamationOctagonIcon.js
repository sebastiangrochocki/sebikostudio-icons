
    import React, { forwardRef } from 'react';
  
    export const ExclamationOctagonIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "exclamation octagon, octagon, warning, error, danger"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="14" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 5.5V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 1.5H6.5L1.5 6.5V13.5L6.5 18.5H13.5L18.5 13.5V6.5L13.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ExclamationOctagonIcon;
  