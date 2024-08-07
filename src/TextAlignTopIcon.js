
    import React, { forwardRef } from 'react';
  
    export const TextAlignTopIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "text align top, align top, arrow up, text, lines, text top"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 3.5H10.5M18.5 11.5H10.5M18.5 7.5H10.5M4.5 3V16.5M4.5 3L1.5 6.5M4.5 3L7.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TextAlignTopIcon;
  