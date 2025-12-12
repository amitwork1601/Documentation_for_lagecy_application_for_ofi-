# SubscriptionAlertsNormalizer.php

**Path**: `src\Api\Serializer\Normalizer\Subscription\SubscriptionAlertsNormalizer.php`

## Summary
This normalizer enhances the serialization of Subscription entities by adding an "alerts" array that checks for various subscription-related issues. It validates conditions like upcoming debit dates (within 7 days), credit card validity, shipping methods, product availability, promotions, and payment methods for draft orders, flagging potential problems that need attention before subscription processing.

## Classes
- `SubscriptionAlertsNormalizer`

## Function Details

### `normalize`

- **Parameters**: `mixed $object, ?string $format = null, array $context = []`
- **Description**: @throws ExceptionInterface
/

### `isDebitDateUnder7days`

- **Parameters**: `string $date`
- **Description**: @throws \Exception
/

### `checkForProductAvailability`

- **Parameters**: `array $data`

### `supportsNormalization`

- **Parameters**: `mixed $data, ?string $format = null, array $context = []`

### `checkPaymentMethodForDraftOrder`

- **Parameters**: `array $data`
- **Description**: @throws \Exception
/

### `checkPromotionValidityForDraftOrder`

- **Parameters**: `array $data`

### `checkProductAvailabilityForDraftOrder`

- **Parameters**: `array $data`

### `checkShipmentMethodForDraftOrder`

- **Parameters**: `array $data`

### `checkForCbValidity`

- **Parameters**: `array $data`
- **Description**: @throws \Exception
/

