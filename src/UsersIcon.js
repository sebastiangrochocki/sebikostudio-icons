
    import React, { forwardRef } from 'react';
  
    export const UsersIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "avatar, people, users"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="8" cy="6" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 8.5C14.3807 8.5 15.5 7.38071 15.5 6C15.5 4.61929 14.3807 3.5 13 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 16.5V15.5C2.5 14 3 11.5 6 11.5H10C13 11.5 13.5 14 13.5 15.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 11.5C18 11.5 18.5 14 18.5 15.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default UsersIcon;
  