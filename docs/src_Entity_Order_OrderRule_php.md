# OrderRule.php

**Path**: `src\Entity\Order\OrderRule.php`

## Summary
The `OrderRule` entity represents business rules that can be applied to orders in an e-commerce system built on Sylius framework. It provides a translatable, multi-channel rule system with GraphQL API support, allowing administrators to define named rules with descriptions that can be enabled/disabled and filtered. The entity integrates with ApiPlatform for API exposure and uses Doctrine ORM for persistence, serving as a foundation for implementing order-level business logic and validation rules across different sales channels.

## Classes
- `OrderRule`

## Function Details

### `getConditions`

- **Description**: @var Collection&lt;int, ChannelInterface&gt;&amp;iterable&lt;ChannelInterface&gt;
/
#[ORM\ManyToMany(targetEntity: ChannelInterface::class)]
#[ORM\JoinTable(name: 'sylius_order_rule_channels')]
#[ORM\JoinColumn(name: 'order_rule_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
#[ORM\InverseJoinColumn(name: 'channel_id', referencedColumnName: 'id', nullable: false, onDelete: 'CASCADE')]
private Collection $channels;

#[ORM\Column(type: Types::BOOLEAN, name: 'is_enabled')]
private bool $enabled = true;

/**
@var Collection&lt;int, OrderRuleCondition&gt;&amp;iterable&lt;OrderRuleCondition&gt;
/
#[ORM\OneToMany(targetEntity: OrderRuleCondition::class, mappedBy: 'orderRule', orphanRemoval: true, cascade: ['all'])]
#[Assert\Valid(groups: ['sylius'])]
private Collection $conditions;

public function __construct()
{
$this-&gt;channels = new ArrayCollection();
$this-&gt;conditions = new ArrayCollection();
$this-&gt;initializeTranslationsCollection();
}

public function getId(): ?int
{
return $this-&gt;id;
}

public function getName(): string
{
return $this-&gt;name;
}

public function setName(string $name): self
{
$this-&gt;name = $name;

return $this;
}

public function getDescription(): ?string
{
return $this-&gt;description;
}

public function setDescription(?string $description): self
{
$this-&gt;description = $description;

return $this;
}

public function getChannels(): Collection
{
return $this-&gt;channels;
}

public function addChannel(ChannelInterface $channel): self
{
if (!$this-&gt;channels-&gt;contains($channel)) {
$this-&gt;channels[] = $channel;
}

return $this;
}

public function removeChannel(ChannelInterface $channel): self
{
$this-&gt;channels-&gt;removeElement($channel);

return $this;
}

public function isEnabled(): bool
{
return $this-&gt;enabled;
}

public function setEnabled(bool $enabled): self
{
$this-&gt;enabled = $enabled;

return $this;
}

public function enable(): self
{
$this-&gt;enabled = true;

return $this;
}

public function disable(): self
{
$this-&gt;enabled = false;

return $this;
}

/**
@return Collection&lt;int, OrderRuleCondition&gt;
/

### `addCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `removeCondition`

- **Parameters**: `OrderRuleCondition $condition`

### `setErrorMessage`

- **Parameters**: `?string $errorMessage`

### `getErrorMessage`


### `createTranslation`


