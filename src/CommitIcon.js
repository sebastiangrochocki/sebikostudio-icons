
    import React, { forwardRef } from 'react';
  
    export const CommitIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "commit, git, github, circle, line, stroke"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="10" cy="9.5" r="4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 9.5H18.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 9.5H6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default CommitIcon;
  