# ShippingContext.php

**Path**: `tests\Behat\Context\Setup\ShippingContext.php`

## Summary
This is a Behat context class for setting up shipping methods in test scenarios for the Sylius e-commerce platform. It provides test step definitions (Given/When/Then statements) to configure various shipping options including free shipping, flat-rate shipping, per-unit pricing, and conditional shipping rules based on order total or weight. The class acts as a test fixture helper that creates and configures shipping methods with associated zones, channels, tax categories, and business rules for integration testing.

## Classes
- `ShippingContext`

## Function Details

### `storeShipsEverythingForFree`

- **Parameters**: `ZoneInterface $zone`
- **Description**: @Given the store ships everything for free within the :zone zone
/

### `theStoreShipsEverywhereWith`

- **Parameters**: `string $shippingMethodName`
- **Description**: @Given the store ships everywhere for :shippingMethodName
@Given the store ships everywhere with :shippingMethodName
/

### `theStoreShipsEverywhereForFreeForAllChannels`

- **Parameters**: `array $channels`
- **Description**: @var ZoneInterface $zone */
foreach ($this-&gt;zoneRepository-&gt;findBy(['scope' =&gt; [CoreScope::SHIPPING, Scope::ALL]]) as $zone) {
$this-&gt;saveShippingMethod($this-&gt;shippingMethodExampleFactory-&gt;create([
'name' =&gt; ucfirst($shippingMethodName),
'code' =&gt; strtoupper($shippingMethodName) . '-' . $zone-&gt;getCode(),
'enabled' =&gt; true,
'zone' =&gt; $zone,
'calculator' =&gt; [
'type' =&gt; DefaultCalculators::FLAT_RATE,
'configuration' =&gt; $this-&gt;getConfigurationByChannels([$this-&gt;sharedStorage-&gt;get('channel')]),
],
]));
}
}

/**
@Given /^the store ships everywhere for free for (all channels)$/
/

### `theStoreAllowsShippingMethodWithName`

- **Parameters**: `string $name`
- **Description**: @Given the store (also )allows shipping with :name
/

### `theStoreAllowsShippingMethodWithNameAndCode`

- **Parameters**: `string $name, string $code`
- **Description**: @Given the store (also )allows shipping with :name identified by :code
/

### `theStoreAllowsShippingMethodWithNameAndPosition`

- **Parameters**: `string $name, int $position`
- **Description**: @Given the store (also )allows shipping with :name at position :position
/

### `theStoreAllowsShippingMethodWithNameAndPositionAndFee`

- **Parameters**: `string $name, int $position, int $fee`
- **Description**: @Given /^the store(?:| also) allows shipping with "([^"]+)" at position (\d+) with ("[^"]+") fee$/
/

### `theStoreAllowsShippingWithAnd`

- **Parameters**: `string ...$names`
- **Description**: @Given /^(this shipping method) is named "([^"]+)" in the ("[^"]+" locale)$/
/
public function thisShippingMethodIsNamedInLocale(
ShippingMethodInterface $shippingMethod,
string $name,
string $locale,
): void {
$translations = $shippingMethod-&gt;getTranslations();
/** @var ShippingMethodTranslationInterface $translation */
foreach ($translations as $translation) {
if ($translation-&gt;getLocale() === $locale) {
$translation-&gt;setName($name);

return;
}
}
}

/**
@Given the store allows shipping with :firstName and :secondName
@Given the store allows shipping with :firstName, :secondName and :thirdName
/

### `storeHasShippingMethodWithFeeAndZone`

- **Parameters**: `string $shippingMethodName, int $fee, ZoneInterface $zone`
- **Description**: @Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee within the ("[^"]+" zone)$/
@Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee for the (rest of the world)$/
/

### `storeHasShippingMethodWithFee`

- **Parameters**: `string $shippingMethodName, int $fee`
- **Description**: @Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee$/
/

### `storeHasDisabledShippingMethodWithFee`

- **Parameters**: `string $shippingMethodName, int $fee`
- **Description**: @Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee per shipment for ("[^"]+" channel) and ("[^"]+") for ("[^"]+" channel)$/
/
public function storeHasShippingMethodWithFeePerShipmentForChannels(
string $shippingMethodName,
int $firstFee,
ChannelInterface $firstChannel,
int $secondFee,
ChannelInterface $secondChannel,
): void {
$configuration = [];
$configuration[$firstChannel-&gt;getCode()] = ['amount' =&gt; $firstFee];
$configuration[$secondChannel-&gt;getCode()] = ['amount' =&gt; $secondFee];

$this-&gt;saveShippingMethod($this-&gt;shippingMethodExampleFactory-&gt;create([
'name' =&gt; $shippingMethodName,
'enabled' =&gt; true,
'zone' =&gt; $this-&gt;getShippingZone(),
'calculator' =&gt; [
'type' =&gt; DefaultCalculators::FLAT_RATE,
'configuration' =&gt; $configuration,
],
'channels' =&gt; [$firstChannel, $secondChannel],
]));
}

/**
@Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee per shipment for ("[^"]+" channel)$/
/
public function storeHasShippingMethodWithFeePerShipmentForChannel(
string $shippingMethodName,
int $fee,
ChannelInterface $channel,
): void {
/** @var string $channelCode */
$channelCode = $channel-&gt;getCode();
$configuration = [$channelCode =&gt; ['amount' =&gt; $fee]];

$this-&gt;saveShippingMethod($this-&gt;shippingMethodExampleFactory-&gt;create([
'name' =&gt; $shippingMethodName,
'enabled' =&gt; true,
'zone' =&gt; $this-&gt;getShippingZone(),
'calculator' =&gt; [
'type' =&gt; DefaultCalculators::FLAT_RATE,
'configuration' =&gt; $configuration,
],
'channels' =&gt; [$channel],
]));
}

/**
@Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee per unit for ("[^"]+" channel)$/
@Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee per unit for ("[^"]+" channel) and ("[^"]+") for ("[^"]+" channel)$/
/
public function storeHasShippingMethodWithFeePerUnitForChannels(
string $shippingMethodName,
int $firstFee,
ChannelInterface $firstChannel,
?int $secondFee = null,
?ChannelInterface $secondChannel = null,
): void {
$configuration = [];
$channels = [];

$configuration[$firstChannel-&gt;getCode()] = ['amount' =&gt; $firstFee];
$channels[] = $firstChannel;

if (null !== $secondFee) {
$configuration[$secondChannel-&gt;getCode()] = ['amount' =&gt; $secondFee];
$channels[] = $secondChannel;
}

$this-&gt;saveShippingMethod($this-&gt;shippingMethodExampleFactory-&gt;create([
'name' =&gt; $shippingMethodName,
'enabled' =&gt; true,
'zone' =&gt; $this-&gt;getShippingZone(),
'calculator' =&gt; [
'type' =&gt; DefaultCalculators::PER_UNIT_RATE,
'configuration' =&gt; $configuration,
],
'channels' =&gt; $channels,
]));
}

/**
@Given /^the store has disabled "([^"]+)" shipping method with ("[^"]+") fee$/
/

### `theStoreHasArchivalShippingMethodWithFee`

- **Parameters**: `string $shippingMethodName, int $fee`
- **Description**: @Given /^the store has an archival "([^"]+)" shipping method with ("[^"]+") fee$/
/

### `theStoreHasShippingMethodWithFeePerUnit`

- **Parameters**: `string $shippingMethodName, int $fee`
- **Description**: @Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee per unit$/
/

### `storeHasShippingMethodWithFeeNotAssignedToAnyChannel`

- **Parameters**: `string $shippingMethodName, int $fee`
- **Description**: @Given /^the store has "([^"]+)" shipping method with ("[^"]+") fee not assigned to any channel$/
/

### `theShippingMethodIsEnabled`

- **Parameters**: `ShippingMethodInterface $shippingMethod`
- **Description**: @Given /^(shipping method "[^"]+") belongs to ("[^"]+" tax category)$/
/
public function shippingMethodBelongsToTaxCategory(
ShippingMethodInterface $shippingMethod,
TaxCategoryInterface $taxCategory,
): void {
$shippingMethod-&gt;setTaxCategory($taxCategory);
$this-&gt;shippingMethodManager-&gt;flush();
}

/**
@Given the shipping method :shippingMethod is enabled
/

### `theShippingMethodIsDisabled`

- **Parameters**: `ShippingMethodInterface $shippingMethod`
- **Description**: @Given the shipping method :shippingMethod is disabled
/

### `theShippingMethodIsArchival`

- **Parameters**: `ShippingMethodInterface $shippingMethod`
- **Description**: @Given /^(this shipping method) requires at least one unit matches to ("([^"]+)" shipping category)$/
/
public function thisShippingMethodRequiresAtLeastOneUnitMatchToShippingCategory(
ShippingMethodInterface $shippingMethod,
ShippingCategoryInterface $shippingCategory,
): void {
$shippingMethod-&gt;setCategory($shippingCategory);
$shippingMethod-&gt;setCategoryRequirement(ShippingMethodInterface::CATEGORY_REQUIREMENT_MATCH_ANY);
$this-&gt;shippingMethodManager-&gt;flush();
}

/**
@Given /^(this shipping method) requires that all units match to ("([^"]+)" shipping category)$/
/
public function thisShippingMethodRequiresThatAllUnitsMatchToShippingCategory(
ShippingMethodInterface $shippingMethod,
ShippingCategoryInterface $shippingCategory,
) {
$shippingMethod-&gt;setCategory($shippingCategory);
$shippingMethod-&gt;setCategoryRequirement(ShippingMethodInterface::CATEGORY_REQUIREMENT_MATCH_ALL);
$this-&gt;shippingMethodManager-&gt;flush();
}

/**
@Given /^(this shipping method) requires that no units match to ("([^"]+)" shipping category)$/
/
public function thisShippingMethodRequiresThatNoUnitsMatchToShippingCategory(
ShippingMethodInterface $shippingMethod,
ShippingCategoryInterface $shippingCategory,
): void {
$shippingMethod-&gt;setCategory($shippingCategory);
$shippingMethod-&gt;setCategoryRequirement(ShippingMethodInterface::CATEGORY_REQUIREMENT_MATCH_NONE);
$this-&gt;shippingMethodManager-&gt;flush();
}

/**
@Given /^the (shipping method "[^"]+") is archival$/
/

### `theShippingFeeForShippingMethodHasBeenChangedTo`

- **Parameters**: `ShippingMethodInterface $shippingMethod, $fee`
- **Description**: @Given /^the shipping fee for ("[^"]+" shipping method) has been changed to ("[^"]+")$/
/

### `thisShippingMethodHasBeenDisabled`

- **Parameters**: `ShippingMethodInterface $shippingMethod, ?ChannelInterface $channel = null`
- **Description**: @Given /^(this shipping method) is only available for orders over or equal to ("[^"]+")$/
/
public function thisShippingMethodIsOnlyAvailableForOrdersOverOrEqualTo(
ShippingMethodInterface $shippingMethod,
int $amount,
): void {
$rule = $this-&gt;createShippingMethodRule(
OrderTotalGreaterThanOrEqualRuleChecker::TYPE,
$this-&gt;getConfigurationByChannels([$this-&gt;sharedStorage-&gt;get('channel')], $amount),
);

$this-&gt;addRuleToShippingMethod($rule, $shippingMethod);
}

/**
@Given /^(this shipping method) is only available for orders under or equal to ("[^"]+")$/
/
public function thisShippingMethodIsOnlyAvailableForOrdersUnderOrEqualTo(
ShippingMethodInterface $shippingMethod,
int $amount,
): void {
$rule = $this-&gt;createShippingMethodRule(
OrderTotalLessThanOrEqualRuleChecker::TYPE,
$this-&gt;getConfigurationByChannels([$this-&gt;sharedStorage-&gt;get('channel')], $amount),
);

$this-&gt;addRuleToShippingMethod($rule, $shippingMethod);
}

/**
@Given /^(this shipping method) is only available for orders with a total weight greater or equal to (\d+\.\d+)$/
/
public function thisShippingMethodIsOnlyAvailableForOrdersWithATotalWeightGreaterOrEqualTo(
ShippingMethodInterface $shippingMethod,
float $weight,
): void {
$rule = $this-&gt;createShippingMethodRule(TotalWeightGreaterThanOrEqualRuleChecker::TYPE, [
'weight' =&gt; $weight,
]);

$this-&gt;addRuleToShippingMethod($rule, $shippingMethod);
}

/**
@Given /^(this shipping method) is only available for orders with a total weight less or equal to (\d+\.\d+)$/
/
public function thisShippingMethodIsOnlyAvailableForOrdersWithATotalWeightLessOrEqualTo(
ShippingMethodInterface $shippingMethod,
float $weight,
): void {
$rule = $this-&gt;createShippingMethodRule(TotalWeightLessThanOrEqualRuleChecker::TYPE, [
'weight' =&gt; $weight,
]);

$this-&gt;addRuleToShippingMethod($rule, $shippingMethod);
}

/**
@Given /^(this shipping method) has been disabled$/
@Given /^(this shipping method) has been disabled for ("[^"]+" channel)$/
/

### `getConfigurationByChannels`

- **Parameters**: `array $channels, int $amount = 0`

### `saveShippingMethod`

- **Parameters**: `ShippingMethodInterface $shippingMethod`

### `getShippingZone`


### `addRuleToShippingMethod`

- **Parameters**: `ShippingMethodRuleInterface $rule, ShippingMethodInterface $shippingMethod`

### `createShippingMethodRule`

- **Parameters**: `string $type, array $configuration`

