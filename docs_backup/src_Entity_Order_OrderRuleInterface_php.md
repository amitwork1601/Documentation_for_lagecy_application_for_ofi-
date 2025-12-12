# OrderRuleInterface.php

**Path**: `src\Entity\Order\OrderRuleInterface.php`

## Summary
This interface defines the contract for an order rule entity in an e-commerce system, likely built on Sylius framework. It specifies methods for managing business rules that can be applied to orders, including rule identification, channel associations, enable/disable state, rule conditions, and custom error messaging. The interface enables the creation of configurable validation or processing rules that can be applied to orders across different sales channels with associated conditions that determine when the rule should trigger.

## Function Details

### `getId`


### `getName`


### `setName`

- **Parameters**: `string $type`

### `getDescription`


### `setDescription`

- **Parameters**: `?string $description`

### `getChannels`

- **Description**: @return Collection&lt;int, ChannelInterface&gt;
/

### `addChannel`

- **Parameters**: `ChannelInterface $channel`

### `removeChannel`

- **Parameters**: `ChannelInterface $channel`

### `isEnabled`


### `setEnabled`

- **Parameters**: `bool $enabled`

### `enable`


### `disable`


### `getConditions`

- **Description**: @return Collection&lt;int, OrderRuleCondition&gt;
/

### `addCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `removeCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `setErrorMessage`

- **Parameters**: `?string $errorMessage`

### `getErrorMessage`


