
    import React, { forwardRef } from 'react';
  
    export const PilcrowIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pilcrow, p, glyph, paragraph, text, writing, write, type"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.5 3.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 7.5C3.5 9.70914 5.29086 11.5 7.5 11.5H9.5V3.5H7.5C5.29086 3.5 3.5 5.29086 3.5 7.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PilcrowIcon;
  