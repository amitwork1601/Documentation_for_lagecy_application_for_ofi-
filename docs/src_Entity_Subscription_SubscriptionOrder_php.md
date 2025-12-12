# SubscriptionOrder.php

**Path**: `src\Entity\Subscription\SubscriptionOrder.php`

## Summary
The `SubscriptionOrder` entity represents an order that is generated from a subscription in an e-commerce system. It extends the base `Order` class and adds subscription-specific functionality, including tracking the draft state of subscription orders, maintaining a relationship to the parent `Subscription` entity, and providing API access through GraphQL with specialized filters for querying subscription orders by shipping dates, subscription properties, and manual/automatic status. This entity serves as the bridge between recurring subscriptions and the actual orders that get processed and shipped to customers.

## Classes
- `SubscriptionOrder`

## Function Details

### `getSubscriptionOrderState`

- **Description**: use for winzou_state_machine */
private string $subscriptionOrderState;

public function __construct()
{
parent::__construct();

$this-&gt;draftState = SubscriptionOrderState::DRAFT;
}

public function getDraftState(): SubscriptionOrderState
{
return $this-&gt;draftState;
}

public function setDraftState(SubscriptionOrderState $draftState): self
{
$this-&gt;draftState = $draftState;

return $this;
}

/**
use for GraphQL and winzou_state_machine.
/

### `setSubscriptionOrderState`

- **Parameters**: `string $subscriptionOrderState`
- **Description**: use for winzou_state_machine.
/

### `getSubscription`


### `setSubscription`

- **Parameters**: `?Subscription $subscription`

### `getPickupPoint`


### `isPickupPointShipmentMethod`


### `getIsSubscription`


### `getWebmethodState`

- **Description**: Webmethod */

### `getWebmethodIsSubscriptionOrder`


