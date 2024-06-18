
    import React, { forwardRef } from 'react';

    export const ImageIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 17.5L2.5 17.5C1.94772 17.5 1.5 17.0523 1.5 16.5L1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5L17.5 2.5C18.0523 2.5 18.5 2.94772 18.5 3.5L18.5 16.5C18.5 17.0523 18.0523 17.5 17.5 17.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 13.5L6.5 8.5L13.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13L14.5 10.5L18.5 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="12" cy="7" r="1.5" stroke="currentColor"/>
</svg>

    ));

    export default ImageIcon;
  