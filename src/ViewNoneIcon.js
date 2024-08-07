
    import React, { forwardRef } from 'react';
  
    export const ViewNoneIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "view none, view, box, box slash, slash"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.5 16.5L17.5 16.5C18.0523 16.5 18.5 16.0523 18.5 15.5L18.5 4.5C18.5 3.94772 18.0523 3.5 17.5 3.5L16.5 3.5M10.5 3.5L2.5 3.5C1.94772 3.5 1.5 3.94772 1.5 4.5L1.5 15.5C1.5 16.0523 1.94772 16.5 2.5 16.5L3.5 16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 1.5L5.5 18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ViewNoneIcon;
  