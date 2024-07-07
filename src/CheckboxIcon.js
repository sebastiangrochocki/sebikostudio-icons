
    import React, { forwardRef } from 'react';

    export const CheckboxIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="checkbox, component, check, select" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 9.5L9.5 12.5L13.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H16C16.8284 2.5 17.5 3.17157 17.5 4V16C17.5 16.8284 16.8284 17.5 16 17.5H4C3.17157 17.5 2.5 16.8284 2.5 16V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default CheckboxIcon;
  