
    import React, { forwardRef } from 'react';
  
    export const IdCardIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "id card, id, card, passport, identity, person, face id"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 4.5H2.5C1.94772 4.5 1.5 4.94771 1.5 5.5V14.5C1.5 15.0523 1.94772 15.5 2.5 15.5H17.5C18.0523 15.5 18.5 15.0523 18.5 14.5V5.5C18.5 4.94772 18.0523 4.5 17.5 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="6.5" cy="8.5" r="1.5" fill="currentColor"/>
<path d="M11.5 7.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 10.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="4" y="11" width="5" height="2" rx="0.5" fill="currentColor"/>
</svg>

    ));
  
    export default IdCardIcon;
  