
    import React, { forwardRef } from 'react';

    export const QuoteIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="quote" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 2.5H3.5V9.5H8.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 2.5H11.5V9.5H16.5V2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 9.5C8.5 14.5 7.5 17.5 4.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 9.5C16.5 14.5 15.5 17.5 12.5 17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default QuoteIcon;
  