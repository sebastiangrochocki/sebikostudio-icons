
    import React, { forwardRef } from 'react';
  
    export const TemperatureIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "temp, temperature, degrees, hot, celsius"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M7.5 4L7.5 10.8973C7.5 11.2007 7.35672 11.4826 7.14424 11.6992C6.43646 12.4207 6 13.4094 6 14.5C6 16.7091 7.79086 18.5 10 18.5C12.2091 18.5 14 16.7091 14 14.5C14 13.4094 13.5635 12.4207 12.8558 11.6992C12.6433 11.4826 12.5 11.2007 12.5 10.8973L12.5 4C12.5 3.17157 11.8284 1.5 10 1.5C8.17157 1.5 7.5 3.17157 7.5 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="14.5" r="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 8.5V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TemperatureIcon;
  