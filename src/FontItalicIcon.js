
    import React, { forwardRef } from 'react';
  
    export const FontItalicIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "font italic, italic, font, letter, letter tilted"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12 4.50003L8 15.5" stroke="currentColor" strokeLinejoin="round"/>
<path d="M5 15.5H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 4.5H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FontItalicIcon;
  