# CustomerContext.php

**Path**: `tests\Behat\Context\Api\Shop\CustomerContext.php`

## Summary
This Behat context class provides test step definitions for customer-related API operations in the Sylius e-commerce shop. It handles testing scenarios such as modifying customer profiles, changing passwords, and customer registration/login flows through API endpoints. The class serves as a testing bridge between human-readable Gherkin scenarios and actual API client calls for customer account management functionality.

## Classes
- `CustomerContext`

## Function Details

### `iWantToModifyMyProfile`

- **Description**: @When I want to modify my profile
/

### `iWantToChangeMyPassword`

- **Description**: @var ShopUserInterface $shopUser */
$shopUser = $this-&gt;sharedStorage-&gt;get('user');
$customer = $shopUser-&gt;getCustomer();

$this-&gt;client-&gt;buildUpdateRequest(Resources::CUSTOMERS, (string) $customer-&gt;getId());
}

/**
@When I want to change my password
/

### `iSpecifyTheFirstName`

- **Parameters**: `string $firstName = ''`
- **Description**: @var ShopUserInterface $shopUser */
$shopUser = $this-&gt;sharedStorage-&gt;get('user');
/** @var CustomerInterface $customer */
$customer = $shopUser-&gt;getCustomer();

Assert::isInstanceOf($this-&gt;client, ApiPlatformClient::class);
$this-&gt;client-&gt;buildCustomUpdateRequest(Resources::CUSTOMERS, (string) $customer-&gt;getId(), 'password');
}

/**
@When I specify the first name as :firstName
@When I remove the first name
/

### `iSpecifyTheLastName`

- **Parameters**: `string $lastName = ''`
- **Description**: @When I specify the last name as :lastName
@When I remove the last name
/

### `iSpecifyCustomerTheEmail`

- **Parameters**: `string $email = ''`
- **Description**: @When I specify the customer email as :email
@When I remove the customer email
/

### `iSaveMyChanges`

- **Description**: @When I (try to) save my changes
/

### `iSpecifyTheCurrentPasswordAs`

- **Parameters**: `string $password`
- **Description**: @When I specify the current password as :password
/

### `iSpecifyTheNewPasswordAs`

- **Parameters**: `string $password`
- **Description**: @When I specify the new password as :password
/

### `iSpecifyTheConfirmationPasswordAs`

- **Parameters**: `string $password`
- **Description**: @When I confirm this password as :password
/

### `iChangePasswordTo`

- **Parameters**: `string $oldPassword, string $newPassword`
- **Description**: @When I change password from :oldPassword to :newPassword
/

### `iSubscribeToTheNewsletter`

- **Description**: @When I subscribe to the newsletter
/

### `iShouldBeSubscribedToTheNewsletter`

- **Description**: @Then I should be subscribed to the newsletter
/

### `iTryToVerifyMyAccountUsingTheLinkFromEmail`

- **Parameters**: `ShopUserInterface $user`
- **Description**: @When /^(I) try to verify my account using the link from this email$/
/

### `iTryToVerifyUsing`

- **Parameters**: `string $token`
- **Description**: @When I (try to )verify using :token token
/

### `iResendVerificationEmail`

- **Description**: @When I resend the verification email
/

### `iUseVerificationLinkFromFirstEmailToVerify`

- **Description**: @var ShopUserInterface $user */
$user = $this-&gt;sharedStorage-&gt;get('user');

$this-&gt;resendVerificationEmail($user-&gt;getEmail());
}

/**
@When I use the verification link from the first email to verify
/

### `iRegisterWithEmailAndPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @When I register with email :email and password :password
/

### `iShouldBeNotifiedThatItHasBeenSuccessfullyEdited`

- **Description**: @Then I should be notified that it has been successfully edited
/

### `iShouldBeNotifiedThatTheVerificationEmailHasBeenSent`

- **Description**: @Then I should be notified that the verification email has been sent
/

### `myEmailShouldBe`

- **Parameters**: `string $email`
- **Description**: @Then my email should be :email
@Then my email should still be :email
/

### `myNameShouldBe`

- **Parameters**: `string $name`
- **Description**: @var ShopUserInterface $shopUser */
$shopUser = $this-&gt;sharedStorage-&gt;get('user');

$this-&gt;shopApiSecurityContext-&gt;iAmLoggedInAs($email);

$response = $this-&gt;client-&gt;show(Resources::CUSTOMERS, (string) $shopUser-&gt;getCustomer()-&gt;getId());

Assert::true($this-&gt;responseChecker-&gt;hasValue($response, 'email', $email));
}

/**
@Then my name should be :name
@Then my name should still be :name
/

### `iShouldBeNotifiedThatFirstNameIsRequired`

- **Description**: @var ShopUserInterface $shopUser */
$shopUser = $this-&gt;sharedStorage-&gt;get('user');

$response = $this-&gt;client-&gt;show(Resources::CUSTOMERS, (string) $shopUser-&gt;getCustomer()-&gt;getId());

Assert::true($this-&gt;responseChecker-&gt;hasValue($response, 'fullName', $name));
}

/**
@Then I should be notified that the first name is required
/

### `iShouldBeNotifiedThatLastNameIsRequired`

- **Description**: @Then I should be notified that the last name is required
/

### `iShouldBeNotifiedThatEmailIsRequired`

- **Description**: @Then I should be notified that the email is required
/

### `iShouldBeNotifiedThatTheEmailIsAlreadyUsed`

- **Description**: @Then I should be notified that the email is already used
/

### `iShouldBeNotifiedThatElementIsInvalid`

- **Description**: @Then I should be notified that the email is invalid
/

### `iShouldBeNotifiedThatTheVerificationTokenIsInvalid`

- **Description**: @Then I should be notified that the verification token is invalid
/

### `iBrowseMyOrders`

- **Description**: @When I browse my orders
/

### `iRegisterWithPreviouslyUsedEmailAndPassword`

- **Parameters**: `string $email, string $password`
- **Description**: @When I register with previously used :email email and :password password
/

### `iShouldSeeASingleOrderInTheList`

- **Description**: @Then I should see a single order in the list
/

### `thisOrderShouldHaveNumber`

- **Parameters**: `string $orderNumber`
- **Description**: @Then this order should have :orderNumber number
/

### `iShouldBeNotifiedThatTheVerificationWasSuccessful`

- **Description**: @Then I should be notified that the verification was successful
/

### `iShouldBeNotifiedThatItHasBeenSuccessfullyChanged`

- **Description**: @Then I should be notified that my password has been successfully changed
@Then I should be notified that new account has been successfully created
@Then I should be notified that my account has been created and the verification email has been sent
/

### `iShouldBeNotifiedThatProvidedPasswordIsDifferentThanTheCurrentOne`

- **Description**: @Then I should be notified that provided password is different than the current one
/

### `iShouldBeNotifiedThatTheEnteredPasswordsDoNotMatch`

- **Description**: @Then I should be notified that the entered passwords do not match
/

### `iShouldBeNotifiedThatTheElementShouldBe`

- **Parameters**: `string $elementName, string $validationMessage`
- **Description**: @Then /^I should be notified that the ([^"]+) should be ([^"]+)$/
/

### `myAccountShouldBeVerified`

- **Description**: @Then my account should be verified
/

### `myAccountShouldNotBeVerified`

- **Description**: @Then /^(?:my|his|her) account should not be verified$/
/

### `iShouldBeUnableToResendVerificationEmail`

- **Description**: @Then I should not be able to resend the verification email
/

### `isViolationWithMessageInResponse`

- **Parameters**: `Response $response, string $message`

### `verifyAccount`

- **Parameters**: `string $token`

### `registerAccount`

- **Parameters**: `?string $email = 'example@example.com', ?string $password = 'example'`

### `resendVerificationEmail`

- **Parameters**: `string $email`

### `getResponseWithAccountData`


