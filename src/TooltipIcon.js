
    import React, { forwardRef } from 'react';

    export const TooltipIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 4.5C1.5 3.94771 1.94772 3.5 2.5 3.5H17.5C18.0523 3.5 18.5 3.94772 18.5 4.5V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H12.5L10 17.5L7.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V4.5Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));

    export default TooltipIcon;
  