# PickupPoint.php

**Path**: `src\Entity\PickupPoint\PickupPoint.php`

## Summary
The `PickupPoint` entity represents a physical location where customers can collect their orders, integrated with Sylius e-commerce platform. It manages geographical coordinates, operating hours, availability status, and associations with shipping methods through a join entity, while exposing this data through a GraphQL API with filtering capabilities for location-based searches and shipping method compatibility.

## Classes
- `PickupPoint`

## Function Details

### `getPickupPointShippingMethods`

- **Description**: @var Collection&lt;int, PickupPointHasShippingMethod&gt;&amp;iterable&lt;PickupPointHasShippingMethod&gt;
/
#[ORM\OneToMany(
mappedBy: 'pickupPoint',
targetEntity: PickupPointHasShippingMethod::class,
cascade: ['persist', 'remove'],
orphanRemoval: true
)]
protected Collection $pickupPointShippingMethods;

#[ORM\Column(type: Types::STRING, nullable: true)]
protected ?string $name = '';

#[ORM\Column(type: Types::STRING, name: 'token_value')]
protected string $tokenValue;

public function __construct()
{
$this-&gt;pickupPointShippingMethods = new ArrayCollection();
}

public function getId(): ?int
{
return $this-&gt;id;
}

public function getLocation(): Point
{
return $this-&gt;location;
}

public function setLocation(Point $location): self
{
$this-&gt;location = $location;

return $this;
}

public function getPhoto(): ?string
{
return $this-&gt;photo;
}

public function setPhoto(?string $photo): self
{
$this-&gt;photo = $photo;

return $this;
}

public function getOpenings(): ?array
{
return $this-&gt;openings;
}

public function setOpenings(?array $openings): self
{
$this-&gt;openings = $openings;

return $this;
}

public function isManualDisabled(): bool
{
return $this-&gt;isManualDisabled;
}

public function setIsManualDisabled(bool $isManualDisabled): self
{
$this-&gt;isManualDisabled = $isManualDisabled;

return $this;
}

public function getAddress(): ?Address
{
return $this-&gt;address;
}

public function setAddress(?Address $address): self
{
$this-&gt;address = $address;

return $this;
}

public function hasPickupPointShippingMethod(PickupPointHasShippingMethod $pickupPointShippingMethod): bool
{
return $this-&gt;pickupPointShippingMethods-&gt;contains($pickupPointShippingMethod);
}

public function addPickupPointShippingMethod(PickupPointHasShippingMethod $pickupPointShippingMethod): self
{
if (!$this-&gt;hasPickupPointShippingMethod($pickupPointShippingMethod)) {
$this-&gt;pickupPointShippingMethods-&gt;add($pickupPointShippingMethod);
$pickupPointShippingMethod-&gt;setPickupPoint($this);
}

return $this;
}

/**
@return Collection&lt;int, PickupPointHasShippingMethod&gt;
/

### `setPickupPointShippingMethods`

- **Parameters**: `array $pickupPointShippingMethods`

### `getPickupPointShippingMethod`

- **Parameters**: `ShippingMethod $shippingMethod`

### `getExternalReference`

- **Parameters**: `ShippingMethod $shippingMethod`

### `getExternalReferences`

- **Parameters**: `ShippingMethod $shippingMethod`

### `hasMondialRelayShippingMethodEnabled`


### `getEnabledPickupPointShippingMethodByReference`

- **Parameters**: `string $externalReference`

### `getName`


### `setName`

- **Parameters**: `?string $name`

### `getTokenValue`


### `setTokenValue`

- **Parameters**: `string $tokenValue`

### `getPickupPointShippingMethodAndReference`

- **Parameters**: `ShippingMethod $shippingMethod`

### `getPickupPointShippingMethodAndReferences`

- **Parameters**: `ShippingMethod $shippingMethod`

### `isAvailable`


### `isEnabled`


