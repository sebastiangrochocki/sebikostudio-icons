
    import React, { forwardRef } from 'react';
  
    export const ButtonIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "button, button component, component, press, cta, call to action, action"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 7.5C1.5 6.94772 1.94772 6.5 2.5 6.5H17.5C18.0523 6.5 18.5 6.94772 18.5 7.5V12.5C18.5 13.0523 18.0523 13.5 17.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V7.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 9L7 11L8.5 9L10 11L11.5 9L13 11L14.5 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ButtonIcon;
  