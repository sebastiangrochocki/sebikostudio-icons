
    import React, { forwardRef } from 'react';

    export const ExclamationTriangleIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="exclamation triangle, triangle, warning, beware, exclamation, notification" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 17.5L1.5 17.5L10 1.5L18.5 17.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="14" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 6.5V11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ExclamationTriangleIcon;
  