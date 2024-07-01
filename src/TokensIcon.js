
    import React, { forwardRef } from 'react';

    export const TokensIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="2.5" stroke="currentColor"/>
<circle cx="6" cy="14" r="2.5" stroke="currentColor"/>
<circle cx="14" cy="6" r="2.5" stroke="currentColor"/>
<circle cx="14" cy="14" r="2.5" stroke="currentColor"/>
</svg>

    ));

    export default TokensIcon;
  