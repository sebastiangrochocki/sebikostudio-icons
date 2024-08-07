
    import React, { forwardRef } from 'react';
  
    export const CloudRainIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "rain, cloud, raining, cloudy, weather, forecast"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10.5 10.5L5.5 15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 15.5L8.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 7C18.5 8.933 16.933 10.5 15 10.5H4.5C2.84315 10.5 1.5 9.15685 1.5 7.5C1.5 5.84315 2.84315 4.5 4.5 4.5C4.59924 4.5 4.65928 4.49058 4.75605 4.5C5.3738 2.75221 7.04066 1.5 8.99999 1.5C10.7668 1.5 12.3241 2.60441 13.0604 4.08613C13.6156 3.71584 14.2826 3.5 15 3.5C16.933 3.5 18.5 5.067 18.5 7Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CloudRainIcon;
  