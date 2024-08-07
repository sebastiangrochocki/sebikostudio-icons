
    import React, { forwardRef } from 'react';
  
    export const EngravingIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "engraving, art, printmaking, print, tools"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.5 10V13.5L17.5 4.49999C18.5 3.50008 18.0257 2.2758 17.5 1.75005C16.8252 1.07521 15.5 0.99999 14.5 2L11.5 5L12.5 6L8.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 7.5H11M1.5 17.5L14.5 17.5L18.5 7.5L14.5 7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 13.5C5.5 11.2909 3.70914 9.5 1.5 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 13.5H16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EngravingIcon;
  