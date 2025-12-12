# AvailableCountriesProvider.php

**Path**: `plugins\PayPalPlugin\src\Provider\AvailableCountriesProvider.php`

## Summary
This class provides a list of available country codes for PayPal payment processing in the Sylius e-commerce platform. It retrieves countries either from the current channel's specific country restrictions (if configured) or falls back to all enabled countries in the system, returning them as an array of country code strings for PayPal integration purposes.

## Classes
- `AvailableCountriesProvider`

## Function Details

### `__construct`

- **Parameters**: `RepositoryInterface $countryRepository, ChannelContextInterface $channelContext`

### `provide`


### `convertToStringArray`

- **Parameters**: `array $countries`
- **Description**: @var ChannelInterface $channel */
$channel = $this-&gt;channelContext-&gt;getChannel();

$channelCountries = $channel-&gt;getCountries()-&gt;toArray();

if (\count($channelCountries)) {
return $this-&gt;convertToStringArray($channelCountries);
}

$availableCountries = $this-&gt;countryRepository-&gt;findBy(['enabled' =&gt; true]);

return $this-&gt;convertToStringArray($availableCountries);
}

/** @return string[] */

