
    import React, { forwardRef } from 'react';

    export const ExitIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="exit, arrow, arrow right, box, out" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 10H8.5M18.5 10L14.5 13.5M18.5 10L14.5 6.5M10.5 1.5H3.5C2.94772 1.5 2.5 1.94772 2.5 2.5V17.5C2.5 18.0523 2.94772 18.5 3.5 18.5H10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ExitIcon;
  