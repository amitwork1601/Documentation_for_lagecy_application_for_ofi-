# create.js

**Path**: `src\plugins\pixie\admin\src\pages\create.js`

## Summary
This React component provides a campaign management interface for the Pixie plugin, allowing users to create and edit marketing/promotional campaigns with conditions, actions, and targeting rules. The component handles form state management for campaign properties like name, priority, scheduling (begin/end dates), and enables CRUD operations through API requests to persist campaign configurations. It includes form validation using Yup schema and supports features like campaign duplication, partial application settings, and exposure tracking.

## Function Details

### `create`


### `getApiActionSchema`


### `getApiConditionSchema`


### `generateSchema`

- **Parameters**: `config, fields, errorFields, type`

### `auxGenerateSchema`

- **Parameters**: `config, fields, errorFields`

### `changeCampaign`

- **Parameters**: `async(body, isEditing`

### `loadCampaign`

- **Parameters**: `id`

### `aux`

- **Parameters**: `steps, object`

### `addTarget`


### `addConditionAction`

- **Parameters**: `type`

### `changeType`

- **Parameters**: `e, index, type`

### `fieldIndex`

- **Parameters**: `Object.values(defaultNames[type]).findIndex((a`

### `deleteField`

- **Parameters**: `index, field`

### `errorMessage`

- **Parameters**: `path, field`

### `requiredValue`

- **Parameters**: `path, field`

### `generateForm`

- **Parameters**: `input, fields, path, boxColor, asterisk`

### `aux1`

- **Parameters**: `steps, object`

### `aux2`

- **Parameters**: `steps, object`

### `handleFormChange`

- **Parameters**: `e, origin, index`

### `submit`

- **Parameters**: `e`

