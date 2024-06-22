
    import React, { forwardRef } from 'react';

    export const CornersIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.5L5.68182 2.5C3.92455 2.5 2.5 3.92455 2.5 5.68182L2.5 7.5M7.5 17.5H5.68182C3.92455 17.5 2.5 16.0755 2.5 14.3182L2.5 12.5M12.5 2.5L14.3182 2.5C16.0755 2.5 17.5 3.92455 17.5 5.68182V7.5M12.5 17.5H14.3182C16.0755 17.5 17.5 16.0755 17.5 14.3182V12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CornersIcon;
  