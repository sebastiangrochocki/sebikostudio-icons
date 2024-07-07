
    import React, { forwardRef } from 'react';

    export const CopyIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="copy, boxes" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.5V2.5H17.5V12.5H15.5M2.5 7.5H12.5V17.5H2.5V7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CopyIcon;
  