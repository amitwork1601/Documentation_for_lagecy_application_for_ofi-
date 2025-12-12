# CustomerRepository.php

**Path**: `src\Repository\CustomerRepository.php`

## Summary
This repository extends Sylius's base CustomerRepository to provide channel-specific customer queries. Its main functionality is the `findByEmailAndChannel()` method, which retrieves a customer by email address within a specific sales channel context, eagerly loading related entities (user, channel, and default address) to optimize database queries in a multi-channel e-commerce system.

## Classes
- `CustomerRepository`

## Function Details

### `findByEmailAndChannel`

- **Parameters**: `string $email, Channel $channel`
- **Description**: @throws NonUniqueResultException
/

