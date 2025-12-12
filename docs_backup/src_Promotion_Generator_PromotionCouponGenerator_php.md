# PromotionCouponGenerator.php

**Path**: `src\Promotion\Generator\PromotionCouponGenerator.php`

## Summary
This class generates multiple unique promotion coupon codes for a given promotion based on specified instructions. It creates coupons with configurable properties (code length, prefix/suffix, usage limits, expiration dates) and ensures each generated code is unique before persisting them to the database through Doctrine's ObjectManager.

## Classes
- `PromotionCouponGenerator`

## Function Details

### `assertGenerationIsPossible`

- **Parameters**: `ReadablePromotionCouponGeneratorInstructionInterface $instruction`
- **Description**: @var PromotionCouponInterface $coupon */
$coupon = $this-&gt;couponFactory-&gt;createNew();
$coupon-&gt;setPromotion($promotion);
$coupon-&gt;setCode($code);
$coupon-&gt;setUsageLimit($instruction-&gt;getUsageLimit());
$coupon-&gt;setExpiresAt($instruction-&gt;getExpiresAt());

if ($instruction instanceof PromotionCouponGeneratorInstruction &amp;&amp; $coupon instanceof PromotionCoupon) {
$coupon-&gt;setPerCustomerUsageLimit($instruction-&gt;getPerCustomerUsageLimit());
$coupon-&gt;setReusableFromCancelledOrders($instruction-&gt;isReusableFromCancelledOrders());
}

$generatedCoupons[$code] = $coupon;

$this-&gt;objectManager-&gt;persist($coupon);
}

$this-&gt;objectManager-&gt;flush();

return $generatedCoupons;
}

private function generateUniqueCode(
int $codeLength,
array $generatedCoupons,
?string $prefix,
?string $suffix,
): string {
Assert::nullOrRange($codeLength, 1, 40, 'Invalid %d code length should be between %d and %d');

do {
$hash = bin2hex(random_bytes(20));
$code = $prefix . strtoupper(substr($hash, 0, $codeLength)) . $suffix;
} while ($this-&gt;isUsedCode($code, $generatedCoupons));

return $code;
}

private function isUsedCode(string $code, array $generatedCoupons): bool
{
if (isset($generatedCoupons[$code])) {
return true;
}

return null !== $this-&gt;couponRepository-&gt;findOneBy(['code' =&gt; $code]);
}

/**
@throws FailedGenerationException
/

