
    import React, { forwardRef } from 'react';

    export const AvatarsIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="avatar, user, person, avatars, avatar group, people" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 3.5H8H5.5C3.29086 3.5 1.5 5.29086 1.5 7.5V12.5C1.5 14.7091 3.29086 16.5 5.5 16.5H8H14.5C16.7091 16.5 18.5 14.7091 18.5 12.5V7.5C18.5 5.29086 16.7091 3.5 14.5 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="6.5" cy="8" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="13.5" cy="8" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 15C2.5 13.5 3.8 12.5 5.50009 12.5H7.50008C9.2 12.5 10.5 13.5 10.5 15V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 12.5H15C16.7 12.5 17.5 13.5 17.5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default AvatarsIcon;
  