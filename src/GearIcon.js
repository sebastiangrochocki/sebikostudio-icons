
    import React, { forwardRef } from 'react';

    export const GearIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="gear, settings, cog wheel, wheel" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeLinejoin="round"/>
<path d="M11.4862 1.5H8.65285L7.70841 4.33333L6.34265 5.12194L3.41667 4.52317L2 6.97683L3.5 9.21148V10.7885L2.00009 13.0231L3.41676 15.4768L6.34265 14.8781L7.70841 15.6667L8.65285 18.5H11.4862L12.4306 15.6667L13.7965 14.8781L16.7225 15.4768L18.1391 13.0232L16.5 10.7885V9.21139L18.1391 6.97683L16.7225 4.52317L13.7965 5.12194L12.4306 4.33333L11.4862 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default GearIcon;
  