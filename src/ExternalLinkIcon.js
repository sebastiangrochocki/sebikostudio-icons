
    import React, { forwardRef } from 'react';
  
    export const ExternalLinkIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "external link, link, external, arrow up right, arrow out, box out"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M16.5 3.5L16.5 8.49997M16.5 3.5H11.5M16.5 3.5L10.5 9.5M7.5 3.5H4.5C3.94772 3.5 3.5 3.94772 3.5 4.5V15.5C3.5 16.0523 3.94772 16.5 4.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5L16.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ExternalLinkIcon;
  