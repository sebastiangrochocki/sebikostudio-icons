
    import React, { forwardRef } from 'react';
  
    export const QuestionMarkIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "question mark, questions, explanation, how to, learn more, more info"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<circle cx="9.5" cy="16.5" r="0.75" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.5 12.5V12.5C9.5 11.8753 9.81223 11.2918 10.332 10.9453L12.0077 9.8282C14.3826 8.24491 14.3826 4.75509 12.0077 3.1718L11.8548 3.06984C10.4437 2.1291 8.5927 2.18048 7.23595 3.19804L7.1 3.3C6.09278 4.05542 5.5 5.24097 5.5 6.5V6.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default QuestionMarkIcon;
  