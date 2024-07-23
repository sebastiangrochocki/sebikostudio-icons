
    import React, { forwardRef } from 'react';
  
    export const PaddingLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "padding left, box, square"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 1.5H1.5V18.5H18.5V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 5.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 13.5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 9.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 17.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 1.5V2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PaddingLeftIcon;
  