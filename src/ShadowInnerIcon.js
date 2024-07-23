
    import React, { forwardRef } from 'react';
  
    export const ShadowInnerIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "shadow inner, shadow, cast, circle"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeLinejoin="round"/>
<path d="M7.75 17.1566C10.7928 16.2009 13 13.3582 13 10C13 6.64177 10.7928 3.79905 7.75 2.84335C8.46028 2.62027 9.2161 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C9.21609 17.5 8.46028 17.3797 7.75 17.1566Z" fill="currentColor"/>
</svg>

    ));
  
    export default ShadowInnerIcon;
  