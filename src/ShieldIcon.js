
    import React, { forwardRef } from 'react';

    export const ShieldIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="shield, defense, badge, armor, protect" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 4.5L10 2.5L17.5 4.5C17.5 12.5 10 17.5 10 17.5C10 17.5 2.5 12.5 2.5 4.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 2.5V17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ShieldIcon;
  