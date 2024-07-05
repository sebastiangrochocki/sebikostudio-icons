
    import React, { forwardRef } from 'react';

    export const BadgeIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 10C1.5 8.067 3.067 6.5 5 6.5H15C16.933 6.5 18.5 8.067 18.5 10C18.5 11.933 16.933 13.5 15 13.5H5C3.067 13.5 1.5 11.933 1.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 9L7 11L8.5 9L10 11L11.5 9L13 11L14.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default BadgeIcon;
  