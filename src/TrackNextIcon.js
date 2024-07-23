
    import React, { forwardRef } from 'react';
  
    export const TrackNextIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "track next, next, track"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 16.5L4.5 3.5L15.5 10L4.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TrackNextIcon;
  