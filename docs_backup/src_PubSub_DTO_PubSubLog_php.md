# PubSubLog.php

**Path**: `src\PubSub\DTO\PubSubLog.php`

## Summary
The `PubSubLog` class is a Data Transfer Object (DTO) that represents a Google Cloud Pub/Sub message structure for logging purposes. It encapsulates the core components of a Pub/Sub message including the unique message ID, publication timestamp, custom attributes, and the actual message data payload. This DTO provides a type-safe way to pass Pub/Sub message information between different layers of the application, ensuring consistent handling of messages received from or sent to Pub/Sub topics.

## Classes
- `PubSubLog`

## Function Details

### `getMessageId`


### `setMessageId`

- **Parameters**: `string $messageId`

### `getPublishTime`


### `setPublishTime`

- **Parameters**: `string $publishTime`

### `getAttributes`


### `setAttributes`

- **Parameters**: `array $attributes`

### `getData`


### `setData`

- **Parameters**: `array $data`

