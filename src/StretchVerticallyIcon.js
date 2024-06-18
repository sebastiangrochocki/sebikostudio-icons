
    import React, { forwardRef } from 'react';

    export const StretchVerticallyIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 1.5L18.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 18.5L18.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect width="4" height="12" rx="2" transform="matrix(1 0 0 -1 8 16)" fill="currentColor"/>
</svg>

    ));

    export default StretchVerticallyIcon;
  