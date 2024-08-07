
    import React, { forwardRef } from 'react';
  
    export const BellSlashIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "bell slash, notifications off, off, bell"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 13.5L5.35355 11.6464C5.44732 11.5527 5.5 11.4255 5.5 11.2929V7.50015C5.5 3.76138 7.91798 2.5 10 2.5C11.2038 2.5 12.5198 2.92166 13.416 4M6.5 14.5L10 14.5L16.2929 14.5C16.7383 14.5 16.9614 13.9614 16.6464 13.6464L14.6464 11.6464C14.5527 11.5527 14.5 11.4255 14.5 11.2929V7.50015C14.5 7.2121 14.4856 6.93876 14.4582 6.67957" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 14.5C12.5 15.8807 11.3807 17 10 17C8.61929 17 7.5 15.8807 7.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 17.5L17.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BellSlashIcon;
  