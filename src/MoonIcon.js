
    import React, { forwardRef } from 'react';
  
    export const MoonIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "moon, night, midnight, dark, darkmode, mode"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.2696 2.50475C10.4242 3.71868 9.92857 5.19431 9.92857 6.78572C9.92857 10.8376 13.1417 14.139 17.159 14.281C15.8041 16.2267 13.5507 17.5 11 17.5C6.85786 17.5 3.5 14.1421 3.5 10C3.5 5.85787 6.85786 2.5 11 2.5C11.0902 2.5 11.1801 2.50159 11.2696 2.50475Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MoonIcon;
  