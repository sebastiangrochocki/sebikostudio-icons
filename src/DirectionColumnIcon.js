
    import React, { forwardRef } from 'react';
  
    export const DirectionColumnIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "direction column, direction, column, flex direction"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 17.5L6.5 2.5M6.5 17.5L3.5 14.5M6.5 17.5L9.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 2.5L12.5 2.5L12.5 5.5L15.5 5.5L15.5 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 8.5L12.5 8.5L12.5 11.5L15.5 11.5L15.5 8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 14.5L12.5 14.5L12.5 17.5L15.5 17.5L15.5 14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default DirectionColumnIcon;
  