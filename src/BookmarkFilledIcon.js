
    import React, { forwardRef } from 'react';
  
    export const BookmarkFilledIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "bookmark filled"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 2.5H15.5V17.5L10 13.5L4.5 17.5V2.5Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default BookmarkFilledIcon;
  