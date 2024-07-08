
    import React, { forwardRef } from 'react';

    export const PlugIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="plug, cable, power plug" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 15.5C7.067 15.5 5.5 13.933 5.5 12L5.5 6.5L14.5 6.5L14.5 12C14.5 13.933 12.933 15.5 11 15.5L9 15.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 6.5V2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6.5V2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default PlugIcon;
  