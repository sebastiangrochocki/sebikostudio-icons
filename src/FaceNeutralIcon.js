
    import React, { forwardRef } from 'react';
  
    export const FaceNeutralIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "face neutral, neutral, ok"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="7" cy="8" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="13" cy="8" r="0.5" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 12.5H12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default FaceNeutralIcon;
  