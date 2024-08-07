
    import React, { forwardRef } from 'react';
  
    export const SpaceBetweenVerticallyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "space between vertically, space between, between, space"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 1.5L18.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 18.5L18.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 6C8 6.55228 8.44772 7 9 7H11C11.5523 7 12 6.55228 12 6V1H8V6Z" fill="currentColor"/>
<path d="M8 19H12V14C12 13.4477 11.5523 13 11 13H9C8.44772 13 8 13.4477 8 14V19Z" fill="currentColor"/>
</svg>

    ));
  
    export default SpaceBetweenVerticallyIcon;
  