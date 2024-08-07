
    import React, { forwardRef } from 'react';
  
    export const UsersThreeIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "users three, people, users, three"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="10" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="14" cy="3.5" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.50009 14.5C6.8 14.5 5.5 15.5 5.5 17V18.5H14.5V17C14.5 15.5 13.1999 14.5 11.5 14.5H8.50009Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 8H15.4999C17.1998 8 18.4999 9 18.4999 10.5L18.5 12.5H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="6" cy="3.5" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 8H4.50009C2.8 8 1.5 9 1.5 10.5V12.5H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default UsersThreeIcon;
  