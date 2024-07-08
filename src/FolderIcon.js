
    import React, { forwardRef } from 'react';

    export const FolderIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="folder, document" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.5H8.5V3.5H2.5V16.5H17.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default FolderIcon;
  