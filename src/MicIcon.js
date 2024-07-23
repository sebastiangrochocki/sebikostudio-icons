
    import React, { forwardRef } from 'react';
  
    export const MicIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mic, microphone, sound, soundtrack, track, voice, voiceover"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M10 1.5C8.61929 1.5 7.5 2.61929 7.5 4V10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 15.5C6.96243 15.5 4.5 13.0376 4.5 10V6.5M10 15.5C13.0376 15.5 15.5 13.0376 15.5 10V6.5M10 15.5V18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MicIcon;
  