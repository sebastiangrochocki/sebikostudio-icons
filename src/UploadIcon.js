
    import React, { forwardRef } from 'react';

    export const UploadIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="upload, arrow up, arrow top, box out" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2.5V13.5M10 2.5L13.5 6.5M10 2.5L6.5 6.5M3.5 14.5L3.5 16.5C3.5 17.0523 3.94772 17.5 4.5 17.5L15.5 17.5C16.0523 17.5 16.5 17.0523 16.5 16.5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default UploadIcon;
  