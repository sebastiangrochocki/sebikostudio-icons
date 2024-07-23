
    import React, { forwardRef } from 'react';
  
    export const FontRomanIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "font roman, font, roman, i, letter"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 4.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 15.5H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 4.5H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FontRomanIcon;
  