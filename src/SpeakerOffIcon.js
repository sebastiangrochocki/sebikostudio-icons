
    import React, { forwardRef } from 'react';
  
    export const SpeakerOffIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "speaker off, speaker, sound, sound off, off volume off, music off"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.5 6.5H5.5L9.5 2.5V17.5L5.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V7.5C1.5 6.94772 1.94772 6.5 2.5 6.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 7.5L17.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 7.5L12.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default SpeakerOffIcon;
  