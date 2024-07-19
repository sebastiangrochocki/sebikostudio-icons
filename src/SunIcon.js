
    import React, { forwardRef } from 'react';

    export const SunIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="sun, star, light, sunlight, day, daylight, lightmode, mode" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 2.5L14.5 5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 17.5L14.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 14.5L2.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 5.5L2.5 2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 10H4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 1.5V4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 16.5V19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default SunIcon;
  