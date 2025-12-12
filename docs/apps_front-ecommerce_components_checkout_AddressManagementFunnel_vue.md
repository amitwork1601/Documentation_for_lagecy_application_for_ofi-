# AddressManagementFunnel.vue

**Path**: `apps\front-ecommerce\components\checkout\AddressManagementFunnel.vue`

## Summary
This Vue component manages the address selection and creation workflow during e-commerce checkout. It provides a toggle between two states: a closed state showing a dropdown to select from existing addresses in the customer's address book with an option to add new ones, and an open state displaying a form to create/edit addresses with save and cancel actions. The component acts as a funnel interface that coordinates address management by emitting events to update the selected address, validate addresses, and control the form's open/closed state.

