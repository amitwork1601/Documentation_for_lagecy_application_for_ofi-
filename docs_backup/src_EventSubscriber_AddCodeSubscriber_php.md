# AddCodeSubscriber.php

**Path**: `src\EventSubscriber\AddCodeSubscriber.php`

## Summary
This Symfony event subscriber automatically generates and assigns unique codes to resources that implement `CodeAwareInterface` during API Platform request processing. It listens to kernel request events after deserialization, checks if the resource lacks a code, and if so, sets a unique identifier using PHP's `uniqid()` function to ensure every code-aware entity has a code before further processing.

## Classes
- `AddCodeSubscriber`

## Function Details

### `getSubscribedEvents`


### `onKernelRequest`

- **Parameters**: `RequestEvent $event`

