
    import React, { forwardRef } from 'react';
  
    export const ShadowIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "shadow, shadow, cast, circle"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.4366 5.43567C15.109 6.45915 15.5001 7.68389 15.5001 8.99998C15.5001 12.5898 12.59 15.5 9.0001 15.5C7.68401 15.5 6.45927 15.1088 5.43579 14.4365C6.42526 17.1012 8.99094 19 12.0001 19C15.8661 19 19.0001 15.866 19.0001 12C19.0001 8.99082 17.1013 6.42513 14.4366 5.43567Z" fill="currentColor"/>
<circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ShadowIcon;
  