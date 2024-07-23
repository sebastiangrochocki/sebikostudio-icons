
    import React, { forwardRef } from 'react';
  
    export const StarFilledIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "star, shape, star filled, filled"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 6.5L10 1.5L12.5 6.5L18.5 7.5L14.5 11.5L15.5 17.5L10 14.5L4.5 17.5L5.5 11.5L1.5 7.5L7.5 6.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default StarFilledIcon;
  