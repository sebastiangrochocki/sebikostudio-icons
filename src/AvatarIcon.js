
    import React, { forwardRef } from 'react';

    export const AvatarIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 15.5C5.21427 14.2142 6 12.5 8 12.5H12C14 12.5 14.7857 14.2142 15 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default AvatarIcon;
  