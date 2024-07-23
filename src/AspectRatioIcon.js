
    import React, { forwardRef } from 'react';
  
    export const AspectRatioIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "aspect ratio, proportions, ratio, boxes, squares"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M12.5 7.5V1.5H18.5V7.5H12.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 10.5V18.25C18.5 18.3881 18.3881 18.5 18.25 18.5H1.75C1.61193 18.5 1.5 18.3881 1.5 18.25V1.75C1.5 1.61193 1.61193 1.5 1.75 1.5H9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default AspectRatioIcon;
  