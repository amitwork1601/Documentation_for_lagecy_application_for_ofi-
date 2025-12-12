# OrderFrequencySelect.vue

**Path**: `apps\front-ecommerce\components\order\OrderFrequencySelect.vue`

## Summary
This Vue component provides a dropdown selector for subscription order frequencies in an e-commerce application. It fetches available frequency options (in days) from the cart store, manages the selected frequency value through v-model binding, and dynamically creates a custom frequency option if the provided modelValue doesn't match any existing options. The component emits events to notify parent components when the frequency changes or when the options are ready to be displayed.

