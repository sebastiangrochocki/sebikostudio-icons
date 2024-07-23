
    import React, { forwardRef } from 'react';
  
    export const Link2Icon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "link, hyperlink, chain, url"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M14.5 10.5L16.3845 8.61556C17.8415 7.15849 17.9571 4.95707 16.5 3.5C15.0429 2.04293 12.8415 2.15845 11.3845 3.61552L9.49998 5.49999M5.49995 9.49994L3.61548 11.3844C2.15841 12.8415 2.04276 15.043 3.49983 16.5C4.9569 17.9571 7.15844 17.8415 8.61551 16.3844L10.5 14.4999M7.49988 12.4999L12.4999 7.49994" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default Link2Icon;
  