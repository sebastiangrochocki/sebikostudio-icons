
    import React, { forwardRef } from 'react';
  
    export const PaddingBottomIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "padding bottom, box, square"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 1.5H1.5V18.5H18.5V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 14.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 14.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 14.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 14.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 14.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PaddingBottomIcon;
  