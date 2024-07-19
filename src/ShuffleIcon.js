
    import React, { forwardRef } from 'react';

    export const ShuffleIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="shuffle, arrows right, swap" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.5 15.5H15C8 15.5 10 4.5 1.5 4.5M18.5 15.5L15.5 18.5M18.5 15.5L15.5 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5 4.5H15C12.5965 4.5 11.254 5.79686 10.1833 7.5M18.5 4.5L15.5 1.5M18.5 4.5L15.5 7.5M1.5 15.5C4.41856 15.5 6.09922 14.2031 7.33133 12.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default ShuffleIcon;
  