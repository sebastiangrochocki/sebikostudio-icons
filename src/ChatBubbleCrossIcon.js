
    import React, { forwardRef } from 'react';
  
    export const ChatBubbleCrossIcon = forwardRef(({ className, style, ariaLabel, ...props }, ref) => (
      <svg ref={ref} className={className} aria-label={ariaLabel || "chat bubble cross, speech, bubble cross, remove, cancel comment"} style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<path d="M1.5 5.5C1.5 4.39543 2.39543 3.5 3.5 3.5H16.5C17.6046 3.5 18.5 4.39543 18.5 5.5V12.5C18.5 13.6046 17.6046 14.5 16.5 14.5H13.5V18.5L9 14.5H3.5C2.39543 14.5 1.5 13.6046 1.5 12.5V5.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 6.5L12.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5 6.5L7.5 11.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    ));
  
    export default ChatBubbleCrossIcon;
  