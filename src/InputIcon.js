
    import React, { forwardRef } from 'react';

    export const InputIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="input, text field, field" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H17.5C18.0523 14.5 18.5 14.0523 18.5 13.5V6.5C18.5 5.94772 18.0523 5.5 17.5 5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5 8V12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 9L6 11L7.5 9L9 11L10.5 9L12 11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default InputIcon;
  