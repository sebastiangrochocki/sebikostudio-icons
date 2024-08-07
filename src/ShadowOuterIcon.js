
    import React, { forwardRef } from 'react';
  
    export const ShadowOuterIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "shadow outer, shadow, cast, circle"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="8" r="6.5" stroke="currentColor" strokeLinejoin="round"/>
<path d="M10 14.5C13.5899 14.5 16.5 11.5898 16.5 7.99999C16.5 7.25706 16.3754 6.54324 16.1458 5.8783C17.3035 7.2659 18 9.05161 18 11C18 15.4183 14.4183 19 10 19C5.58172 19 2 15.4183 2 11C2 9.05161 2.69652 7.2659 3.85415 5.8783C3.62464 6.54324 3.5 7.25706 3.5 7.99999C3.5 11.5898 6.41015 14.5 10 14.5Z" fill="currentColor"/>
</svg>

    ));
  
    export default ShadowOuterIcon;
  