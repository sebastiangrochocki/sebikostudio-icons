
    import React, { forwardRef } from 'react';

    export const ToolbarIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="toolbar, actions bar, context, buttons" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8.5V11.5H5.5V8.5H2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 8.5V11.5H11.5V8.5H8.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8.5V11.5H17.5V8.5H14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ToolbarIcon;
  