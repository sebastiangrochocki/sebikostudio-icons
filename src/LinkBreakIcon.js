
    import React, { forwardRef } from 'react';

    export const LinkBreakIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="link break, unlink" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6.5C16.933 6.5 18.5 8.067 18.5 10C18.5 11.933 16.933 13.5 15 13.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 13.5C3.067 13.5 1.5 11.933 1.5 10C1.5 8.067 3.067 6.5 5 6.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 2.5L6.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default LinkBreakIcon;
  