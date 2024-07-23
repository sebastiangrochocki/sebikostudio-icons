
    import React, { forwardRef } from 'react';
  
    export const MaskOnIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mass on, clipping mask, mask, clip"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M1.5 3V17C1.5 17.2761 1.72386 17.5 2 17.5H18C18.2761 17.5 18.5 17.2761 18.5 17V3C18.5 2.72386 18.2761 2.5 18 2.5H2C1.72386 2.5 1.5 2.72386 1.5 3ZM10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5Z" fill="currentColor"/>
</svg>

    ));
  
    export default MaskOnIcon;
  