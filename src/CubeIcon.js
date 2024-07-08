
    import React, { forwardRef } from 'react';

    export const CubeIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="cube, 3d, box" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 18.5L2.5 14.5V5.5M10 18.5L17.5 14.5V5.5M10 18.5V9.5M2.5 5.5L10 9.5M2.5 5.5L10 1.5L17.5 5.5M10 9.5L17.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CubeIcon;
  