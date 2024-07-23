
    import React, { forwardRef } from 'react';
  
    export const MarginIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "margin, box, square"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5.5H5.5V14.5H14.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 2.5V1.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 1.5L18.5 1.5L18.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 1.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 18.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 1.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 18.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 1.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 18.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 9.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 9.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 5.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 5.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 13.5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 13.5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 18.5H18.5L18.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 17.5V18.5H2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MarginIcon;
  