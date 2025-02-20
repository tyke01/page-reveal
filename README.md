# Animated Landing Page Component

A React component that creates an engaging landing page with smooth animations, preloader, and text reveal effects using GSAP (GreenSock Animation Platform).

## Features

- Animated text reveal with staggered effects
- Custom preloader integration
- Page transition animations with banner effects
- Responsive design with Tailwind CSS
- Text splitting functionality for granular animation control
- Smooth transitions and animations using GSAP

## Dependencies

- React
- GSAP (GreenSock Animation Platform)
- @gsap/react
- Next.js
- Tailwind CSS

## Component Structure

The component consists of two main sections:
1. A preloader component that runs before the main content
2. A main content section with animated text elements

## Usage

```jsx
import MainPage from './path/to/MainPage';

function App() {
  return <MainPage />;
}
```

## Animation Details

### Text Animations
The component implements several animation features:
- Initial text state is set with Y-offset, opacity 0, and 90-degree rotation
- Text reveal animation includes:
  - Vertical movement to original position
  - Rotation to 0 degrees
  - Fade-in effect
  - Staggered timing for each text element
  - "Back out" easing for smooth motion

### Page Transitions
The component includes two main transition functions:

#### animatePageIn
```javascript
animatePageIn()
```
Handles the entrance animation when navigating to a page:
- Animates four banner elements sequentially
- Uses GSAP timeline for coordinated animations
- Slides banners up with staggered timing
- Requires banner elements with IDs: banner-1, banner-2, banner-3, banner-4

#### animatePageOut
```javascript
animatePageOut(href: string, router: AppRouterInstance)
```
Handles the exit animation when navigating away from a page:
- Takes destination URL and Next.js router instance as parameters
- Animates four banner elements sequentially
- Slides banners down with staggered timing
- Automatically navigates to the next page on animation completion
- Requires banner elements with IDs: banner-1, banner-2, banner-3, banner-4

## Props

This component doesn't accept any props directly, but contains:

- `PreLoader` component which accepts:
  - `onComplete`: Callback function triggered when preloader finishes

## Styling

The component uses Tailwind CSS classes for styling:
- Centered layout with flex container
- Dark purple background (bg-purple-950)
- White text
- Responsive text sizing
- Mobile-friendly design

## Requirements

- Next.js 13+ (using app directory structure)
- Required components:
  - `@/components/pre-loader`
  - `@/components/text-splitter`
- Banner elements in HTML structure with IDs:
  - banner-1
  - banner-2
  - banner-3
  - banner-4

## Notes

- Uses the 'use client' directive for client-side rendering
- Implements useGSAP hook for GSAP animations
- Handles preloader state management
- Includes responsive design considerations
- Page transitions require proper banner elements in DOM
- Utilizes Next.js App Router for navigation