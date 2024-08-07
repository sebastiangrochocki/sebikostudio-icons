
    import React, { forwardRef } from 'react';
  
    export const TransparencyGridIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "transparency grid, grid, transparency, background, opacity"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path opacity="0.25" fillRule="evenodd" clipRule="evenodd" d="M0 0H3.99995V3.99975H7.9997V7.9997H3.99975V3.99995H0V0ZM0 8.00001H3.99995V11.9998H7.9997V15.9997H3.99975V12H0V8.00001ZM3.99995 16H0V20H3.99995V16ZM8.00001 0H12V3.99975H15.9997V7.9997H11.9998V3.99995H8.00001V0ZM12 8.00001H8.00001V12H11.9998V15.9997H15.9997V11.9998H12V8.00001ZM8.00001 16H12V20H8.00001V16ZM20 0H16V3.99995H20V0ZM16 8.00001H20V12H16V8.00001ZM20 16H16V20H20V16Z" fill="currentColor"/>
</svg>

    ));
  
    export default TransparencyGridIcon;
  