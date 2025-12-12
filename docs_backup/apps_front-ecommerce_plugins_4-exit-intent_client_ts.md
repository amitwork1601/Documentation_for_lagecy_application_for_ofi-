# 4-exit-intent.client.ts

**Path**: `apps\front-ecommerce\plugins\4-exit-intent.client.ts`

## Summary
This Nuxt plugin detects user exit intent behaviors (mouse leaving viewport, clicking external links, scrolling patterns) and fires tracking events when users are about to leave the e-commerce site. It implements different levels of exit intent detection ("hard", "soft", "loose") with throttling mechanisms to capture user behavior for analytics or retention strategies like displaying exit popups or special offers before the user navigates away.

## Function Details

### `cancelExitIntent`


### `emitExitIntent`

- **Parameters**: `type: string, leaveTarget?: any`

### `doEmit`


