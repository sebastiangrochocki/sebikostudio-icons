
    import React, { forwardRef } from 'react';
  
    export const AlignTopIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "align, align top, top, up"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 1.5L18.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect width="3" height="13" rx="1.5" transform="matrix(1 0 0 -1 6 17)" fill="currentColor"/>
<rect width="3" height="8" rx="1.5" transform="matrix(1 0 0 -1 11 12)" fill="currentColor"/>
</svg>

    ));
  
    export default AlignTopIcon;
  