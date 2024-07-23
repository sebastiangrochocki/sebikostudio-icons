
    import React, { forwardRef } from 'react';
  
    export const ToggleGroupIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "toggle, toggle group, buttons"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4.88462C1.5 4.6722 1.72386 4.5 2 4.5H18C18.2761 4.5 18.5 4.6722 18.5 4.88462V14.1154C18.5 14.3278 18.2761 14.5 18 14.5H2C1.72386 14.5 1.5 14.3278 1.5 14.1154V4.88462Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="4.5" y="7.5" width="4" height="4" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
<rect x="11.5" y="7.5" width="4" height="4" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ToggleGroupIcon;
  