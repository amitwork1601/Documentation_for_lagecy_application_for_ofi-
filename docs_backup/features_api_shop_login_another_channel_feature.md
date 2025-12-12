# login_another_channel.feature

**Path**: `features\api\shop\login_another_channel.feature`

## Summary
This Gherkin feature file tests cross-channel user authentication isolation in a multi-channel e-commerce system. It verifies that user accounts registered on one channel (e.g., "fr") cannot be used to authenticate on a different channel (e.g., "de"), ensuring channel-specific user account separation. The test confirms that attempting to log in with credentials from another channel results in a "bad credentials" error rather than successful authentication.

## Function Details

### `Can't sign in with an email already used on an account on another channel`

- **Description**: Scenario

