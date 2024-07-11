
    import React, { forwardRef } from 'react';

    export const RowsIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="rows" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 18.5L16.5 18.5V15.5L3.5 15.5L3.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 11.5L16.5 11.5V8.5L3.5 8.5L3.5 11.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 4.5L16.5 4.5V1.5L3.5 1.5L3.5 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default RowsIcon;
  