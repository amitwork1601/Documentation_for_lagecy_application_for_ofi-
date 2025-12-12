# Animal.php

**Path**: `src\Entity\Animal\Animal.php`

## Summary
This is a Doctrine ORM entity class representing an Animal resource in what appears to be a veterinary or pet management system built with Sylius framework. The entity is exposed through API Platform with GraphQL support, providing searchable and filterable animal records that can be queried by customer information, animal type, gender, and creation date. The Animal entity maintains relationships with customers, feeds, and uses timestampable behavior for tracking record creation/updates, serving as the core data model for managing animal records in the application.

## Classes
- `Animal`

## Function Details

### `__construct`


### `getId`


### `getCode`


### `setCode`

- **Parameters**: `?string $code`

### `getCustomer`


### `setCustomer`

- **Parameters**: `?Customer $customer`

### `getType`


### `setType`

- **Parameters**: `?AnimalType $type`

### `getGender`


### `setGender`

- **Parameters**: `?AnimalGender $gender`

### `getBreed`


### `setBreed`

- **Parameters**: `?AnimalBreed $breed`

### `isCrossbreed`


### `setCrossbreed`

- **Parameters**: `bool $crossbreed`

### `getCondition`


### `setCondition`

- **Parameters**: `?AnimalCondition $condition`

### `getActivity`


### `setActivity`

- **Parameters**: `?AnimalActivity $activity`

### `getFeature`


### `getFeatureName`


### `setFeature`

- **Parameters**: `?AnimalFeature $feature`

### `getDeletedReason`


### `setDeletedReason`

- **Parameters**: `?AnimalDeletedReason $deletedReason`

### `getName`


### `setName`

- **Parameters**: `?string $name`

### `isSterilized`


### `setSterilized`

- **Parameters**: `?bool $sterilized`

### `getBirthday`


### `setBirthday`

- **Parameters**: `?\DateTimeInterface $birthday`

### `getKibbleBrand`


### `setKibbleBrand`

- **Parameters**: `?AnimalKibbleBrand $kibbleBrand`

### `getOldKibbleBrand`


### `setOldKibbleBrand`

- **Parameters**: `?AnimalKibbleBrand $oldKibbleBrand`

### `getWeight`


### `setWeight`

- **Parameters**: `?float $weight`

### `getDeletedAt`


### `setDeletedAt`

- **Parameters**: `?\DateTime $deletedAt`

### `addFeed`

- **Parameters**: `AnimalFeed $feed`

### `hasFeed`

- **Parameters**: `AnimalFeed $feed`

### `removeFeed`

- **Parameters**: `AnimalFeed $feed`

### `getFeeds`


### `getFeedsName`


### `getBirthdayDateInterval`


### `getBirthdayDeletedDateInterval`


### `calculateAge`


### `getAge`


### `getPhoto`


### `setPhoto`

- **Parameters**: `?AnimalPhoto $photo`

