
    import React, { forwardRef } from 'react';
  
    export const RulerHorizontalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "ruler horizontal, size, cm, mm, inch"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 6.5H1.5V13.5H18.5V6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 6.5V10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 6.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 6.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 6.5V10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 6.5V8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default RulerHorizontalIcon;
  