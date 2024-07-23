
    import React, { forwardRef } from 'react';
  
    export const EyeNoneIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "No description available"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 1.5L2.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.3622 6.55218C17.7673 8.03459 18.5 9.5 18.5 9.5C18.5 9.5 15.5 15.5 10 15.5C9.51301 15.5 9.04561 15.453 8.59817 15.3672M12.1139 3.80564C12.0761 3.79451 12.0381 3.78364 12 3.77305C11.3755 3.59957 10.7085 3.5 10 3.5C4.5 3.5 1.5 9.5 1.5 9.5C1.5 9.5 2.39836 11.2967 4.11313 12.9237" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.27498 11.9548C7.50382 11.4119 7 10.5148 7 9.5C7 7.8431 8.3431 6.5 10 6.5C10.8661 6.5 11.6464 6.86695 12.194 7.45385" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EyeNoneIcon;
  