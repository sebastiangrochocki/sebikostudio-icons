
    import React, { forwardRef } from 'react';
  
    export const TextIndentRightIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "text indent right, text indent, indent, text"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M17.5 4.5H2.5M17.5 14.5H2.5M17.5 9.5H8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.38867 7.75912L4.68798 9.29199C4.83641 9.39094 4.83641 9.60906 4.68798 9.70801L2.38867 11.2409C2.22254 11.3516 2 11.2325 2 11.0329V7.96713C2 7.76746 2.22254 7.64836 2.38867 7.75912Z" fill="currentColor"/>
</svg>

    ));
  
    export default TextIndentRightIcon;
  