
    import React, { forwardRef } from 'react';
  
    export const LinkBreak2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "link break, unlink"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5001 10.5L16.3846 8.61556C17.8416 7.15849 17.9572 4.95707 16.5001 3.5C15.0431 2.04293 12.8416 2.15845 11.3846 3.61552L9.5001 5.49999M5.50007 9.49994L3.6156 11.3844C2.15853 12.8415 2.04289 15.043 3.49996 16.5C4.95703 17.9571 7.15856 17.8415 8.61563 16.3844L10.5001 14.4999" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 1.5V4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.5 18.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 6.5H4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 13.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 2L4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 18L16 16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default LinkBreak2Icon;
  