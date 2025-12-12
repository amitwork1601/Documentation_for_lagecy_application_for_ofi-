# CheckAwaitingPaymentCommand.php

**Path**: `plugins\PayPalPlugin\src\Command\CheckAwaitingPaymentCommand.php`

## Summary
This Symfony console command checks and processes PayPal orders that are in an awaiting payment state. It retrieves pending payments, queries the PayPal API to check their current status, and applies appropriate state machine transitions to complete orders or handle declined/failed payment scenarios (such as instrument declined, payer action required, or duplicate invoice issues).

## Classes
- `CheckAwaitingPaymentCommand`

## Function Details

### `_markOrderStatus`

- **Parameters**: `array $orderDetails, PaymentInterface $payment, string $status`
- **Description**: @var string */
protected static $defaultName = 'sylius:pay-pal-plugin:check-payment';
/** @var string */
protected static $defaultDescription = 'Vérification des commandes Paypal en attente';

private FactoryInterface $stateMachineFactory;
private CacheAuthorizeClientApiInterface $authorizeClientApi;
private OrderDetailsApiInterface $orderDetailsApi;
private CompleteOrderApiInterface $completeOrderApi;
private ObjectManager $paymentManager;

private PaymentRepositoryInterface $paymentRepository;
private PayPalConfigurationProviderInterface $payPalConfigurationProvider;
private ChannelContextInterface $channelContext;
private SymfonyStyle $io;
private PropertyAccessor $accessor;

private bool $isDry = false;

public function __construct(
FactoryInterface $stateMachineFactory,
CacheAuthorizeClientApiInterface $authorizeClientApi,
OrderDetailsApiInterface $orderDetailsApi,
CompleteOrderApiInterface $completeOrderApi,
ObjectManager $paymentManager,
PaymentRepositoryInterface $paymentRepository,
PayPalConfigurationProviderInterface $payPalConfigurationProvider,
ChannelContextInterface $channelContext,
) {
parent::__construct(self::$defaultName);

$this-&gt;stateMachineFactory = $stateMachineFactory;
$this-&gt;authorizeClientApi = $authorizeClientApi;
$this-&gt;orderDetailsApi = $orderDetailsApi;
$this-&gt;completeOrderApi = $completeOrderApi;
$this-&gt;paymentManager = $paymentManager;

$this-&gt;paymentRepository = $paymentRepository;
$this-&gt;payPalConfigurationProvider = $payPalConfigurationProvider;
$this-&gt;channelContext = $channelContext;
$this-&gt;accessor = PropertyAccess::createPropertyAccessor();
}

protected function configure(): void
{
$this
-&gt;setName(self::$defaultName)
-&gt;setDescription(self::$defaultDescription)
-&gt;addOption('dry')
;
}

protected function execute(InputInterface $input, OutputInterface $output): int
{
$this-&gt;isDry = (bool) $input-&gt;getOption('dry');
$this-&gt;io = new SymfonyStyle($input, $output);

/** @var ChannelInterface $channel */
$channel = $this-&gt;channelContext-&gt;getChannel();
try {
$paypalMethod = $this-&gt;payPalConfigurationProvider-&gt;getPayPalPaymentMethod($channel);
} catch (\InvalidArgumentException $e) {
$this-&gt;io-&gt;error($e-&gt;getMessage());

return 0;
}

/** @var LazyCollection $payments */
$payments = $this-&gt;paymentRepository-&gt;matching(
Criteria::create()
-&gt;where(Criteria::expr()-&gt;in('state', [PaymentInterface::STATE_PROCESSING, PaymentInterface::STATE_NEW]))
-&gt;andWhere(Criteria::expr()-&gt;eq('method', $paypalMethod))
);

$this-&gt;io-&gt;info('Commande Paypal en attente de paiement : '.$payments-&gt;count());

/** @var PaymentInterface $payment */
foreach ($payments as $payment) {
/** @var string|null $paymentPaypalOrderStatus */
$paymentPaypalOrderStatus = $this-&gt;accessor-&gt;getValue($payment-&gt;getDetails(), '[status]');
/** @var string|null $paypalOrderID */
$paypalOrderID = $this-&gt;accessor-&gt;getValue($payment-&gt;getDetails(), '[paypal_order_id]');

if (\in_array($paymentPaypalOrderStatus, [StatusAction::STATUS_CREATED, StatusAction::STATUS_PROCESSING], true)
&amp;&amp; null !== $paypalOrderID) {
/** @var OrderInterface $order */
$order = $payment-&gt;getOrder();

/** @var PaymentMethodInterface $paymentMethod */
$paymentMethod = $payment-&gt;getMethod();
$token = $this-&gt;authorizeClientApi-&gt;authorize($paymentMethod);

// Retrieve Paypal order details
$orderDetails = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

switch ($this-&gt;accessor-&gt;getValue($orderDetails, '[status]')) {
case 'APPROVED':
$this-&gt;ensureOrderCompleted($order);
$this-&gt;_captureOrder($paypalOrderID, $payment, $token);
break;
case 'COMPLETED':
$this-&gt;ensureOrderCompleted($order);
$this-&gt;_markOrderStatus($orderDetails, $payment, StatusAction::STATUS_COMPLETED);
break;
case 'CREATED':
// Do nothing for now
break;
default:
if (isset($orderDetails['debug_id'])) {
$this-&gt;_processError($orderDetails, $payment);
} else {
$this-&gt;_markOrderStatus($orderDetails, $payment, StatusAction::STATUS_PROCESSING);
}

break;
}
} else {
$this-&gt;io-&gt;note('Payment id:'.$payment-&gt;getId().' non traitée, conditions non remplies.');
}
}

return 0;
}

private function ensureOrderCompleted(OrderInterface $order)
{
if (OrderCheckoutStates::STATE_COMPLETED !== $order-&gt;getCheckoutState()) {
// Try to complete Order if not
$stateMachine = $this-&gt;stateMachineFactory-&gt;get($order, OrderCheckoutTransitions::GRAPH);
if ($stateMachine-&gt;can(OrderCheckoutTransitions::TRANSITION_COMPLETE)) {
if (!$this-&gt;isDry) {
$stateMachine-&gt;apply(OrderCheckoutTransitions::TRANSITION_COMPLETE);
} else {
$this-&gt;io-&gt;note('[DRY] Payment id:'.$payment-&gt;getId().' passage de l\'order à complete.');
}
}
}
}

private function _captureOrder(string $paypalOrderID, PaymentInterface $payment, string $token): void
{
if (!$this-&gt;isDry) {
// Call to capture Paypal order
$detailsComplete = $this-&gt;completeOrderApi-&gt;complete($token, $paypalOrderID);

// Retrieve Paypal order details
$details = $this-&gt;orderDetailsApi-&gt;get($token, $paypalOrderID);

/** @var string|null $orderDetailstatus */
$orderDetailstatus = $this-&gt;accessor-&gt;getValue($details, '[status]');

if (StatusAction::STATUS_COMPLETED === $orderDetailstatus
|| StatusAction::STATUS_PROCESSING === $orderDetailstatus) {
$this-&gt;_markOrderStatus($details, $payment, $orderDetailstatus);
} else {
if (isset($detailsComplete['debug_id'])) {
$this-&gt;_processError($detailsComplete, $payment);
}
}
} else {
$this-&gt;io-&gt;note('[DRY] Payment id:'.$payment-&gt;getId().' Tentative de capture de l\'order Paypal['.$paypalOrderID.']');
}
}

/**
@throws \SM\SMException
/

### `_processError`

- **Parameters**: `array $err, PaymentInterface $payment`
- **Description**: @throws \SM\SMException
/

