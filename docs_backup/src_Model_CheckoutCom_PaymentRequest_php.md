# PaymentRequest.php

**Path**: `src\Model\CheckoutCom\PaymentRequest.php`

## Summary
The `PaymentRequest` class is a payment gateway integration model that extends Checkout.com's base payment request to handle Sylius e-commerce order payments. It constructs payment requests with order details (amount, currency, customer info, shipping address), configures payment authorization settings, and manages the integration between Sylius's commerce entities and Checkout.com's payment API, supporting various payment methods including cards and alternative payment options (PayPal, Giropay, iDEAL, Sofort).

## Classes
- `PaymentRequest`

## Function Details

### `setItems`

- **Parameters**: `Collection $orderItems`
- **Description**: @var PaymentType
/
public $payment_type;

public function __construct(
int $totalAmount,
string $customId,
?string $currencyCode,
?CustomerInterface $customer,
?SyliusAddress $shippingAddress,
string $successUrl,
string $failureUrl,
string $description = 'Sylius Checkout Payment',
?bool $merchantInitiated = false,
?string $previousPaymentId = null,
) {
$this-&gt;authorization_type = AuthorizationType::$final;
$this-&gt;capture = true;
$this-&gt;amount = $totalAmount;
$this-&gt;reference = $customId;
$this-&gt;description = $description;
$this-&gt;setCurrency($currencyCode);
$this-&gt;setCustomer($customer);
$this-&gt;setShipping($shippingAddress);
$this-&gt;setThreeDs();
$this-&gt;setPreviousPaymentId($previousPaymentId);
$this-&gt;setMerchantInitiated($merchantInitiated);
$this-&gt;success_url = $successUrl;
$this-&gt;failure_url = $failureUrl;
}

public function setTokenSource(string $token, ?SyliusAddress $billingAddress): void
{
$address = new Address();
$address-&gt;setAddressLine1($billingAddress-&gt;getStreet());
$address-&gt;setAddressLine2($billingAddress-&gt;getStreet2());
$address-&gt;setCity($billingAddress-&gt;getCity());
$address-&gt;setZip($billingAddress-&gt;getPostcode());
$address-&gt;setCountry($billingAddress-&gt;getCountryCode());

$phone = null;
$billingAddressPhoneNumber = $billingAddress-&gt;getPhoneNumber();
if (null !== $billingAddressPhoneNumber) {
try {
$number = PhoneNumber::parse($billingAddressPhoneNumber);
if ($number-&gt;isValidNumber()) {
$phone = new Phone();
$phone-&gt;country_code = '+' . $number-&gt;getCountryCode();
$phone-&gt;number = $number-&gt;format(PhoneNumberFormat::NATIONAL);
}
} catch (PhoneNumberParseException $e) {
// do nothing
}
}

$requestTokenSource = new RequestTokenSource();
$requestTokenSource-&gt;token = $token;
$requestTokenSource-&gt;billing_address = $address;

if ($phone instanceof Phone) {
$requestTokenSource-&gt;phone = $phone;
}

$this-&gt;source = $requestTokenSource;
}

public function setIdSource(string $sourceID): void
{
$requestIdSource = new RequestIdSource();
$requestIdSource-&gt;id = $sourceID;

$this-&gt;source = $requestIdSource;
}

public function setGiropaySource(): void
{
$requestGiropaySource = new RequestGiropaySource();

$this-&gt;source = $requestGiropaySource;
}

public function setPaypalSource(): void
{
$requestPaypalSource = new RequestPayPalSource();

$this-&gt;source = $requestPaypalSource;
}

public function setBancontactSource($clientLanguage, $channelCode, $fullname): void
{
$requestBancontactSource = new RequestBancontactSource();
$requestBancontactSource-&gt;language = $clientLanguage;
$requestBancontactSource-&gt;payment_country = strtoupper($channelCode);
$requestBancontactSource-&gt;account_holder_name = $fullname;

$this-&gt;source = $requestBancontactSource;
}

public function setSofortSource(): void
{
$requestSofortSource = new RequestSofortSource();

$this-&gt;source = $requestSofortSource;
}

public function setIdealSource(string $clientLanguage): void
{
$requestIdealSource = new RequestIdealSource();
$requestIdealSource-&gt;language = $clientLanguage;
$requestIdealSource-&gt;description = 'Payment by iDEAL source';

$this-&gt;source = $requestIdealSource;
}

/**
@param Collection $orderItems
/

### `setCITPayment`

- **Description**: @var OrderItemInterface $orderItem */
foreach ($orderItems as $orderItem) {
if ($orderItem-&gt;getFullDiscountedUnitPrice() &gt; 0) {
$checkoutComProduct = new Product();
$checkoutComProduct-&gt;name = $orderItem-&gt;getProductName();
$checkoutComProduct-&gt;quantity = $orderItem-&gt;getQuantity();
$checkoutComProduct-&gt;price = $orderItem-&gt;getFullDiscountedUnitPrice();
$items[] = $checkoutComProduct;
}
}

$this-&gt;items = $items;
}

/**
The cardholder initiates the payment and authorizes the use of their stored card details.
/

### `setMITPayment`

- **Parameters**: `string $previousPaymentId`
- **Description**: Merchants trigger these payments with the cardholder's consent, using stored card details.
/

### `setCurrency`

- **Parameters**: `?string $currencyCode`

### `setShipping`

- **Parameters**: `?SyliusAddress $shippingAddress`

### `setCustomer`

- **Parameters**: `?CustomerInterface $customer`

### `setThreeDs`


### `setPreviousPaymentId`

- **Parameters**: `?string $previousPaymentId = null`

### `setMerchantInitiated`

- **Parameters**: `?bool $merchantInitiated = false`

