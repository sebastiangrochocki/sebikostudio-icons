
    import React, { forwardRef } from 'react';
  
    export const Home2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "home, house, house with doors, doors"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 9.5L10 2.5L18.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 8V17.5H7.5V12.5H12.5V17.5H16.5V8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 17.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Home2Icon;
  