
    import React, { forwardRef } from 'react';

    export const TransformIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="No description available" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3.5L5 3.5M16.5 15L16.5 5M3.5 15L3.5 5M5 16.5L15 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="6.5" y="6.5" width="3" height="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="9.5" y="9.5" width="4" height="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 5C2.67157 5 2 4.32843 2 3.5V3.5C2 2.67157 2.67157 2 3.5 2V2C4.32843 2 5 2.67157 5 3.5V3.5C5 4.32843 4.32843 5 3.5 5V5Z" stroke="currentColor" strokeLinejoin="round"/>
<rect x="2" y="18" width="3" height="3" rx="1.5" transform="rotate(-90 2 18)" stroke="currentColor" strokeLinejoin="round"/>
<rect x="15" y="5" width="3" height="3" rx="1.5" transform="rotate(-90 15 5)" stroke="currentColor" strokeLinejoin="round"/>
<rect x="15" y="18" width="3" height="3" rx="1.5" transform="rotate(-90 15 18)" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));

    export default TransformIcon;
  