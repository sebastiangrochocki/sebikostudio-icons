
    import React, { forwardRef } from 'react';
  
    export const ToastComponentIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "toast component, snackbar, bar, notification"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4C1.5 3.72386 1.72386 3.5 2 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V16C18.5 16.2761 18.2761 16.5 18 16.5H2C1.72386 16.5 1.5 16.2761 1.5 16V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 10H5.5C5.22386 10 5 10.2239 5 10.5V13.5C5 13.7761 5.22386 14 5.5 14H14.5C14.7761 14 15 13.7761 15 13.5V10.5C15 10.2239 14.7761 10 14.5 10Z" fill="currentColor"/>
</svg>

    ));
  
    export default ToastComponentIcon;
  