
    import React, { forwardRef } from 'react';

    export const PersonIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="person, avatar, people, user" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10.0001" cy="6.50006" r="3.50006" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 17.5V16.5C3.5 15 4.5 12.5 7.5 12.5H12.5C15.5 12.5 16.5 15 16.5 16.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default PersonIcon;
  