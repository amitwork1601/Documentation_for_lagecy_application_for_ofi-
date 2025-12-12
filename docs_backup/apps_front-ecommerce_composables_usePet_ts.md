# usePet.ts

**Path**: `apps\front-ecommerce\composables\usePet.ts`

## Summary
This composable manages pet/animal form data and validation schemas for an e-commerce application's user guide or nutrition assessment flow. It dynamically provides different schema configurations (standard user guide, short bi-nutrition, or full bi-nutrition) based on the layout type, and handles form state management including pet details like type, breed, gender, and dietary preferences. The composable serves as a centralized data layer for capturing customer pet information during product recommendation or nutrition consultation workflows.

## Function Details

### `determinateUserChoice`

- **Parameters**: `pet: IAnimal`

### `petIsComplete`

- **Parameters**: `pet: IAnimal`

### `biNutritionStep1Complete`

- **Parameters**: `pet: IAnimalFormData`

### `initPetType`


### `petSchema`

- **Parameters**: `computed((`

### `clearInputForm`

- **Parameters**: `fields: string[]`

