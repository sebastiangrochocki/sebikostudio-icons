
    import React, { forwardRef } from 'react';
  
    export const CursorTextIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "cursor text, text, cursor, typing, cursor active text"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 5V15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 2.5C8 2.5 10 2.5 10 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 17.5C8 17.5 10 17.5 10 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 2.5C12 2.5 10 2.5 10 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 17.5C12 17.5 10 17.5 10 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 9.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CursorTextIcon;
  