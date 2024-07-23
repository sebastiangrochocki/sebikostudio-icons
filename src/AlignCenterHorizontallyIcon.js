
    import React, { forwardRef } from 'react';
  
    export const AlignCenterHorizontallyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "align, align center horizontally, align center, center"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 1.5L10 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect width="3" height="16" rx="1.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 2 6)" fill="currentColor"/>
<rect width="3" height="10" rx="1.5" transform="matrix(-4.37114e-08 1 1 4.37114e-08 5 11)" fill="currentColor"/>
</svg>

    ));
  
    export default AlignCenterHorizontallyIcon;
  