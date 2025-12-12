# AnimalPhotoCropper.vue

**Path**: `apps\front-ecommerce\components\animal\AnimalPhotoCropper.vue`

## Summary
This Vue component provides a photo upload and cropping interface specifically for animal profiles in an e-commerce application. It allows users to drag-and-drop or upload animal photos, crop them using a circular stencil, validate file types (PNG/GIF/JPEG) and size (max 2MB), and save or delete the cropped photo through API integration with the customer animals composable. The component manages the complete photo editing workflow including preview, validation errors, and loading states while emitting events to notify parent components of upload status changes.

## Function Details

### `onDrop`

- **Parameters**: `files: File[] | null`

### `loadImage`

- **Parameters**: `files: File[]`

### `rotateImage`


### `unsetImage`


### `handleUploadImage`


### `supportedMedias`

- **Parameters**: `computed((`

### `handleDeleteImage`


