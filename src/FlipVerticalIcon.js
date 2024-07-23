
    import React, { forwardRef } from 'react';
  
    export const FlipVerticalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "flip vertical, reflect, vertically, mirror y, y axis, y"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5 1.5L10 6.5L4.5 1.5L15.5 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 18.5L10 13.5L15.5 18.5L4.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="18.25" y="9.75" width="0.5" height="0.5" rx="0.25" transform="rotate(90 18.25 9.75)" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="14.25" y="9.75" width="0.5" height="0.5" rx="0.25" transform="rotate(90 14.25 9.75)" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="10.25" y="9.75" width="0.5" height="0.5" rx="0.25" transform="rotate(90 10.25 9.75)" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="6.25" y="9.75" width="0.5" height="0.5" rx="0.25" transform="rotate(90 6.25 9.75)" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="2.25" y="9.75" width="0.5" height="0.5" rx="0.25" transform="rotate(90 2.25 9.75)" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FlipVerticalIcon;
  