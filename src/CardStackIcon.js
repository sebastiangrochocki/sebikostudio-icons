
    import React, { forwardRef } from 'react';
  
    export const CardStackIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "card stack, cards, stack"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 7.50004H1.5V18.5L12.5 18.5V7.50004Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 7.5V4.5H15.5V15.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 4.5V1.5H18.5V12.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CardStackIcon;
  