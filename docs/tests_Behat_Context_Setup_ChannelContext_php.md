# ChannelContext.php

**Path**: `tests\Behat\Context\Setup\ChannelContext.php`

## Summary
This is a Behat context class for setting up and configuring Channel entities during automated testing in Sylius e-commerce platform. It provides step definitions for creating channels with various configurations (currencies, locales, billing data, zones, etc.) and managing channel-related test scenarios like account verification settings and shop billing information. The class serves as a test fixture builder to establish the multi-channel store setup required for behavioral testing.

## Classes
- `ChannelContext`

## Function Details

### `channelHasAccountVerificationDisabled`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given :channel channel has account verification disabled
/

### `storeOperatesOnASingleChannel`

- **Parameters**: `$currencyCode = null`
- **Description**: @Given the store operates on a single channel
@Given the store operates on a single channel in :currencyCode currency

@param mixed|null $currencyCode
/

### `storeOperatesOnASingleChannelInLocale`

- **Parameters**: `string $localeCode`
- **Description**: @Given the store operates on a single channel in :localeCode locale
/

### `theChannelIsEnabled`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given /^the store(?:| also) operates on (?:a|another) channel named "([^"]+)"$/
@Given /^the store(?:| also) operates on (?:a|another) channel named "([^"]+)" in "([^"]+)" currency$/
@Given /^the store(?:| also) operates on (?:a|another) channel named "([^"]+)" in "([^"]+)" currency and with hostname "([^"]+)"$/
@Given the store (also) operates on a(nother) channel named :channelName with hostname :hostname
@Given the store operates on a channel identified by :channelCode code
/
public function theStoreOperatesOnAChannelNamed(
?string $channelName = null,
?string $currencyCode = null,
?string $hostname = null,
?string $channelCode = null,
): void {
$channelCode ??= StringInflector::nameToLowercaseCode($channelName);
$channelName ??= $channelCode;
$defaultData = $this-&gt;defaultChannelFactory-&gt;create($channelCode, $channelName, $currencyCode);
$defaultData['channel']-&gt;setHostname($hostname);

$this-&gt;sharedStorage-&gt;setClipboard($defaultData);
$this-&gt;sharedStorage-&gt;set('channel', $defaultData['channel']);
}

/**
@Given the channel :channel is enabled
/

### `theChannelIsDisabled`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given the channel :channel is disabled
@Given the channel :channel has been disabled
/

### `iChannelHasBeenDeleted`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given channel :channel has been deleted
/

### `itsDefaultTaxRateIs`

- **Parameters**: `ChannelInterface $channel, ZoneInterface $defaultTaxZone`
- **Description**: @Given /^(its) default tax zone is (zone "([^"]+)")$/
/

### `thisChannelHasContactEmailSetAs`

- **Parameters**: `ChannelInterface $channel, $contactEmail = null`
- **Description**: @Given /^(this channel) has contact email set as "([^"]+)"$/
@Given /^(this channel) has no contact email set$/

@param mixed|null $contactEmail
/

### `onThisChannelShippingStepIsSkippedIfOnlyASingleShippingMethodIsAvailable`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given /^on (this channel) shipping step is skipped if only a single shipping method is available$/
/

### `onThisChannelAccountVerificationIsNotRequired`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given /^on (this channel) payment step is skipped if only a single payment method is available$/
/
public function onThisChannelPaymentStepIsSkippedIfOnlyASinglePaymentMethodIsAvailable(
ChannelInterface $channel,
): void {
$channel-&gt;setSkippingPaymentStepAllowed(true);

$this-&gt;channelManager-&gt;flush();
}

/**
@Given /^on (this channel) account verification is not required$/
/

### `channelHasMenuTaxon`

- **Parameters**: `ChannelInterface $channel, TaxonInterface $taxon`
- **Description**: @Given channel :channel billing data is :company, :street, :postcode :city, :country with :taxId tax ID
/
public function channelBillingDataIs(
ChannelInterface $channel,
string $company,
string $street,
string $postcode,
string $city,
CountryInterface $country,
string $taxId,
): void {
$shopBillingData = new ShopBillingData();
$shopBillingData-&gt;setCompany($company);
$shopBillingData-&gt;setStreet($street);
$shopBillingData-&gt;setPostcode($postcode);
$shopBillingData-&gt;setCity($city);
$shopBillingData-&gt;setCountryCode($country-&gt;getCode());
$shopBillingData-&gt;setTaxId($taxId);

$channel-&gt;setShopBillingData($shopBillingData);

$this-&gt;channelManager-&gt;flush();
}

/**
@Given channel :channel has menu taxon :taxon
@Given /^(this channel) has menu (taxon "[^"]+")$/
/

### `channelOperatesInCountry`

- **Parameters**: `ChannelInterface $channel, CountryInterface $country`
- **Description**: @Given /^(this channel) operates in the ("[^"]+" country)$/
/

### `channelDoesNotDefineOperatingCountries`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given /^(this channel) does not define operating countries$/
/

### `iChangeMyCurrentChannelTo`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @Given /^I changed (?:|back )my current (channel to "([^"]+)")$/

@When /^I change (?:|back )my current (channel to "([^"]+)")$/
@When customer view shop on :channel channel
@When I am in the :channel channel
/

### `itsRequiredAddressInTheCheckoutIs`

- **Parameters**: `string $type`
- **Description**: @Given /^its required address in the checkout is (billing|shipping)$/
/

### `theStoreAlsoOperatesInLocale`

- **Parameters**: `LocaleInterface $locale`
- **Description**: @var ChannelInterface $channel */
$channel = $this-&gt;sharedStorage-&gt;get('channel');
$channel-&gt;setShippingAddressInCheckoutRequired('shipping' === $type);

$this-&gt;channelManager-&gt;flush();
}

/**
@Given the store also operates in :locale locale
/

### `theStoreUsesTheTaxCalculationStrategy`

- **Parameters**: `string $taxCalculationStrategy`
- **Description**: @var ChannelInterface $channel */
$channel = $this-&gt;sharedStorage-&gt;get('channel');
$channel-&gt;addLocale($locale);

$this-&gt;channelManager-&gt;flush();
}

/**
@Given the store uses the :taxCalculationStrategy tax calculation strategy
/

### `changeChannelState`

- **Parameters**: `ChannelInterface $channel, bool $state`

