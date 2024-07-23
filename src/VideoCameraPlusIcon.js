
    import React, { forwardRef } from 'react';
  
    export const VideoCameraPlusIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "video camera plus, camera, video, movie, film, plus, video add, add"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 14.5V4.5C1.5 3.94772 1.94772 3.5 2.5 3.5H14.5C15.0523 3.5 15.5 3.94772 15.5 4.5V7.5L18.5 6.5V12.5L15.5 11.5V14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H2.5C1.94772 15.5 1.5 15.0523 1.5 14.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 7.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 9.5H11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 7L8.5 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default VideoCameraPlusIcon;
  