
    import React, { forwardRef } from 'react';
  
    export const HandIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "hand, grab, pointer, palm"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M8.49995 4.5C8.49995 3.67643 7.79995 3 6.99995 3C6.19995 3 5.49995 3.67643 5.49995 4.5L5.49991 11.5L4.0938 9.85191C3.50802 9.26612 2.58572 9.29289 1.99994 9.87868C1.41415 10.4645 1.52497 11.325 1.99994 12L5.16613 16.0326C5.28662 16.199 5.42183 16.3564 5.57501 16.4922C10.1884 20.5816 17.5 17.8318 17.5 13.5361V9V5.54754C17.4688 4.69543 16.7968 4 16 4C15.2031 4 14.5231 4.67643 14.5231 5.5L14.5 3.5C14.5 2.67643 13.796 2 13 2C12.2039 2 11.5 2.67643 11.5 3.5M8.49995 4.5L8.49995 3C8.49995 2.17643 9.19917 1.5 9.99996 1.5C10.8007 1.5 11.5 2.17643 11.5 3V3.5M8.49995 4.5L8.49995 9.5M11.5 3.5V9.5M14.5231 5.12149L14.5231 10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default HandIcon;
  