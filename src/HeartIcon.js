
    import React, { forwardRef } from 'react';
  
    export const HeartIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "heart"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M9.3689 4.74342L10 5.90589L10.6311 4.74342C11.8297 2.53557 13.4992 2.5 14.167 2.5C14.504 2.5 15.4406 2.66907 16.2254 3.38829C16.956 4.058 17.6484 5.28638 17.4723 7.66064C17.3366 9.48831 16.24 11.4614 14.7092 13.2813C13.2016 15.0737 11.387 16.5828 10.0434 17.4858C10.0302 17.495 10.0153 17.4999 10 17.5C9.98476 17.4999 9.9698 17.495 9.95666 17.4858C8.61306 16.5828 6.7984 15.0737 5.2907 13.2813C3.75998 11.4614 2.66343 9.48831 2.52776 7.66064C2.35151 5.28638 3.04397 4.058 3.77461 3.38829C4.55932 2.66907 5.49597 2.5 5.83294 2.5C6.5008 2.5 8.17035 2.53566 9.3689 4.74342Z" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default HeartIcon;
  