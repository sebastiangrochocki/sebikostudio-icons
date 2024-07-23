
    import React, { forwardRef } from 'react';
  
    export const CameraIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "camera, digital camera, photograph"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 4.68182C1.5 4.02912 1.94772 3.5 2.5 3.5H17.5C18.0523 3.5 18.5 4.02912 18.5 4.68182V15.3182C18.5 15.9709 18.0523 16.5 17.5 16.5H2.5C1.94772 16.5 1.5 15.9709 1.5 15.3182V4.68182Z" stroke="currentColor" strokeLinejoin="round"/>
<circle cx="12" cy="10" r="3.5" stroke="currentColor"/>
<rect x="4" y="6" width="3" height="2" rx="1" fill="currentColor"/>
</svg>

    ));
  
    export default CameraIcon;
  