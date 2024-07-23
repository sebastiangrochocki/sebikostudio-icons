
    import React, { forwardRef } from 'react';
  
    export const SpeakerQuiet2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "speaker quiet, speaker, sound, sound on, on, volume, music, quiet"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M3.5 6.5H6.5L10.5 2.5V17.5L6.5 13.5H3.5C2.94772 13.5 2.5 13.0523 2.5 12.5V7.5C2.5 6.94772 2.94772 6.5 3.5 6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default SpeakerQuiet2Icon;
  