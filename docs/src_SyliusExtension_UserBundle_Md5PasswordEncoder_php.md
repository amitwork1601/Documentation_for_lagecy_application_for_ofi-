# Md5PasswordEncoder.php

**Path**: `src\SyliusExtension\UserBundle\Md5PasswordEncoder.php`

## Summary
This class implements a custom MD5-based password hasher for Sylius user authentication, likely to maintain backward compatibility with a legacy system that used MD5 hashing with a salt. It implements Symfony's `PasswordHasherInterface` to hash passwords by prepending a salt and applying MD5, and can verify passwords against existing MD5 hashes. The `needsRehash()` method returns false, indicating passwords won't be automatically upgraded to a more secure hashing algorithm.

## Classes
- `Md5PasswordEncoder`

## Function Details

### `__construct`

- **Parameters**: `private string $salt`

### `hash`

- **Parameters**: `string $plainPassword`

### `verify`

- **Parameters**: `string $hashedPassword, string $plainPassword`

### `needsRehash`

- **Parameters**: `string $hashedPassword`

### `encodePassword`

- **Parameters**: `$raw`

### `mergePasswordAndSalt`

- **Parameters**: `$password, $salt`

### `isPasswordValid`

- **Parameters**: `$encoded, $raw`

