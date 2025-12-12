# edit.vue

**Path**: `apps\front-ecommerce\pages\account\animals\[animal]\edit.vue`

## Summary
This Vue page component allows authenticated users to edit an existing animal profile in an e-commerce pet management system. It loads the animal data by code from the URL parameters, provides a multi-step form (using stepper/schema validation) for editing animal details, and handles saving changes with error validation that redirects users back to the appropriate form step if validation fails, ultimately returning to the animal view page upon successful save.

## Function Details

### `loader`


### `goBackToAnimal`


### `trackingOnPageView`


### `watchPageView`


### `animalCode`

- **Parameters**: `computed((`

### `returnToStep`

- **Parameters**: `schemas.value.fields.findIndex((fieldArray: string`

