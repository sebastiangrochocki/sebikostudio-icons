
    import React, { forwardRef } from 'react';
  
    export const InfoCircleIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "info circle, circle, information, more, learn more"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="5.5" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8.5H10.25C10.3881 8.5 10.5 8.61193 10.5 8.75V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 14.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default InfoCircleIcon;
  