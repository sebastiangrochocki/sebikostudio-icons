
    import React, { forwardRef } from 'react';

    export const BorderDottedIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="8.5" width="2" height="2" rx="1" fill="currentColor"/>
<rect x="6" y="8.5" width="2" height="2" rx="1" fill="currentColor"/>
<rect x="12" y="8.5" width="2" height="2" rx="1" fill="currentColor"/>
<rect x="18" y="8.5" width="2" height="2" rx="1" fill="currentColor"/>
</svg>

    ));

    export default BorderDottedIcon;
  