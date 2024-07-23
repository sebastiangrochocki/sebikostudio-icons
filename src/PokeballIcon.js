
    import React, { forwardRef } from 'react';
  
    export const PokeballIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "pokeball, ball, circle, pokemon, catch"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="10" r="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9.5H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9.5H7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default PokeballIcon;
  