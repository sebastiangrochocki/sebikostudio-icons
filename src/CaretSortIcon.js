
    import React, { forwardRef } from 'react';

    export const CaretSortIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="No description available" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 7.5L10 3.5L13.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 12.5L10 16.5L6.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CaretSortIcon;
  