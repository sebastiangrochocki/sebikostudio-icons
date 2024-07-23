
    import React, { forwardRef } from 'react';
  
    export const FontFamilyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "font family, typeface, font, text style"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.5 3.5H6.5C5.39543 3.5 4.5 4.39543 4.5 5.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9.5H13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 3.5L7.69877 14.4813C7.28052 15.6896 6.14242 16.5 4.86381 16.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FontFamilyIcon;
  