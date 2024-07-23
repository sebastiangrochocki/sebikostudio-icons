
    import React, { forwardRef } from 'react';
  
    export const AllSidesIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "all sides, triangles, triangle, triangles filled, directions"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 7.5L1.5 10L4.5 12.5V7.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<path d="M12.5 4.5L10 1.5L7.5 4.5L12.5 4.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<path d="M12.5 15.5L10 18.5L7.5 15.5L12.5 15.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<path d="M15.5 7.5L18.5 10L15.5 12.5V7.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default AllSidesIcon;
  