
    import React, { forwardRef } from 'react';

    export const TextIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="No description available" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 5.5V4C4.5 3.72386 4.72386 3.5 5 3.5L15 3.5C15.2761 3.5 15.5 3.72386 15.5 4V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 16.5L12 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default TextIcon;
  