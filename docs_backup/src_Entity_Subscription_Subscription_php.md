# Subscription.php

**Path**: `src\Entity\Subscription\Subscription.php`

## Summary
The `Subscription` entity represents a recurring subscription model in an e-commerce system, managing customer subscription orders with scheduled deliveries. It handles the business logic for recurring purchases, including subscription state management (active, paused, cancelled), payment processing, shipping/pickup addresses, and the relationship between subscription items and generated orders. This entity integrates with Sylius e-commerce framework and provides API Platform GraphQL endpoints for querying subscription data with various filters for channels, dates, states, and customer information.

## Classes
- `Subscription`

## Function Details

### `getItems`

- **Description**: @var Collection&lt;int, SubscriptionItem&gt;&amp;iterable&lt;SubscriptionItem&gt;
/
#[ORM\OneToMany(
mappedBy: 'subscription',
targetEntity: SubscriptionItem::class,
cascade: ['persist', 'remove'],
fetch: 'EXTRA_LAZY',
orphanRemoval: true
)]
protected Collection $items;

#[ORM\ManyToOne(targetEntity: Customer::class, inversedBy: 'subscriptions')]
#[ORM\JoinColumn(name: 'customer_id', referencedColumnName: 'id', nullable: false)]
protected Customer $customer;

#[ORM\ManyToOne(targetEntity: ShippingMethod::class)]
#[ORM\JoinColumn(name: 'shipping_method_id', referencedColumnName: 'id')]
protected ?ShippingMethod $shippingMethod = null;

#[ORM\ManyToOne(targetEntity: PaymentInstrument::class)]
#[ORM\JoinColumn(name: 'instrument_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
protected ?PaymentInstrument $paymentInstrument = null;

/**
@var Collection&lt;int, SubscriptionOrder&gt;&amp;iterable&lt;SubscriptionOrder&gt;
/
#[ORM\OneToMany(mappedBy: 'subscription', targetEntity: SubscriptionOrder::class, cascade: ['persist'])]
protected Collection $subscriptionOrders;

/**
@var Collection&lt;int, SubscriptionComment&gt;&amp;iterable&lt;SubscriptionComment&gt;
/
#[ORM\OneToMany(
mappedBy: 'subscription',
targetEntity: SubscriptionComment::class,
cascade: ['persist', 'remove'],
fetch: 'EXTRA_LAZY',
orphanRemoval: true
)]
protected Collection $comments;

#[ORM\Column(name: 'subscription_alert', type: Types::TEXT, nullable: true)]
protected ?string $subscriptionAlert;

#[ORM\ManyToOne(targetEntity: SubscriptionStopReason::class, cascade: ['persist'])]
#[ORM\JoinColumn(name: 'subscription_stop_reason_id', referencedColumnName: 'id', onDelete: 'SET NULL')]
protected ?SubscriptionStopReason $stoppedReason = null;

#[ORM\ManyToOne(targetEntity: Channel::class)]
#[ORM\JoinColumn(name: 'channel_id', referencedColumnName: 'id')]
protected ?Channel $channel = null;

protected ?\DateTime $previousNextShippingAt = null;

protected ?string $previousNextShippingAtBlameUserType = null;

/** use for winzou_state_machine */
protected string $subscriptionState;

protected int $validatedOrdersCount = 0;

public function __construct()
{
$this-&gt;items = new ArrayCollection();
$this-&gt;subscriptionOrders = new ArrayCollection();
$this-&gt;comments = new ArrayCollection();
}

public function getId(): ?int
{
return $this-&gt;id;
}

public function getNextShippingAt(): ?\DateTime
{
return $this-&gt;nextShippingAt;
}

public function setNextShippingAt(?\DateTime $nextShippingAt, ?string $nextShippingAtBlameUserType = null): self
{
$this-&gt;previousNextShippingAt = $this-&gt;nextShippingAt;
$this-&gt;nextShippingAt = $nextShippingAt;

if (null !== $nextShippingAtBlameUserType) {
$this-&gt;setNextShippingAtBlameUserType($nextShippingAtBlameUserType);
}

return $this;
}

public function rollbackNextShippingAt(): void
{
$this-&gt;nextShippingAt = $this-&gt;previousNextShippingAt;
$this-&gt;nextShippingAtBlameUserType = $this-&gt;previousNextShippingAtBlameUserType;
}

public function getNextShippingAtBlameUserType(): ?string
{
return $this-&gt;nextShippingAtBlameUserType;
}

public function setNextShippingAtBlameUserType(string $nextShippingAtBlameUserType): self
{
$blameUserTypeValid = [
self::BLAME_ALGO,
self::BLAME_SUBSCRIPTION_MANAGER,
self::BLAME_SUBSCRIPTION_OWNER,
];

if (!\in_array($nextShippingAtBlameUserType, $blameUserTypeValid, true)) {
throw new \InvalidArgumentException(\sprintf('Invalid nextShippingAtBlameUser value: %s (valid values: %s)', $nextShippingAtBlameUserType, implode(',', $blameUserTypeValid)));
}

$this-&gt;previousNextShippingAtBlameUserType = $nextShippingAtBlameUserType;
$this-&gt;nextShippingAtBlameUserType = $nextShippingAtBlameUserType;

return $this;
}

public function addItem(SubscriptionItem $item): self
{
if (!$this-&gt;hasItem($item)) {
$this-&gt;items[] = $item;
$item-&gt;setSubscription($this);
}

return $this;
}

public function removeItem(SubscriptionItem $item): self
{
if ($this-&gt;hasItem($item)) {
$this-&gt;items-&gt;removeElement($item);
}

return $this;
}

/**
@return Collection|SubscriptionItem[]
/

### `hasItem`

- **Parameters**: `SubscriptionItem $item`

### `hasProductVariant`

- **Parameters**: `ProductVariantInterface $variant`

### `getItemFromProductVariant`

- **Parameters**: `ProductVariantInterface $variant`

### `getSubscriptionOrders`

- **Description**: @var SubscriptionItem $subscriptionItem */
foreach ($this-&gt;items as $subscriptionItem) {
if (null !== $subscriptionItem-&gt;getProductVariant() &amp;&amp; $subscriptionItem-&gt;getProductVariant()-&gt;getId() === $variant-&gt;getId()) {
return $subscriptionItem;
}
}

return null;
}

public function addSubscriptionOrder(SubscriptionOrder $subscriptionOrder): self
{
if (!$this-&gt;hasSubscriptionOrder($subscriptionOrder)) {
$this-&gt;subscriptionOrders[] = $subscriptionOrder;
$subscriptionOrder-&gt;setSubscription($this);
}

return $this;
}

/**
@return Collection|SubscriptionOrder[]
/

### `hasSubscriptionOrder`

- **Parameters**: `SubscriptionOrder $subscriptionOrder`

### `getPickupPoint`


### `getCode`


### `setCode`

- **Parameters**: `string $code`

### `getSubscriptionInterval`


### `setSubscriptionInterval`

- **Parameters**: `?int $subscriptionInterval`

### `getPeriodicity`


### `setPeriodicity`

- **Parameters**: `?array $periodicity`

### `getState`


### `setState`

- **Parameters**: `SubscriptionState $state`

### `isStopped`


### `getSubscriptionState`

- **Description**: use for GraphQL and winzou_state_machine.
/

### `setSubscriptionState`

- **Parameters**: `string $subscriptionState`
- **Description**: use for winzou_state_machine.
/

### `isManual`


### `setManual`

- **Parameters**: `bool $manual`

### `getNextShippingAtReference`


### `setNextShippingAtReference`

- **Parameters**: `?\DateTime $nextShippingAtReference`

### `getBillingAddress`


### `setBillingAddress`

- **Parameters**: `?Address $billingAddress`

### `getShippingAddress`


### `setShippingAddress`

- **Parameters**: `?Address $shippingAddress`

### `getStoppedAt`


### `setStoppedAt`

- **Parameters**: `?\DateTime $stoppedAt`

### `getOriginalOrder`


### `setOriginalOrder`

- **Parameters**: `Order $originalOrder`

### `getCustomer`


### `setCustomer`

- **Parameters**: `Customer $customer`

### `getShippingMethod`


### `setShippingMethod`

- **Parameters**: `?ShippingMethod $shippingMethod`

### `getPaymentInstrument`


### `setPaymentInstrument`

- **Parameters**: `?PaymentInstrument $paymentInstrument`

### `hasComment`

- **Parameters**: `SubscriptionComment $comment`

### `addComment`

- **Parameters**: `SubscriptionComment $comment`

### `removeComment`

- **Parameters**: `SubscriptionComment $comment`

### `getComments`


### `getStoppedReason`


### `setStoppedReason`

- **Parameters**: `?SubscriptionStopReason $stoppedReason`

### `setChannel`

- **Parameters**: `?ChannelInterface $channel`

### `getChannel`


### `getDraftOrder`

- **Parameters**: `$includeInactive = false`

### `getLastShippingAt`


### `getShippedAt`


### `getOrders`


### `getPaymentMethod`


### `getSubscriptionAlert`


### `setSubscriptionAlert`

- **Parameters**: `?string $subscriptionAlert`

### `getActiveDraftOrders`

- **Description**: Use in SM callback.
/

### `getCardExpiration`


### `setPreviousNextShippingAt`

- **Parameters**: `$previousNextShippingAt`

### `hasSoldOutVariant`


### `getCannotUpdateAfter`


### `isCardExpiredAtShipping`


### `getFrequency`

- **Description**: @var \DateTime $nextShippingAtEndDate */
$nextShippingAtEndDate = clone $this-&gt;getNextShippingAt();
$nextShippingAtEndDate-&gt;setTime(0, 0);

$cardExpirationEndDate = clone $cardExpirationDate;
$cardExpirationEndDate-&gt;modify('last day of this month');
$cardExpirationEndDate-&gt;setTime(0, 0);

if ($nextShippingAtEndDate &gt; $cardExpirationEndDate) {
return true;
}
}

return false;
}

public function getUrgentDispatchAllowed(): bool
{
return $this-&gt;isUrgentDispatchAllowed();
}

public function isUrgentDispatchAllowed(): bool
{
if (!$this-&gt;state-&gt;isActive()) {
return false;
}

if ($this-&gt;isManual()) {
return false;
}

if ($this-&gt;getCannotUpdateAfter() &lt; new \DateTime()) {
return false;
}

$subscriptionOrder = $this-&gt;getDraftOrder();

if (null === $subscriptionOrder) {
return false;
}

if ($this-&gt;hasOnePendingShipOrder()) {
return false;
}

if ($subscriptionOrder-&gt;containsOutOfStockProduct(true)) {
return false;
}

if ($subscriptionOrder-&gt;getDraftState()-&gt;isNotAvailableForProcessing()) {
return false;
}

return true;
}

public function getCrm(): ?string
{
return $this-&gt;getSubscriptionAlert();
}

public function hasOnePendingShipOrder(): bool
{
return $this-&gt;subscriptionOrders-&gt;filter(static function (SubscriptionOrder $subscriptionOrder) {
return OrderInterfaceAlias::STATE_FULFILLED !== $subscriptionOrder-&gt;getState()
&amp;&amp; OrderCheckoutStatesAlias::STATE_COMPLETED === $subscriptionOrder-&gt;getCheckoutState()
&amp;&amp; $subscriptionOrder-&gt;getDraftState()-&gt;hasBeenProcessed()
&amp;&amp; \in_array($subscriptionOrder-&gt;getShippingState(), [OrderShippingStates::STATE_CART, OrderShippingStates::STATE_READY], true);
})-&gt;count() &gt;= 1;
}

/** Webmethod Contract */

### `getWebmethodState`


### `getStringifiedComments`


### `getStringifiedCommentsLine`


### `getVariants`


### `getToken`


### `getExpiryMonth`


### `getExpiryYear`


### `getSubscriptionStopReason`


### `getOriginOrderId`


### `getValidatedOrdersCount`

- **Description**: Get the count of validated subscription orders (orders with PROCESSED state).
Used for admin API to expose the number of validated orders.
/

