
    import React, { forwardRef } from 'react';
  
    export const CursorArrowFilledIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "cursor arrow filled, pointer filled, arrow, mouse arrow, mouse cursor filled"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 17.5V1.5L17.5 9.5L13 10.5L16 15L11.5 18L8.5 13.5L4.5 17.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CursorArrowFilledIcon;
  