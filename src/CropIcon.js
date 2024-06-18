
    import React, { forwardRef } from 'react';

    export const CropIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 0.5L4.5 15.5L12 15.5H13M19.5 15.5H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M0.5 4.5L2 4.5M15.5 19.5L15.5 4.5L8 4.5L7 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CropIcon;
  