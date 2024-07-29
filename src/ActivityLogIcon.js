
    import React, { forwardRef } from 'react';
  
    export const ActivityLogIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "activity log, log, activity, strokes, list, text, info, guidelines"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M6.5 1.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 1.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 9.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 17.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 5.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 13.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 9.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 17.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ActivityLogIcon;
  