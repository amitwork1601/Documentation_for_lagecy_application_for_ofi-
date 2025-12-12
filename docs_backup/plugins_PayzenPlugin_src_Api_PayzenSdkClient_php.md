# PayzenSdkClient.php

**Path**: `plugins\PayzenPlugin\src\Api\PayzenSdkClient.php`

## Summary
The `PayzenSdkClient` class serves as a wrapper/adapter for integrating the Payzen (Lyra) payment gateway SDK into a Sylius e-commerce application. It handles payment operations including generating form tokens for payment transactions, validating signatures/hashes for security, and transforming Sylius order data into the format required by the Payzen API endpoints. This client acts as the bridge between the Sylius order management system and the external Payzen payment processing service.

## Classes
- `PayzenSdkClient`

## Function Details

### `__construct`

- **Parameters**: `$username, $password, $endpoint, $payum, $factory`
- **Description**: @var LyraClient */
protected $client;

/** @var string */
protected $username;

/** @var string */
protected $password;

/** @var string */
protected $endpoint;

/** @var Payum */
protected $payum;

/** @var FactoryInterface */
protected $factory;

/**
Constructor.

@param string           $username
@param string           $password
@param string           $endpoint
@param Payum            $payum
@param FactoryInterface $factory
/

### `checkSignature`


### `generateFormToken`

- **Parameters**: `OrderInterface $order, $action = 'CreatePayment'`
- **Description**: Generate form token.

@param string $action

@return array
/

### `getFormAnswer`

- **Description**: Get form answer.

@return array
/

### `getParams`

- **Parameters**: `OrderInterface $order, string $action`
- **Description**: Get parameters.
/

### `init`

- **Description**: @var OrderItemInterface $item */
foreach ($order-&gt;getItems() as $item) {
$cartItems[] = [
'productLabel' =&gt; $item-&gt;getProductName(),
'productRef' =&gt; $item-&gt;getVariant()-&gt;getCode(),
'productQty' =&gt; $item-&gt;getQuantity(),
'productAmount' =&gt; $item-&gt;getTotal(),
'productVat' =&gt; $item-&gt;getTaxTotal(),
];
}

$shoppingCart = [
'cartItemInfo' =&gt; $cartItems,
];
if ($order-&gt;getTaxTotal()) {
$shoppingCart['taxAmount'] = $order-&gt;getTaxTotal();
}
if ($order-&gt;getShippingTotal()) {
$shoppingCart['shippingAmount'] = $order-&gt;getShippingTotal();
}

$params = [
'amount' =&gt; $order-&gt;getTotal(),
'currency' =&gt; $order-&gt;getCurrencyCode(),
'orderId' =&gt; $order-&gt;getNumber(),
'customer' =&gt; [
'reference' =&gt; $customer-&gt;getId(),
'email' =&gt; $customer-&gt;getEmail(),
'shippingDetails' =&gt; [
'firstName' =&gt; $shippingAddress-&gt;getFirstName(),
'lastName' =&gt; $shippingAddress-&gt;getLastName(),
'address' =&gt; $shippingAddress-&gt;getStreet(),
'address2' =&gt; $shippingAddress-&gt;getCompany(),
'zipCode' =&gt; $shippingAddress-&gt;getPostcode(),
'city' =&gt; $shippingAddress-&gt;getCity(),
'country' =&gt; $shippingAddress-&gt;getCountryCode(),
'phoneNumber' =&gt; $shippingAddress-&gt;getPhoneNumber(),
],
'billingDetails' =&gt; [
'firstName' =&gt; $billingAddress-&gt;getFirstName(),
'lastName' =&gt; $billingAddress-&gt;getLastName(),
'address' =&gt; $billingAddress-&gt;getStreet(),
'address2' =&gt; $billingAddress-&gt;getCompany(),
'zipCode' =&gt; $billingAddress-&gt;getPostcode(),
'city' =&gt; $billingAddress-&gt;getCity(),
'country' =&gt; $billingAddress-&gt;getCountryCode(),
'phoneNumber' =&gt; $billingAddress-&gt;getPhoneNumber(),
],
'shoppingCart' =&gt; $shoppingCart,
],
'strongAuthentication' =&gt; 'NO_PREFERENCE',
'ipnTargetUrl' =&gt; $captureToken-&gt;getTargetUrl(),
];

if ('CreatePayment' === $action &amp;&amp; $order-&gt;hasSubscribedItems()) {
$params['formAction'] = 'REGISTER_PAY';
}

// Add Metadata
$params['metadata'] = [
'order_id' =&gt; $order-&gt;getId(),
'payment_id' =&gt; $lastPayment-&gt;getId(),
'customer_id' =&gt; $customer-&gt;getId(),
];

return $params;
}

/**
Init keys for SDK.
/

