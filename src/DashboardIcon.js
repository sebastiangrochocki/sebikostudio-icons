
    import React, { forwardRef } from 'react';

    export const DashboardIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="dashboard, squares, panel" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.5" y="1.5" width="7" height="7" rx="1" stroke="currentColor" strokeLinejoin="round"/>
<rect x="11.5" y="1.5" width="7" height="7" rx="1" stroke="currentColor" strokeLinejoin="round"/>
<rect x="1.5" y="11.5" width="7" height="7" rx="1" stroke="currentColor" strokeLinejoin="round"/>
<rect x="11.5" y="11.5" width="7" height="7" rx="1" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));

    export default DashboardIcon;
  