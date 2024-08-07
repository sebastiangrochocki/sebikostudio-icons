
    import React, { forwardRef } from 'react';
  
    export const ChannelIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "channel, flows, connected, marketing"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M4.5 10C4.5 9.17157 3.82843 8.5 3 8.5C2.17157 8.5 1.5 9.17157 1.5 10C1.5 10.8284 2.17157 11.5 3 11.5C3.82843 11.5 4.5 10.8284 4.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 10C18.5 9.17157 17.8284 8.5 17 8.5C16.1716 8.5 15.5 9.17157 15.5 10C15.5 10.8284 16.1716 11.5 17 11.5C17.8284 11.5 18.5 10.8284 18.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 17C11.5 16.1716 10.8284 15.5 10 15.5C9.17157 15.5 8.5 16.1716 8.5 17C8.5 17.8284 9.17157 18.5 10 18.5C10.8284 18.5 11.5 17.8284 11.5 17Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 3C11.5 2.17157 10.8284 1.5 10 1.5C9.17157 1.5 8.5 2.17157 8.5 3C8.5 3.82843 9.17157 4.5 10 4.5C10.8284 4.5 11.5 3.82843 11.5 3Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 10H7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 10H15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 4.5V7.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10 12.5V15.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5C11.3807 12.5 12.5 11.3807 12.5 10Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ChannelIcon;
  