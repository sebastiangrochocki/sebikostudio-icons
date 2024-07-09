
    import React, { forwardRef } from 'react';

    export const IntersectIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="intersect selection, intersect, selection" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17.5H12.5V12.5H7.5V7.5H2.5V17.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 2.5H7.5V7.5H12.5V12.5H17.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 7.5H7.5V12.5H12.5V7.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default IntersectIcon;
  