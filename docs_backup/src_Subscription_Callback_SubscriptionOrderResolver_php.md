# SubscriptionOrderResolver.php

**Path**: `src\Subscription\Callback\SubscriptionOrderResolver.php`

## Summary
The `SubscriptionOrderResolver` class is a state machine callback that handles the resolution and validation of subscription orders during their lifecycle. It checks item availability, validates shipping methods and pickup point eligibility, and applies appropriate state transitions to both subscription orders and their parent subscriptions, managing the workflow from order creation through checkout and potential failure scenarios.

## Classes
- `SubscriptionOrderResolver`

## Function Details

### `resolve`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`
- **Description**: @throws \Exception */

### `resumeSubscription`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`
- **Description**: @var ShippingMethod $shippingMethod */
if (!$shippingMethod-&gt;isPickupPointShipment()) {
$this-&gt;orderCheckoutTransition-&gt;apply($subscriptionOrder, OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING);

return;
}

// check if shippingMethod pickup_point is valid
$pickupPoint = $subscriptionOrder-&gt;getPickupPoint();
if (!$pickupPoint instanceof PickupPoint) {
$this-&gt;subscriptionOrderTransition-&gt;apply($subscriptionOrder, SubscriptionOrderTransitions::SHIPMENT_IS_INVALID);

return;
}

// check if shippingMethod pickup_point is valid
$pickupPointShippingMethod = $pickupPoint-&gt;getPickupPointShippingMethod($shippingMethod);
if (
!$pickupPointShippingMethod instanceof PickupPointHasShippingMethod
|| !$pickupPointShippingMethod-&gt;isAvailable()
|| !$pickupPointShippingMethod-&gt;getPickupPoint()-&gt;isAvailable()
) {
$this-&gt;subscriptionOrderTransition-&gt;apply($subscriptionOrder, SubscriptionOrderTransitions::PICKUPPOINT_IS_UNAVAILABLE);

return;
}

if (!$this-&gt;weightLimitEligibilityChecker-&gt;isEligible($subscriptionOrder, $pickupPointShippingMethod)) {
$this-&gt;subscriptionOrderTransition-&gt;apply($subscriptionOrder, SubscriptionOrderTransitions::SHIPMENT_IS_INVALID);

return;
}

$this-&gt;orderCheckoutTransition-&gt;apply($subscriptionOrder, OrderCheckoutTransitions::TRANSITION_SELECT_SHIPPING);
}

/** used in callback state machine */

### `promotionEligibilityCheck`

- **Parameters**: `PromotionSubjectInterface $promotionSubject, PromotionInterface $promotion`
- **Description**: Temporary for waiting talon_one promotions system integration.

@throws \Exception
/

