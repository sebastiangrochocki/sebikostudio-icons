
    import React, { forwardRef } from 'react';

    export const PlayIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="play, start, triangle right" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 16.5L5.5 3.5L16.5 10L5.5 16.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default PlayIcon;
  