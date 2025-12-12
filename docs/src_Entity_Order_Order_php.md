# Order.php

**Path**: `src\Entity\Order\Order.php`

## Summary
The `Order` entity represents a customer order in an e-commerce system, extending Sylius's base order functionality. It manages order lifecycle including checkout states, payments, shipments, promotions, and integrates with subscription orders, providing API access through ApiPlatform with extensive filtering capabilities (by date, search, price range, subscription type). The entity serves as the central aggregate for order processing, tracking order items, adjustments, customer information, shipping/billing addresses, and payment methods throughout the order fulfillment workflow.

## Classes
- `Order`

## Function Details

### `hasSubscribableItems`

- **Description**: GClid for server side tracking notification */
#[ORM\Column(type: Types::STRING, name: 'gclid', nullable: true)]
private ?string $gclid = null;

/** SessionId for server side tracking notification */
#[ORM\Column(type: Types::STRING, name: 'g_session_id', nullable: true)]
private ?string $gSessionId = null;

#[ORM\Column(type: Types::TEXT, name: 'customer_user_agent', nullable: true)]
private ?string $customerUserAgent = null;

#[ORM\Column(type: Types::BOOLEAN, name: 'ad_storage', nullable: false, options: ['default' =&gt; 0])]
private bool $adStorage;

#[ORM\Column(type: Types::BOOLEAN, name: 'analytics_storage', nullable: false, options: ['default' =&gt; 0])]
private bool $analyticsStorage;

/** Bill path with Google Cloud Storage bucket */
#[ORM\Column(type: Types::STRING, name: 'bill_path', nullable: true)]
private ?string $billPath = null;

/** Date of retrieving bill from the Google Cloud Storage Bucket */
#[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'billed_at', nullable: true)]
private ?\DateTime $billed_at = null;

/** Order is registered from PretashopToSylius */
#[ORM\Column(type: Types::BOOLEAN, name: 'migrated', nullable: false)]
private bool $migrated = false;

/** Date of order sent to the Middleware */
#[ORM\Column(type: Types::DATETIME_MUTABLE, name: 'sent_to_middleware_at', nullable: true)]
private ?\DateTime $sentToMiddlewareAt = null;

#[ORM\OneToMany(targetEntity: PromotionCouponCustomer::class, mappedBy: 'order')]
private Collection $promotionCouponCustomers;

#[ORM\ManyToMany(targetEntity: PromotionCoupon::class)]
#[ORM\JoinTable(name: 'sylius_order_promotion_coupon')]
#[ORM\JoinColumn(name: 'order_id', referencedColumnName: 'id', onDelete: 'CASCADE')]
#[ORM\InverseJoinColumn(name: 'promotion_coupon_id', referencedColumnName: 'id')]
private Collection $promotionCoupons;

/**
@var Collection|OrderTalonOneCoupon[]
/
#[ORM\OneToMany(mappedBy: 'order', targetEntity: OrderTalonOneCoupon::class, cascade: ['persist', 'remove'], orphanRemoval: true)]
private Collection|array $talonOneCoupons;

private ?UpSell $upSell = null;

private int $itemsTotalWithoutTax = 0;

private int $totalWithoutTax = 0;

private string $className;

private bool $validity = true;

private array $validityViolations = [];

private array $validityRules = [];

public array $promotionsSummary = [];

public int $itemsTotalWithoutDiscount = 0;

public function __construct()
{
parent::__construct();

$this-&gt;className = self::class;

$this-&gt;promotionCoupons = new ArrayCollection();
$this-&gt;promotionCouponCustomers = new ArrayCollection();
$this-&gt;talonOneCoupons = new ArrayCollection();
$this-&gt;analyticsStorage = false;
$this-&gt;adStorage = false;
}

public function __clone(): void
{
if ($this-&gt;shippingAddress) {
$this-&gt;setShippingAddress(clone $this-&gt;shippingAddress);
}

if ($this-&gt;billingAddress) {
$this-&gt;setBillingAddress(clone $this-&gt;billingAddress);
}

// Shipments
$shipments = $this-&gt;getShipments()-&gt;toArray();
$this-&gt;shipments = new ArrayCollection(array_map(function ($shipment) {
$shipment = clone $shipment;
$shipment-&gt;setOrder($this);

return $shipment;
}, $shipments));

// Payments
$payments = $this-&gt;getPayments()-&gt;toArray();
$this-&gt;payments = new ArrayCollection(array_map(function ($payment) {
$payment = clone $payment;
$payment-&gt;setOrder($this);

return $payment;
}, $payments));
}

public function isRecurringOrder(): bool
{
return false;
}

public function getGclid(): ?string
{
return $this-&gt;gclid;
}

public function setGclid(?string $gclid): self
{
$this-&gt;gclid = $gclid;

return $this;
}

public function getGSessionId(): ?string
{
return $this-&gt;gSessionId;
}

public function setGSessionId(?string $gSessionId): self
{
$this-&gt;gSessionId = $gSessionId;

return $this;
}

public function getCustomerUserAgent(): ?string
{
return $this-&gt;customerUserAgent;
}

public function setCustomerUserAgent(?string $customerUserAgent): self
{
$this-&gt;customerUserAgent = $customerUserAgent;

return $this;
}

public function getAdStorage(): bool
{
return $this-&gt;adStorage;
}

public function setAdStorage(bool $adStorage): self
{
$this-&gt;adStorage = $adStorage;

return $this;
}

public function getAnalyticsStorage(): bool
{
return $this-&gt;analyticsStorage;
}

public function setAnalyticsStorage(bool $analyticsStorage): self
{
$this-&gt;analyticsStorage = $analyticsStorage;

return $this;
}

public function hasInvoice(): bool
{
return !empty($this-&gt;billPath);
}

public function getHasInvoice(): bool
{
return $this-&gt;hasInvoice();
}

public function getBillPath(): ?string
{
return $this-&gt;billPath;
}

public function setBillPath(string $billPath): self
{
$this-&gt;billPath = $billPath;

return $this;
}

public function getBilledAt(): ?\DateTime
{
return $this-&gt;billed_at;
}

public function setBilledAt(\DateTime $billed_at): self
{
$this-&gt;billed_at = $billed_at;

return $this;
}

/**
Check if an order contains products eligible for subscription.
/

### `getHasSubscribableItems`

- **Description**: Use for serialization of 'hasSubscribableItems' property.
/

### `isSubscriptionOrder`


### `getIsSubscriptionOrder`

- **Description**: Use for serialization of 'isSubscriptionOrder' property.
/

### `getWebmethodIsSubscriptionOrder`

- **Description**: Webmethod compatibility.
/

### `hasSubscribedItems`


### `getHasSubscribedItems`

- **Description**: Use for serialization of 'hasSubscribedItems' property.
/

### `getIsSubscription`


### `findItem`

- **Parameters**: `int $itemId`

### `findItemForProductVariant`

- **Parameters**: `ProductVariant $productVariant`

### `getPayment`

- **Description**: @var OrderItem $item */
if ($item-&gt;getVariant()-&gt;getId() === $productVariant-&gt;getId()) {
return $item;
}
}

return null;
}

/**
@return Payment|null
/

### `getLastPayment`

- **Parameters**: `array|string|null $state = null`

### `getPaymentMethod`

- **Description**: Récupère la méthode du dernier paiement.

@return PaymentMethod|null
/

### `getLastPaymentMethod`


### `getLastShipmentMethod`

- **Parameters**: `?string $state = null`

### `getPromotionCouponCustomers`

- **Description**: @var ShipmentInterface $shipment */
$shipment = $this-&gt;shipments-&gt;filter(static function (ShipmentInterface $shipment) use ($state): bool {
return null === $state || $shipment-&gt;getState() === $state;
})-&gt;last();

return false !== $shipment ? $shipment-&gt;getMethod() : null;
}

public function getLastShipment(?string $state = null): ?ShipmentInterface
{
if ($this-&gt;shipments-&gt;isEmpty()) {
return null;
}

/** @var ShipmentInterface $shipment */
$shipment = $this-&gt;shipments-&gt;filter(static function (ShipmentInterface $shipment) use ($state): bool {
return null === $state || $shipment-&gt;getState() === $state;
})-&gt;last();

return false !== $shipment ? $shipment : null;
}

public function getSentToMiddlewareAt(): ?\DateTime
{
return $this-&gt;sentToMiddlewareAt;
}

public function setSentToMiddlewareAt(?\DateTime $sentToMiddlewareAt): self
{
$this-&gt;sentToMiddlewareAt = $sentToMiddlewareAt;

return $this;
}

public function getUpSell(): ?UpSell
{
return $this-&gt;upSell;
}

public function setUpSell(?UpSell $upSell): self
{
$this-&gt;upSell = $upSell;

return $this;
}

public function getItemsTotalWithoutDiscount(?array $adjustmentTypeToInclude = null): int
{
$total = 0;
/** @var OrderItem $item */
foreach ($this-&gt;items as $item) {
$total += $item-&gt;getTotalWithoutDiscount();

if ($adjustmentTypeToInclude) {
foreach ($item-&gt;getAdjustmentsRecursively($adjustmentTypeToInclude) as $adjustment) {
if ($adjustment-&gt;isNeutral()) {
continue;
}

$total += $adjustment-&gt;getAmount();
}
}
}

return $total;
}

/**
@return Collection|PromotionCouponCustomer[]
/

### `addPromotionCouponCustomer`

- **Parameters**: `PromotionCouponCustomer $promotionCouponCustomer`

### `removePromotionCouponCustomer`

- **Parameters**: `PromotionCouponCustomer $promotionCouponCustomer`

### `hasPromotionCouponCustomer`

- **Parameters**: `PromotionCouponCustomer $promotionCouponCustomer`

### `getPromotionCoupons`

- **Description**: @return Collection|PromotionCoupon[]
/

### `addPromotionCoupon`

- **Parameters**: `PromotionCoupon $promotionCoupon`

### `removePromotionCoupon`

- **Parameters**: `PromotionCoupon $promotionCoupon`

### `hasPromotionCoupon`

- **Parameters**: `PromotionCoupon $promotionCoupon`

### `getCouponForPromotion`

- **Parameters**: `PromotionInterface $promotion`

### `getFreeProducts`

- **Description**: @return Collection|AdjustmentInterface[]
/

### `hasFreeProducts`


### `countPromotionByExclusiveMode`

- **Parameters**: `int $exclusiveMode, int $priority = -1`

### `getOrderPromotionTotal`

- **Parameters**: `bool $inclPaymentCharges = true`

### `getOrderShippingTotal`

- **Parameters**: `bool $taxIncl = true, bool $withoutDiscount = false`

### `isLastOrderWithinSixMonths`

- **Description**: @var ShipmentInterface $shipment */
foreach ($shipment-&gt;getAdjustments(AdjustmentInterface::SHIPPING_ADJUSTMENT) as $adjustment) {
/* @var Adjustment $adjustment */
$shippingTotal += $adjustment-&gt;getAmount();
}

foreach ($shipment-&gt;getAdjustments(AdjustmentInterface::TAX_ADJUSTMENT) as $adjustment) {
/** @var Adjustment $adjustment */
if ($adjustment-&gt;isNeutral() &amp;&amp; !$taxIncl) {
$shippingTotal -= $adjustment-&gt;getAmount();
} elseif (!$adjustment-&gt;isNeutral() &amp;&amp; $taxIncl) {
$shippingTotal += $adjustment-&gt;getAmount();
}
}
}

if (!$withoutDiscount) {
$shippingTotal += $this-&gt;getAdjustmentsTotal(AdjustmentInterface::ORDER_SHIPPING_PROMOTION_ADJUSTMENT);
}

return $shippingTotal;
}

public function getOrderShippingTotalWithoutTax(): int
{
return $this-&gt;getOrderShippingTotal(false);
}

public function getOrderPaymentFeesTotal(bool $taxIncl = true): int
{
$shippingTotal = $this-&gt;getAdjustmentsTotal(AdjustmentInterface::PAYMENT_CHARGES_ADJUSTMENT);
$shippingTotal += $this-&gt;getAdjustmentsTotal(AdjustmentInterface::PAYMENT_CHARGES_PROMOTION_ADJUSTMENT);

if ($taxIncl) {
$shippingTotal += $this-&gt;getAdjustmentsTotal(AdjustmentInterface::PAYMENT_CHARGES_ADJUSTMENT_TAX);
}

return $shippingTotal;
}

public function getOrderPaymentFeesTotalWithoutTax(): int
{
return $this-&gt;getOrderPaymentFeesTotal(false);
}

public function getSubEntities(): Collection
{
return new ArrayCollection(array_merge(
$this-&gt;getItems()-&gt;toArray(),
$this-&gt;getFreeProducts()-&gt;toArray(),
array_filter([
$this-&gt;getBillingAddress(),
$this-&gt;getShippingAddress(),
]),
));
}

public function containsSample(): bool
{
/** @var OrderItem $item */
foreach ($this-&gt;items as $item) {
if ($item-&gt;getProduct()-&gt;isSample()) {
return true;
}
}

return false;
}

public function containsOnlySample(): bool
{
/** @var OrderItem $item */
foreach ($this-&gt;items as $item) {
if (!$item-&gt;getProduct()-&gt;isSample()) {
return false;
}
}

return true;
}

public function getPromotionSubjectCount(): int
{
return $this-&gt;getTotalQuantityWithoutFreeItems();
}

public function getTotalQuantityWithoutFreeItems(array $excludeItems = []): int
{
$quantity = 0;

foreach ($this-&gt;items as $item) {
if (\in_array($item, $excludeItems, true)) {
continue;
}

$quantity += 0 !== $item-&gt;getTotal() ? $item-&gt;getQuantity() : 0;
}

return $quantity;
}

public function isMigrated(): bool
{
return $this-&gt;migrated;
}

public function setMigrated(bool $migrated): self
{
$this-&gt;migrated = $migrated;

return $this;
}

public function containsVariant(string $variantCode): bool
{
/** @var OrderItem $item */
foreach ($this-&gt;getItems() as $item) {
if ($item-&gt;getVariantCode() === $variantCode) {
return true;
}
}

return false;
}

public function getItemByVariant(string $variantCode): ?OrderItem
{
/** @var OrderItem $item */
foreach ($this-&gt;getItems() as $item) {
if ($item-&gt;getVariantCode() === $variantCode) {
return $item;
}
}

return null;
}

public function getChannelCode(): ?string
{
return $this-&gt;channel-&gt;getCode();
}

public function getClassification(): ?string
{
$electedClassification = null;
/** @var OrderItem $orderItem */
foreach ($this-&gt;getItems() as $orderItem) {
if (!$orderItem-&gt;getProduct()) {
continue;
}

$classification = $orderItem-&gt;getProduct()-&gt;getClassification();

if (empty($classification)) {
continue;
}

if (null === $electedClassification) {
$electedClassification = $classification;

continue;
}

if ($electedClassification !== $classification) {
$electedClassification = 'mixed';
}
}

return $electedClassification;
}

public function getTrackingRequestType(): string
{
return !empty($this-&gt;gclid) ? 'Site' : 'Service client';
}

public function containsOutOfStockProduct(bool $excludePartialOutOfStock = false): bool
{
foreach ($this-&gt;items as $item) {
/** @var OrderItem $item */
if (!$item-&gt;getVariant()-&gt;isInStock($excludePartialOutOfStock)) {
return true;
}
}

return false;
}

public function getOrderDate(): ?\DateTimeInterface
{
$date = null;

if (\in_array($this-&gt;getCheckoutState(), [OrderCheckoutStates::STATE_COMPLETED], true)) {
if ($this-&gt;getPayment() &amp;&amp; OrderPaymentStates::STATE_PAID === $this-&gt;getPaymentState()) {
$date = $this-&gt;getPayment()-&gt;getPaymentDate();
} else {
$date = $this-&gt;getCheckoutCompletedAt();
}
} elseif ($this-&gt;isSubscriptionOrder()
&amp;&amp; $this instanceof SubscriptionOrder
&amp;&amp; !\in_array($this-&gt;getDraftState()-&gt;value, [SubscriptionOrderState::PROCESSED-&gt;value, SubscriptionOrderState::CANCELLED-&gt;value], true)
&amp;&amp; null !== $this-&gt;getSubscription()
) {
$date = $this-&gt;getSubscription()-&gt;getNextShippingAt();
}

if (!$date) {
$date = new \DateTime('now');
}

$date-&gt;setTimezone(new \DateTimeZone('Europe/Paris'));

return $date;
}

/**
Check if the last order date is within the last 6 months.

@return bool Returns true if the last order date is within the last 6 months, false otherwise
/

### `getItemsTotalWithoutTax`


### `setItemsTotalWithoutTax`

- **Parameters**: `int $itemsTotalWithoutTax`

### `getTotalWithoutTax`


### `setTotalWithoutTax`

- **Parameters**: `int $totalWithoutTax`

### `getTaxTotal`

- **Description**: @override to add PAYMENT_CHARGES_ADJUSTMENT_TAX
/

### `getPaymentChargesTotal`

- **Parameters**: `bool $taxIncl = true, bool $withoutDiscount = false`

### `setChannel`

- **Parameters**: `?BaseChannelInterface $channel`

### `getClassName`


### `setClassName`

- **Parameters**: `string $className`

### `isValidity`


### `setValidity`

- **Parameters**: `bool $validity`

### `getValidityViolations`


### `setValidityViolations`

- **Parameters**: `array $validityViolations`

### `getValidityRules`


### `setValidityRules`

- **Parameters**: `array $validityRules`

### `getTalonOneCoupons`

- **Description**: @return Collection|OrderTalonOneCoupon[]
/

### `addTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `removeTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `hasTalonOneCoupon`

- **Parameters**: `OrderTalonOneCoupon $talonOneCoupon`

### `getTalonOneCouponByCouponCode`

- **Parameters**: `string $couponCode`

### `getTalonOneCouponByEffectIdentifier`

- **Parameters**: `int $triggeredByCouponIdentifier`

### `getCouponCodeById`

- **Parameters**: `int $couponId`

### `hasInactiveCoupons`


