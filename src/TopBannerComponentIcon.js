
    import React, { forwardRef } from 'react';
  
    export const TopBannerComponentIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "top banner component, component, banner, notification, top bar"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4C1.5 3.72386 1.72386 3.5 2 3.5H18C18.2761 3.5 18.5 3.72386 18.5 4V16C18.5 16.2761 18.2761 16.5 18 16.5H2C1.72386 16.5 1.5 16.2761 1.5 16V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 6H4.5C4.22386 6 4 6.22386 4 6.5V8.5C4 8.77614 4.22386 9 4.5 9H15.5C15.7761 9 16 8.77614 16 8.5V6.5C16 6.22386 15.7761 6 15.5 6Z" fill="currentColor"/>
</svg>

    ));
  
    export default TopBannerComponentIcon;
  