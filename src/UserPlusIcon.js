
    import React, { forwardRef } from 'react';
  
    export const UserPlusIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "person, avatar, people, user plus, user add, add, plus"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="13" cy="6" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 16.5V15.5C7.5 14 8 11.5 11 11.5H15C18 11.5 18.5 14 18.5 15.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 8.5H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 6L4.5 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default UserPlusIcon;
  