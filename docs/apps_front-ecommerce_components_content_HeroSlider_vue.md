# HeroSlider.vue

**Path**: `apps\front-ecommerce\components\content\HeroSlider.vue`

## Summary
This Vue component implements a hero slider/carousel for an e-commerce storefront, displaying promotional banner slides with responsive images. It handles slide navigation, lazy-loading optimized images through ImageKit (with separate mobile/desktop versions and retina support), and integrates analytics tracking for promotion views and clicks. The component supports both internal routing and external URLs for slide CTAs, with intersection observer functionality to trigger tracking events when slides become visible.

## Function Details

### `setCurrentIndexImage`

- **Parameters**: `index: number`

### `getBackgroundImageStyle`

- **Parameters**: `index: number, slide: IHeroSlide`

### `trackingPromotion`

- **Parameters**: `pushIndex: number, clicked?: boolean`

### `activeSlides`

- **Parameters**: `computed((`

### `sliderImage`

- **Parameters**: `computed((`

### `redirectTo`

- **Parameters**: `url: string, index: number`

### `isInIndexRange`

- **Parameters**: `index: number`

