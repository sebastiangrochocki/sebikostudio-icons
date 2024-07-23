
    import React, { forwardRef } from 'react';
  
    export const MarginBottomIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "margin bottom, box, square"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5.5H5.5V14.5H14.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 18.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MarginBottomIcon;
  