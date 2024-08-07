
    import React, { forwardRef } from 'react';
  
    export const TextAlignBottomIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "text align bottom, align bottom, arrow down, text, lines, text bottom"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 8.5H10.5M18.5 16.5H10.5M18.5 12.5H10.5M4.5 17V3.5M4.5 17L1.5 13.5M4.5 17L7.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TextAlignBottomIcon;
  