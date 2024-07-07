
    import React, { forwardRef } from 'react';

    export const FontSizeIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="font size, text, text size, a, arrows" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 4L1.5 7.5M4.5 4L7.5 7.5M4.5 4V16M4.5 16L1.5 12.5M4.5 16L7.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 15.5L14.5 4.5L18.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.5H17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default FontSizeIcon;
  