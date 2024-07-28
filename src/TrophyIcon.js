
    import React, { forwardRef } from 'react';
  
    export const TrophyIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "trophy, award, winner, success, champion, gold, first place"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 1.5H10H15.5V6C15.5 8.51806 14.3144 10.8892 12.3 12.4L11.5 13L10 14L8.5 13L7.7 12.4C5.68555 10.8892 4.5 8.51806 4.5 6V1.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 17.5V14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<rect x="6" y="16" width="8" height="3" rx="0.5" fill="currentColor"/>
<path d="M5.75 10.5C3.25 10.5 1.5 8.5 1.5 6V3.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.25 10.5C16.75 10.5 18.5 8.5 18.5 6V3.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default TrophyIcon;
  