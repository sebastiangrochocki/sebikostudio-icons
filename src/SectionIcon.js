
    import React, { forwardRef } from 'react';
  
    export const SectionIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "section, content, website, web section, container"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 5.5V3.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 14.5V16.5H3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 3.5H18.5V5.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 16.5H18.5V14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 13.5H4.5V6.5H8.5V13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 13.5H11.5V6.5H15.5V13.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 3.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 8.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 8.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 16.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 3.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 16.5H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default SectionIcon;
  