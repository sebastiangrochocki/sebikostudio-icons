
    import React, { forwardRef } from 'react';
  
    export const PresentationMinus3Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "presentation minus, remove slide, slide, canvas, remove board"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 3.5H1.5V15.5H18.5V3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 1.5V3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 18.5L6.81579 15.5M14.5 18.5L13.1842 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 9.5L7.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PresentationMinus3Icon;
  