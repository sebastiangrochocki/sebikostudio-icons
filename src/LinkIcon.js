
    import React, { forwardRef } from 'react';

    export const LinkIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="link, hyperlink, chain, url" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 13.5H15C16.933 13.5 18.5 11.933 18.5 10C18.5 8.067 16.933 6.5 15 6.5H12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 6.5H5C3.067 6.5 1.5 8.067 1.5 10C1.5 11.933 3.067 13.5 5 13.5H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 10H13.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default LinkIcon;
  