
    import React, { forwardRef } from 'react';
  
    export const ComponentNoneIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "component none, component, none, disabled, blocked"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 2.5L17.5 10L10 17.5L2.5 10L10 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 17.5L17.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ComponentNoneIcon;
  