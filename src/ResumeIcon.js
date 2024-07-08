
    import React, { forwardRef } from 'react';

    export const ResumeIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="resume, continue, start playing, again, triangle right, line vertical" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 16.5L7.5 3.5L18.5 10L7.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 3.5V16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ResumeIcon;
  