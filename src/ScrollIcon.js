
    import React, { forwardRef } from 'react';

    export const ScrollIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="scroll area, scroll, vertical scroll, horizontal scroll" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 2.03846C1.5 1.74108 1.68435 1.5 1.91176 1.5H15.0882C15.3156 1.5 15.5 1.74108 15.5 2.03846V14.9615C15.5 15.2589 15.3156 15.5 15.0882 15.5H1.91177C1.68435 15.5 1.5 15.2589 1.5 14.9615V2.03846Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 1.5V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 18.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ScrollIcon;
  