
    import React, { forwardRef } from 'react';

    export const StepperIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="stepper, steps, progress, bar" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 11.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 11.5H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="3" cy="11.5" r="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="17" cy="11.5" r="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<circle cx="10" cy="11.5" r="2.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 5L10 6.5L12.5 3.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default StepperIcon;
  