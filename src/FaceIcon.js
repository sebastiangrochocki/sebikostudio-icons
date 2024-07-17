
    import React, { forwardRef } from 'react';

    export const FaceIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="face, smile, smiley" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 12.5C11.3431 14.5 8.65685 14.5 7 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="7" cy="8" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="13" cy="8" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default FaceIcon;
  