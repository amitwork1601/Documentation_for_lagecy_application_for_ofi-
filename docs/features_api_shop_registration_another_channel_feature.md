# registration_another_channel.feature

**Path**: `features\api\shop\registration_another_channel.feature`

## Summary
This Gherkin feature file tests cross-channel user registration validation in a multi-channel e-commerce shop API. It verifies that the system properly prevents duplicate account registration when a user attempts to register with an email address that already exists on a different sales channel (e.g., registering on the German channel with an email already used on the French channel). The feature ensures data integrity and prevents email conflicts across the store's multiple regional or language-specific channels.

## Function Details

### `Can't register with an email already used on an account on another channel`

- **Description**: Scenario

