
    import React, { forwardRef } from 'react';
  
    export const TableIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "table, grid, layout, box"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 17.5L2.5 17.5C1.94772 17.5 1.5 17.0523 1.5 16.5L1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5L17.5 2.5C18.0523 2.5 18.5 2.94772 18.5 3.5L18.5 16.5C18.5 17.0523 18.0523 17.5 17.5 17.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2.5V17.5" stroke="currentColor" strokeLinejoin="round"/>
<path d="M18.5 12.5L1.5 12.5" stroke="currentColor" strokeLinejoin="round"/>
<path d="M18.5 7.5L1.5 7.5" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TableIcon;
  