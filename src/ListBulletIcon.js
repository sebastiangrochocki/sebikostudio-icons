
    import React, { forwardRef } from 'react';

    export const ListBulletIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="list bullet, bullet points, points, list" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.5L6.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 13.5L6.5 13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 9.5L6.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="2" y="8.5" width="2" height="2" rx="1" fill="currentColor"/>
<rect x="2" y="4.5" width="2" height="2" rx="1" fill="currentColor"/>
<rect x="2" y="12.5" width="2" height="2" rx="1" fill="currentColor"/>
</svg>

    ));

    export default ListBulletIcon;
  