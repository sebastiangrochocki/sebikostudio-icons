
    import React, { forwardRef } from 'react';
  
    export const Switch2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "switch, component"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect x="1.5" y="5.5" width="17" height="9" rx="4.5" stroke="currentColor"/>
<path d="M16.5 10C16.5 8.61929 15.3807 7.5 14 7.5C12.6193 7.5 11.5 8.61929 11.5 10C11.5 11.3807 12.6193 12.5 14 12.5C15.3807 12.5 16.5 11.3807 16.5 10Z" fill="currentColor"/>
</svg>

    ));
  
    export default Switch2Icon;
  