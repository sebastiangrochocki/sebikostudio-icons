
    import React, { forwardRef } from 'react';

    export const HotkeyIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="hotkey, key, box, square t, t, shorthand, shortcut" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 4C2.5 3.17157 3.17157 2.5 4 2.5H16C16.8284 2.5 17.5 3.17157 17.5 4V16C17.5 16.8284 16.8284 17.5 16 17.5H4C3.17157 17.5 2.5 16.8284 2.5 16V4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.5 5.5H11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 5.5V11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default HotkeyIcon;
  