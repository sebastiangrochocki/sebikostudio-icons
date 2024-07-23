
    import React, { forwardRef } from 'react';
  
    export const FileIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "file, document"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M15.5 18.5L4.5 18.5C3.94772 18.5 3.5 18.0523 3.5 17.5L3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5L10 1.5L11.5858 1.5C11.851 1.5 12.1054 1.60536 12.2929 1.79289L16.2071 5.70711C16.3946 5.89464 16.5 6.149 16.5 6.41421L16.5 10L16.5 17.5C16.5 18.0523 16.0523 18.5 15.5 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 1.5V6.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FileIcon;
  