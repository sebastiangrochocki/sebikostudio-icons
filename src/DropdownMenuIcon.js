
    import React, { forwardRef } from 'react';

    export const DropdownMenuIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="dropdown menu, menu, dropdown" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 3.5H1.5V18.5H18.5V3.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 1.5L10 5.5L13.5 1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 8.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 11.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 14.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default DropdownMenuIcon;
  