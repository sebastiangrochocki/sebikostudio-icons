
    import React, { forwardRef } from 'react';
  
    export const Margin2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "margin, box, square, margins, strokes"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5.5H5.5V14.5H14.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 18.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 1.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Margin2Icon;
  