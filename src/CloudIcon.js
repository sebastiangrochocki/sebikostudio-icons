
    import React, { forwardRef } from 'react';
  
    export const CloudIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "cloud, cloudy, weather, forecast"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M18.5 10C18.5 11.933 16.933 13.5 15 13.5H4.5C2.84315 13.5 1.5 12.1569 1.5 10.5C1.5 8.84315 2.84315 7.5 4.5 7.5C4.59924 7.5 4.65928 7.49058 4.75605 7.5C5.3738 5.75221 7.04066 4.5 8.99999 4.5C10.7668 4.5 12.3241 5.60441 13.0604 7.08613C13.6156 6.71584 14.2826 6.5 15 6.5C16.933 6.5 18.5 8.067 18.5 10Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CloudIcon;
  