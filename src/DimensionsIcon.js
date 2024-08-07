
    import React, { forwardRef } from 'react';
  
    export const DimensionsIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "dimensions, size, details, specifications, lines, box"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M11.6538 18.5H3.34615C2.32655 18.5 1.5 17.6734 1.5 16.6538L1.5 8.34615C1.5 7.32655 2.32655 6.5 3.34615 6.5L11.6538 6.5C12.6734 6.5 13.5 7.32655 13.5 8.34615V16.6538C13.5 17.6734 12.6734 18.5 11.6538 18.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.61133 0.759117L0.312019 2.29199C0.163586 2.39094 0.163585 2.60906 0.312019 2.70801L2.61133 4.24088C2.77746 4.35164 3 4.23254 3 4.03287V0.967129C3 0.767455 2.77746 0.648357 2.61133 0.759117Z" fill="currentColor"/>
<path d="M19.2409 7.61133L17.708 5.31202C17.6091 5.16359 17.3909 5.16359 17.292 5.31202L15.7591 7.61132C15.6484 7.77746 15.7675 8 15.9671 8L19.0329 8C19.2325 8 19.3516 7.77746 19.2409 7.61133Z" fill="currentColor"/>
<path d="M12.3887 0.759117L14.688 2.29199C14.8364 2.39094 14.8364 2.60906 14.688 2.70801L12.3887 4.24088C12.2225 4.35164 12 4.23254 12 4.03287V0.967129C12 0.767455 12.2225 0.648357 12.3887 0.759117Z" fill="currentColor"/>
<path d="M19.2409 17.3887L17.708 19.688C17.6091 19.8364 17.3909 19.8364 17.292 19.688L15.7591 17.3887C15.6484 17.2225 15.7675 17 15.9671 17L19.0329 17C19.2325 17 19.3516 17.2225 19.2409 17.3887Z" fill="currentColor"/>
<path d="M2.5 2.5H12.5" stroke="currentColor" strokeLinecap="round"/>
<path d="M17.5 7.5L17.5 17.5" stroke="currentColor" strokeLinecap="round"/>
</svg>

    ));
  
    export default DimensionsIcon;
  