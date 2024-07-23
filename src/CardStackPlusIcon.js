
    import React, { forwardRef } from 'react';
  
    export const CardStackPlusIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "card stack plus, cards, add card, card"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 5.5H2.5V17.5L14.5 17.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 5.5V1.5H18.5V13.5H14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 11.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 9L8.5 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CardStackPlusIcon;
  