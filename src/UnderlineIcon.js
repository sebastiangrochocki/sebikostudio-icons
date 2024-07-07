
    import React, { forwardRef } from 'react';

    export const UnderlineIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="underline, line, u" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 4.5V11C5.5 13.4853 7.51472 15.5 10 15.5C12.4853 15.5 14.5 13.4853 14.5 11V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 18.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default UnderlineIcon;
  