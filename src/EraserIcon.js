
    import React, { forwardRef } from 'react';
  
    export const EraserIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "eraser, rubber, remover"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M2.79903 11.6257C2.40032 11.227 2.40032 10.5806 2.79903 10.1819L11.1819 1.79903C11.5806 1.40032 12.227 1.40032 12.6257 1.79903L18.201 7.37426C18.5997 7.77297 18.5997 8.4194 18.201 8.81811L9.81811 17.201C9.4194 17.5997 8.77297 17.5997 8.37426 17.201L2.79903 11.6257Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 7.5L12.5 14.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 17.5H16.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default EraserIcon;
  