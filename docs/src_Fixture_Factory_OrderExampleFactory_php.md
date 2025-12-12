# OrderExampleFactory.php

**Path**: `src\Fixture\Factory\OrderExampleFactory.php`

## Summary
This factory class generates example/test Order entities for fixtures in an e-commerce system built on Sylius. It creates complete order objects with all related entities (order items, customers, addresses, payment methods, shipping methods) and supports both regular orders and subscription-based orders, including the ability to configure order states and checkout transitions through a state machine.

## Classes
- `OrderExampleFactory`

## Function Details

### `configureOptions`

- **Parameters**: `OptionsResolver $resolver`

### `create`

- **Parameters**: `array $options = []`

### `prepareSubscription`

- **Parameters**: `OrderInterface $order, string $token = 'TOKEN_OK'`
- **Description**: @var Order $order */
$order = $this-&gt;generateOrder();
$this-&gt;em-&gt;persist($order);
$this-&gt;em-&gt;flush();

if (isset($this-&gt;options['frequency'])) {
$items = $order-&gt;getItems();

/** @var OrderItem $item */
foreach ($items as $item) {
$item-&gt;setSubscriptionInterval((int) $this-&gt;options['frequency']);
}
$this-&gt;em-&gt;flush();
}

if (isset($this-&gt;options['complete_date'])) {
$completeDate = clone $this-&gt;options['complete_date'];
$order-&gt;setCreatedAt($completeDate);
$order-&gt;setUpdatedAt($completeDate);
$this-&gt;em-&gt;flush();
}

if (isset($this-&gt;options['subscription'])) {
try {
$this-&gt;prepareSubscription($order, $this-&gt;options['subscription_token']);
} catch (SMException) {
return $order;
}
$subscriptions = $this-&gt;generateSubscription($order);

if (isset($this-&gt;options['complete_date']) &amp;&amp; !empty($subscriptions)) {
foreach ($subscriptions as $subscription) {
$subscription-&gt;setCreatedAt($this-&gt;options['complete_date']);
$subscription-&gt;setUpdatedAt($this-&gt;options['complete_date']);
$this-&gt;em-&gt;flush();
}
}
}

return $order;
}

public function generateOrder(): OrderInterface
{
$order = $this-&gt;createOrder(
$this-&gt;options['channel'],
$this-&gt;options['customer'],
$this-&gt;options['country'],
$this-&gt;options['complete_date']
);

/** @var CustomerInterface $customer */
$customer = $order-&gt;getCustomer();

if ($customer-&gt;hasUser()) {
$order-&gt;setCustomerWithAuthorization($customer);
}

$this-&gt;setOrderCompletedDate($order, $this-&gt;options['complete_date']);
if ($this-&gt;options['fulfilled']) {
$this-&gt;fulfillOrder($order);
}

return $order;
}

/**
@throws SMException
/

### `generateSubscription`

- **Parameters**: `Order $order`

### `getOrderItemsSubscriptionInterval`

- **Parameters**: `Collection $orderItems`
- **Description**: @param Collection&lt;array-key, OrderItemInterface&gt; $orderItems
/

### `getPaymentInstrument`

- **Parameters**: `Order $order`

### `addSubscriptionItems`

- **Parameters**: `Subscription $subscription, array $items`

### `createOrder`

- **Parameters**: `ChannelInterface $channel, CustomerInterface $customer, CountryInterface $country, \DateTimeInterface $createdAt`

### `generateItems`

- **Parameters**: `OrderInterface $order`

### `address`

- **Parameters**: `OrderInterface $order, string $countryCode`

### `selectShipping`

- **Parameters**: `OrderInterface $order, \DateTimeInterface $createdAt`

### `selectPayment`

- **Parameters**: `OrderInterface $order, \DateTimeInterface $createdAt`

### `completeCheckout`

- **Parameters**: `OrderInterface $order`

### `applyCheckoutStateTransition`

- **Parameters**: `OrderInterface $order, string $transition`

### `generateInvalidSkipMessage`

- **Parameters**: `string $type, string $channelCode`

### `setOrderCompletedDate`

- **Parameters**: `OrderInterface $order, \DateTimeInterface $date`

### `fulfillOrder`

- **Parameters**: `OrderInterface $order`

### `completePayments`

- **Parameters**: `OrderInterface $order`

### `completeShipments`

- **Parameters**: `OrderInterface $order`

