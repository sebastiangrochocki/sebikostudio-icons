
    import React, { forwardRef } from 'react';
  
    export const DotsHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "dots horizontal, three dots, dots, menu, more, options"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect x="9" y="9" width="2" height="2" rx="1" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="15.5" y="9" width="2" height="2" rx="1" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="2.5" y="9" width="2" height="2" rx="1" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DotsHorizontalIcon;
  