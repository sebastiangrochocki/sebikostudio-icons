
    import React, { forwardRef } from 'react';
  
    export const TextIndentLeftIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "text indent left, text indent, indent, text"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 4.5H2.5M17.5 14.5H2.5M17.5 9.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.61133 7.75912L2.31202 9.29199C2.16359 9.39094 2.16359 9.60906 2.31202 9.70801L4.61133 11.2409C4.77746 11.3516 5 11.2325 5 11.0329V7.96713C5 7.76746 4.77746 7.64836 4.61133 7.75912Z" fill="currentColor"/>
</svg>

    ));
  
    export default TextIndentLeftIcon;
  