
    import React, { forwardRef } from 'react';
  
    export const VideoIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "video, play, youtube, video start"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 3.5C6.162 3.5 3.89291 3.84864 2.67806 4.13421C1.94061 4.30756 1.5 4.97799 1.5 5.73553V10V14.2645C1.5 15.022 1.94061 15.6924 2.67806 15.8658C3.89291 16.1514 6.162 16.5 10 16.5C13.838 16.5 16.1071 16.1514 17.3219 15.8658C18.0594 15.6924 18.5 15.022 18.5 14.2645V10V5.73554C18.5 4.97799 18.0594 4.30756 17.3219 4.13421C16.1071 3.84864 13.838 3.5 10 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 13.5V6.5L14 10L7.5 13.5Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default VideoIcon;
  