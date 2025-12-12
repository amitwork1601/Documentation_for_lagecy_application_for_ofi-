# Youtube.vue

**Path**: `packages\youtube\src\components\Youtube.vue`

## Summary
This Vue component creates an embeddable YouTube video player by accepting a YouTube URL (in various formats like watch, embed, shorts) and extracting the video ID using regex pattern matching. It renders an iframe with the properly formatted YouTube embed URL and standard YouTube player permissions (autoplay, fullscreen, etc.), making it reusable across the application with unique identifiers for testing and accessibility.

## Function Details

### `iFrameSrc`

- **Parameters**: `computed((`

