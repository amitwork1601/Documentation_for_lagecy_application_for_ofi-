# LoginContext.php

**Path**: `tests\Behat\Context\Api\Shop\LoginContext.php`

## Summary
The `LoginContext` class is a Behat context for testing shop customer authentication functionality in the Sylius e-commerce platform's API. It provides step definitions for testing various login scenarios, including logging in with email credentials, handling authentication tokens, and verifying login states through API requests. This context enables behavior-driven development (BDD) testing of the shop's authentication endpoints and user session management.

## Classes
- `LoginContext`

## Function Details

### `iAmAVisitor`

- **Description**: @Given there is the visitor
/

### `iLogInWithTheEmail`

- **Parameters**: `string $email`
- **Description**: @When I log in with the email :email
/

### `iLogInOnTheChannel`

- **Parameters**: `ChannelInterface $channel`
- **Description**: @When I log in on the :channel channel
@When I try to log in on the :channel channel
/

### `iWantToLogIn`

- **Description**: @When I want to log in
/

### `iWantToResetPassword`

- **Description**: @When I want to reset password
/

### `iResetPasswordForEmailInLocale`

- **Parameters**: `string $email, LocaleInterface $locale`
- **Description**: @When I reset password for email :email in :locale locale
/

### `iFollowLinkOnMyEmailToResetPassword`

- **Parameters**: `ShopUserInterface $user`
- **Description**: @When /^I follow link on (my) email to reset my password$/
/

### `iResetIt`

- **Description**: @When I reset it
@When I try to reset it
/

### `iSpecifyTheUsername`

- **Parameters**: `string $username`
- **Description**: @When I specify the username as :username
/

### `iSpecifyTheEmail`

- **Parameters**: `string $email = ''`
- **Description**: @When I specify customer email as :email
@When I do not specify the email
/

### `iSpecifyMyNewPassword`

- **Parameters**: `?string $password = null`
- **Description**: @When I specify my new password as :password
@When I do not specify my new password
/

### `iConfirmMyNewPassword`

- **Parameters**: `?string $password = null`
- **Description**: @When I confirm my new password as :password
@When I do not confirm my new password
/

### `iSpecifyThePasswordAs`

- **Parameters**: `string $password`
- **Description**: @When I specify the password as :password
/

### `iLogIn`

- **Description**: @When I log in
@When I try to log in
/

### `iLogInAsWithPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @When I log in as :email with :password password
/

### `iLogOut`

- **Description**: @When I log out
@When the customer logged out
/

### `iShouldBeLoggedIn`

- **Description**: @Then I should be logged in
/

### `iShouldNotBeLoggedIn`

- **Description**: @Then I should not be logged in
/

### `iShouldBeNotifiedAboutBadCredentials`

- **Description**: @Then I should be notified about bad credentials
/

### `iShouldBeNotifiedThatEmailWithResetInstructionWasSent`

- **Description**: @Then I should be notified that email with reset instruction has been sent
@Then I should be notified that my password has been successfully reset
/

### `iShouldBeAbleToLogInAsWithPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @Then I should be able to log in as :email with :password password
@Then the customer should be able to log in as :email with :password password
/

### `iShouldNotBeAbleToLogInAsWithPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @Then I should not be able to log in as :email with :password password
/

### `iShouldSeeWhoIAm`

- **Description**: @Then I should see who I am
/

### `iShouldNotBeAbleToChangeMyPasswordAgainWithTheSameToken`

- **Description**: @var CustomerInterface $customer */
$customer = $this-&gt;sharedStorage-&gt;get('customer');

Assert::same(
$this-&gt;responseChecker-&gt;getValue(
$this-&gt;shopAuthenticationTokenClient-&gt;getResponse(),
'customer',
),
$this-&gt;iriConverter-&gt;getIriFromResource($customer),
);
}

/**
@Then I should not be able to change my password again with the same token
/

