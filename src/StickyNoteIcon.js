
    import React, { forwardRef } from 'react';

    export const StickyNoteIcon = forwardRef(({ className, style }, ref) => (
      <svg ref={ref} className={className} aria-label="sticky note, note, sticker" style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17.25V2.75C2.5 2.61193 2.61193 2.5 2.75 2.5H17.25C17.3881 2.5 17.5 2.61193 17.5 2.75V11.3964C17.5 11.4628 17.4737 11.5263 17.4268 11.5732L11.5732 17.4268C11.5263 17.4737 11.4628 17.5 11.3964 17.5H2.75C2.61193 17.5 2.5 17.3881 2.5 17.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 17.5V11.75C11.5 11.6119 11.6119 11.5 11.75 11.5H17.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));

    export default StickyNoteIcon;
  