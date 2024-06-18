
    import React, { forwardRef } from 'react';

    export const HeightIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 6.5L10 2.5L13.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 13.5L10 17.5L6.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 3V17" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));

    export default HeightIcon;
  