# UserContext.php

**Path**: `tests\Behat\Context\Setup\UserContext.php`

## Summary
This is a Behat test context class for setting up user-related test scenarios in the Sylius e-commerce platform. It provides step definitions to create and configure shop users with specified credentials (email/password) for testing purposes, utilizing factories and repositories to persist test user data and storing references in shared storage for use across test scenarios.

## Classes
- `UserContext`

## Function Details

### `thereIsUserIdentifiedBy`

- **Parameters**: `$email, $password = 'sylius'`
- **Description**: @Given there is a user :email identified by :password
@Given there was account of :email with password :password
@Given there is a user :email
/

### `theCustomerCreatedAccountWithPassword`

- **Parameters**: `string $email, string $password = 'sylius'`
- **Description**: @Given I registered with previously used :email email and :password password
@Given I have already registered :email account
/

### `accountWasDeleted`

- **Parameters**: `$email`
- **Description**: @var ShopUserInterface $user */
$user = $this-&gt;userFactory-&gt;create(['email' =&gt; $email, 'password' =&gt; $password, 'enabled' =&gt; true]);

$user-&gt;setCustomer($this-&gt;sharedStorage-&gt;get('customer'));
$this-&gt;sharedStorage-&gt;set('user', $user);

$this-&gt;userRepository-&gt;add($user);
}

/**
@Given the account of :email was deleted
@Given my account :email was deleted
/

### `hisAccountWasDeleted`

- **Description**: @var ShopUserInterface $user */
$user = $this-&gt;userRepository-&gt;findOneByEmail($email);

$this-&gt;sharedStorage-&gt;set('customer', $user-&gt;getCustomer());

$this-&gt;userRepository-&gt;remove($user);
}

/**
@Given its account was deleted
/

### `accountIsNotVerified`

- **Parameters**: `UserInterface $user`
- **Description**: @Given /^(this user) is not verified$/
@Given /^(I) have not verified my account (?:yet)$/
/

### `iHaveReceivedVerificationEmail`

- **Parameters**: `UserInterface $user`
- **Description**: @Given /^(?:(I) have|(this user) has) already received a verification email$/
/

### `aVerificationEmailHasBeenSentTo`

- **Parameters**: `$email`
- **Description**: @Given a verification email has already been sent to :email
/

### `iHaveAlreadyVerifiedMyAccount`

- **Parameters**: `UserInterface $user`
- **Description**: @Given /^(I) have already verified my account$/
/

### `iHaveReceivedResettingPasswordEmail`

- **Parameters**: `UserInterface $user`
- **Description**: @Given /^(?:(I) have|(this user) has) already received a resetting password email$/
/

### `prepareUserVerification`

- **Parameters**: `UserInterface $user`

### `prepareUserPasswordResetToken`

- **Parameters**: `UserInterface $user`

### `iveChangedMyPasswordFromTo`

- **Parameters**: `UserInterface $user, string $currentPassword, string $newPassword`
- **Description**: @Given /^(I)'ve changed my password from "([^"]+)" to "([^"]+)"$/
/

