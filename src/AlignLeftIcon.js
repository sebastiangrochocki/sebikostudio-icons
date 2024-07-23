
    import React, { forwardRef } from 'react';
  
    export const AlignLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "align, align left, left"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 1.5L1.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="17" y="6" width="3" height="13" rx="1.5" transform="rotate(90 17 6)" fill="currentColor"/>
<rect x="12" y="11" width="3" height="8" rx="1.5" transform="rotate(90 12 11)" fill="currentColor"/>
</svg>

    ));
  
    export default AlignLeftIcon;
  