# UserProvider.php

**Path**: `src\Provider\User\UserProvider.php`

## Summary
This class extends Sylius's user provider to handle OAuth-based user authentication with multi-channel support. It locates users by either email (looking up customers by email and channel) or username, ensuring the correct customer/user is retrieved based on the current channel context from the request. The provider serves as a bridge between OAuth authentication flows and Sylius's customer-user entity relationship within a multi-tenant e-commerce system.

## Classes
- `UserProvider`

## Function Details

### `findUser`

- **Parameters**: `string $uniqueIdentifier`
- **Description**: Loading and ad-hoc creation of a user by an OAuth sign-in provider account.
/
final class UserProvider extends AbstractUserProvider
{
public function __construct(
protected string $supportedUserClass,
protected UserRepositoryInterface $userRepository,
protected CanonicalizerInterface $canonicalizer,
private readonly CustomerRepository $customerRepository,
private readonly ChannelRepository $channelRepository,
private readonly RequestStack $requestStack,
) {
parent::__construct($supportedUserClass, $userRepository, $canonicalizer);
}

/** @throws \Doctrine\ORM\NonUniqueResultException */

