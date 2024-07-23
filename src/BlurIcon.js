
    import React, { forwardRef } from 'react';
  
    export const BlurIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "blur, circles, splash"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<rect x="5" y="5" width="4" height="4" rx="2" fill="currentColor"/>
<rect x="16" y="6" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="11" y="1" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="6" y="1" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="1" y="6" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="16" y="11" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="11" y="16" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="6" y="16" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="1" y="11" width="3" height="3" rx="1.5" fill="currentColor"/>
<rect x="11" y="5" width="4" height="4" rx="2" fill="currentColor"/>
<rect x="5" y="11" width="4" height="4" rx="2" fill="currentColor"/>
<rect x="7" y="7" width="6" height="6" rx="3" fill="currentColor"/>
<rect x="11" y="11" width="4" height="4" rx="2" fill="currentColor"/>
</svg>

    ));
  
    export default BlurIcon;
  