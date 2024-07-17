
    import React, { forwardRef } from 'react';

    export const DotFilledIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="dot filled, dot, circle, point" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default DotFilledIcon;
  