
    import React, { forwardRef } from 'react';
  
    export const MaskOffIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mass off, clipping mask, mask"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 17V3C1.5 2.72386 1.72386 2.5 2 2.5H18C18.2761 2.5 18.5 2.72386 18.5 3V17C18.5 17.2761 18.2761 17.5 18 17.5H2C1.72386 17.5 1.5 17.2761 1.5 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MaskOffIcon;
  