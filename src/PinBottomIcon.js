
    import React, { forwardRef } from 'react';

    export const PinBottomIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 10.5L10 14.5L6.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2.5L10 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.5 17C2.22386 17 2 17.2239 2 17.5C2 17.7761 2.22386 18 2.5 18L2.5 17ZM17.5 18C17.7761 18 18 17.7761 18 17.5C18 17.2239 17.7761 17 17.5 17L17.5 18ZM2.5 18L17.5 18L17.5 17L2.5 17L2.5 18Z" fill="currentColor"/>
</svg>

    ));

    export default PinBottomIcon;
  