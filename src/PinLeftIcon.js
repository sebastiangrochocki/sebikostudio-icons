
    import React, { forwardRef } from 'react';

    export const PinLeftIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 13.5L6.5 10L10.5 6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 10L6.5 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 2.5C3 2.22386 2.77614 2 2.5 2C2.22386 2 2 2.22386 2 2.5H3ZM2 17.5C2 17.7761 2.22386 18 2.5 18C2.77614 18 3 17.7761 3 17.5H2ZM2 2.5L2 17.5H3L3 2.5H2Z" fill="currentColor"/>
</svg>

    ));

    export default PinLeftIcon;
  