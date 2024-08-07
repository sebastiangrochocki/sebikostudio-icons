
    import React, { forwardRef } from 'react';
  
    export const ExcludeIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "exclude selection, exclude, remove part, selection"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M7.5 2H17.5C17.7761 2 18 2.22386 18 2.5V12.5C18 12.7761 17.7761 13 17.5 13H13V7H7V2.5C7 2.22386 7.22386 2 7.5 2ZM7 7H2.5C2.22386 7 2 7.22386 2 7.5V17.5C2 17.7761 2.22386 18 2.5 18H12.5C12.7761 18 13 17.7761 13 17.5V13H7V7Z" fill="currentColor"/>
</svg>

    ));
  
    export default ExcludeIcon;
  