
    import React, { forwardRef } from 'react';
  
    export const MixerVerticalIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "mixer vertical, slider, sliders vertical, slider, two lines"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M5.5 18.5L5.5 15.5M5.5 1.5L5.5 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 18.5L14.5 9.5M14.5 1.5L14.5 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="5.5" cy="13" r="2.5" transform="rotate(-90 5.5 13)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="14.5" cy="7" r="2.5" transform="rotate(-90 14.5 7)" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default MixerVerticalIcon;
  