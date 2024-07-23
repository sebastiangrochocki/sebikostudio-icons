
    import React, { forwardRef } from 'react';
  
    export const AspectRatio2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "aspect ratio, proportions, ratio"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 7.5V2.5H6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 17.5H18.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default AspectRatio2Icon;
  