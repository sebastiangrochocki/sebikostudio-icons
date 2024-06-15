import React, { forwardRef } from "react";

export const UnsplashIcon = forwardRef(({ className, style }, ref) => (
  <svg
    ref={ref}
    className={className}
    style={style}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 6.5V2H13V6.5H7ZM13 9H18V18H2V9H7V13.5H13V9Z"
      fill="currentColor"
    />
  </svg>
));

export const QRCodeIcon = forwardRef(({ className, style }, ref) => (
  <svg
    ref={ref}
    className={className}
    style={style}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 6.5V1.5H6.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 6.5V1.5H13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.5 13.5V18.5H6.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 13.5V18.5H13.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="4.5"
      y="4.5"
      width="4"
      height="4"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="4.5"
      y="11.5"
      width="4"
      height="4"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="11.5"
      y="4.5"
      width="4"
      height="4"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="11.5"
      y="11.5"
      width="4"
      height="4"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
));

export const BlurIcon = forwardRef(({ className, style }, ref) => (
  <svg
    ref={ref}
    className={className}
    style={style}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="5" width="4" height="4" rx="2" fill="currentColor" />
    <rect x="16" y="6" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="11" y="1" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="6" y="1" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="1" y="6" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="16" y="11" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="11" y="16" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="6" y="16" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="1" y="11" width="3" height="3" rx="1.5" fill="currentColor" />
    <rect x="11" y="5" width="4" height="4" rx="2" fill="currentColor" />
    <rect x="5" y="11" width="4" height="4" rx="2" fill="currentColor" />
    <rect x="7" y="7" width="6" height="6" rx="3" fill="currentColor" />
    <rect x="11" y="11" width="4" height="4" rx="2" fill="currentColor" />
  </svg>
));

export const VectorIcon = forwardRef(({ className, style }, ref) => (
  <svg
    ref={ref}
    className={className}
    style={style}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3.5L10 3.5L15 3.5M16.5 5L16.5 10.0607L16.5 15M3.5 5L3.5 10.0607L3.5 15M5 16.5L7.85381 16.5L10 16.5L15 16.5"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="5"
      width="3"
      height="3"
      rx="1.5"
      transform="rotate(-90 2 5)"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="2"
      y="18"
      width="3"
      height="3"
      rx="1.5"
      transform="rotate(-90 2 18)"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="15"
      y="5"
      width="3"
      height="3"
      rx="1.5"
      transform="rotate(-90 15 5)"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      x="15"
      y="18"
      width="3"
      height="3"
      rx="1.5"
      transform="rotate(-90 15 18)"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
));
