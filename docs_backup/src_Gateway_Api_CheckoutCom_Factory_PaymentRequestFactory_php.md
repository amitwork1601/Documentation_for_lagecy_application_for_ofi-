# PaymentRequestFactory.php

**Path**: `src\Gateway\Api\CheckoutCom\Factory\PaymentRequestFactory.php`

## Summary
The `PaymentRequestFactory` class is responsible for creating payment request objects for the Checkout.com payment gateway integration. It constructs a `PaymentRequest` with order details (amount, currency, customer/shipping info), dynamically generates success/failure callback URLs by replacing placeholders with actual base URLs and order tokens, and configures the payment source based on order type and configuration settings.

## Classes
- `PaymentRequestFactory`

## Function Details

### `setRequestSubscription`

- **Parameters**: `PaymentRequest $request, Order|SubscriptionOrder $order`
- **Description**: @throws CheckoutException
/
public function create(
Order|SubscriptionOrder $order,
CheckoutComClientConfig $config,
?string $token = null,
?string $currentUrl = null,
): PaymentRequest {
$baseUrl = $this-&gt;requestStack-&gt;getCurrentRequest()?-&gt;headers-&gt;get('origin') ?? '';
$urlConfig = str_replace(
['@baseUrl', '@orderTokenValue'],
[$baseUrl, $order-&gt;getTokenValue()],
[
'success_url' =&gt; $currentUrl ?: $config-&gt;getSuccessUrl(),
'failure_url' =&gt; $currentUrl ?: $config-&gt;getFailureUrl(),
]
);

$request = new PaymentRequest(
(int) $order-&gt;getLastPayment()-&gt;getAmount(),
(string) $order-&gt;getNumber(),
(string) $order-&gt;getCurrencyCode(),
$order-&gt;getCustomer(),
$order-&gt;getShippingAddress(),
$urlConfig['success_url'],
$urlConfig['failure_url'],
);

$this-&gt;setRequestSource($request, $order, $config, $token);
$this-&gt;setRequestSubscription($request, $order);

// Add metadata to the request
$request-&gt;metadata = [
'order_id' =&gt; $order-&gt;getId(),
'customer_id' =&gt; $order-&gt;getCustomer()-&gt;getId(),
'payment_id' =&gt; $order-&gt;getLastPayment()-&gt;getId(),
];

return $request;
}

/**
@throws CheckoutException
/
protected function setRequestSource(
PaymentRequest $request,
Order|SubscriptionOrder $order,
CheckoutComClientConfig $config,
?string $token = null,
): void {
switch ($order-&gt;getLastPayment()-&gt;getMethod()-&gt;getCode()) {
case 'CHECKOUTCOM_CB':
case 'CHECKOUTCOM_GOOGLE_PAY':
case 'CHECKOUTCOM_APPLE_PAY':
if (null !== $token) {
$request-&gt;setTokenSource($token, $order-&gt;getBillingAddress());
}
break;
case 'CHECKOUTCOM_PAYPAL':
$request-&gt;setPaypalSource();
$request-&gt;setItems($order-&gt;getItems());

if ($order-&gt;getShippingTotal() &gt; 0) {
$checkoutComProduct = new Product();
$checkoutComProduct-&gt;name = $this-&gt;translator-&gt;trans('app.ui.shipping.charges');
$checkoutComProduct-&gt;quantity = 1;
$checkoutComProduct-&gt;price = $order-&gt;getShippingTotal();
$request-&gt;items = array_merge($request-&gt;items, [$checkoutComProduct]);
}
break;
case 'CHECKOUTCOM_GIROPAY':
$request-&gt;setGiropaySource();
break;
case 'CHECKOUTCOM_BANCONTACT':
/** @var Channel|null $channel */
$channel = $order-&gt;getChannel();
if (null === $channel) {
throw new CheckoutException(\sprintf('Can\'t make a request payment, order %s has no channel.', $order-&gt;getTokenValue()));
}

/** @var Country|null $country */
$country = $channel-&gt;getCountries()-&gt;first();
if (null === $country) {
throw new CheckoutException(\sprintf('Can\'t make a request payment, order %s channel has no country.', $order-&gt;getTokenValue()));
}

$request-&gt;setBancontactSource(
$this-&gt;accessor-&gt;getValue($config-&gt;getRawConfig(), '[client_language]'),
strtoupper($country-&gt;getCode()),
$order-&gt;getCustomer()-&gt;getFullName()
);
break;
case 'CHECKOUTCOM_SOFORT':
$request-&gt;setSofortSource();
break;
case 'CHECKOUTCOM_IDEAL':
$clientLanguage = $this-&gt;accessor-&gt;getValue($config-&gt;getRawConfig(), '[client_language]') ?? 'en';
$request-&gt;setIdealSource($clientLanguage);
break;
}
}

/**
Recurring payments and installments for subscription.

@throws CheckoutException
/

