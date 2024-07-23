
    import React, { forwardRef } from 'react';
  
    export const DirectionRowReverseIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "direction row reverse, direction, row reverse, flex direction, reverse, row"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.5 13.5H17.5M2.5 13.5L5.5 16.5M2.5 13.5L5.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 4.5V7.5H5.5V4.5H2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 4.5V7.5H11.5V4.5H8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 4.5V7.5H17.5V4.5H14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DirectionRowReverseIcon;
  