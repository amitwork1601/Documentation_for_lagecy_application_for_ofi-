# UserGuideStep2.vue

**Path**: `apps\front-ecommerce\components\userGuide\UserGuideStep2.vue`

## Summary
This Vue component implements Step 2 of an e-commerce pet food user guide, collecting detailed information about the user's pet including sterilization status, weight, body condition, and activity level. The form dynamically adapts based on the pet type (cat or dog) selected in the previous step, validates that all required fields are completed before enabling the submit button, and tracks user progress through analytics events. Upon completion, it updates the global pet form state and emits a 'next' event to proceed to the subsequent step.

## Function Details

### `tracking`


