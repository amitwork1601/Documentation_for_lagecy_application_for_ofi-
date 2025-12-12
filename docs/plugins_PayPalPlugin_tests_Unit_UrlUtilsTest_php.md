# UrlUtilsTest.php

**Path**: `plugins\PayPalPlugin\tests\Unit\UrlUtilsTest.php`

## Summary
This is a PHPUnit test class for the `UrlUtils` utility class in the Sylius PayPal plugin. It provides test data sets through data provider methods to verify URL manipulation functionality, specifically testing how query parameters are correctly appended to various URL formats (with/without existing parameters, fragments, authentication credentials, etc.). The tests ensure the URL utility properly handles edge cases like existing query strings, URL fragments, user credentials, and different parameter encoding formats when building PayPal-related URLs.

## Classes
- `UrlUtilsTest`

## Function Details

### `testModeIgnore`

- **Parameters**: `string $url, string $queryString, string $expected`
- **Description**: @internal

@coversNothing
/
final class UrlUtilsTest extends TestCase
{
public function provideBaseUrls(): iterable
{
yield ['https://foo.com', '', 'https://foo.com'];
yield ['https://foo.com?', '', 'https://foo.com?'];
yield ['https://foo.com', 'foo', 'https://foo.com?foo'];
yield ['https://foo.com/', 'foo', 'https://foo.com/?foo'];
yield ['https://foo.com', 'foo=bar', 'https://foo.com?foo=bar'];
yield ['https://foo.com#aa', 'foo=bar', 'https://foo.com?foo=bar#aa'];
yield ['https://foo.com/', 'foo=bar', 'https://foo.com/?foo=bar'];
yield ['https://foo.com?', 'foo=bar', 'https://foo.com?foo=bar'];
yield ['https://foo.com?', 'foo=bar%20bar', 'https://foo.com?foo=bar%20bar'];
yield ['https://foo.com?', 'foo=bar+bar', 'https://foo.com?foo=bar+bar'];
yield ['https://foo.com/page', 'foo=bar', 'https://foo.com/page?foo=bar'];
yield ['https://foo.com/page/', 'foo=bar', 'https://foo.com/page/?foo=bar'];
yield ['https://user:pass@foo.com/page/', 'foo=bar', 'https://user:pass@foo.com/page/?foo=bar'];
yield ['https://user@foo.com/page/', 'foo=bar', 'https://user@foo.com/page/?foo=bar'];
yield ['https://user:@foo.com/page/', 'foo=bar', 'https://user:@foo.com/page/?foo=bar'];
yield ['https://foo.com/page/', 'foo=bar&amp;biz=2', 'https://foo.com/page/?foo=bar&amp;biz=2'];
}

public static function provideModeIgnoreCases(): iterable
{
yield from $this-&gt;provideBaseUrls();

yield ['https://foo.com?a=b', 'foo=bar%20bar', 'https://foo.com?a=b&amp;foo=bar%20bar'];
yield ['https://foo.com?a=b', 'foo=bar+bar', 'https://foo.com?a=b&amp;foo=bar+bar'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2'];
yield ['https://foo.com/page?aa=bb#link', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2#link'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;aa=2'];
yield ['https://foo.com/page?aa=b+b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=b+b&amp;foo=bar&amp;aa=2'];
yield ['https://foo.com/page?aa=b%20b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=b%20b&amp;foo=bar&amp;aa=2'];
}

public static function provideModeReplaceCases(): iterable
{
yield from $this-&gt;provideBaseUrls();

yield ['https://foo.com?a=b', 'foo=bar%20bar', 'https://foo.com?a=b&amp;foo=bar%20bar'];
yield ['https://foo.com?a=b', 'foo=bar+bar', 'https://foo.com?a=b&amp;foo=bar+bar'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2'];
yield ['https://foo.com/page?aa=bb#link', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2#link'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=2&amp;foo=bar'];
yield ['https://foo.com/page?aa=b+b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=2&amp;foo=bar'];
yield ['https://foo.com/page?aa=b%20b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=2&amp;foo=bar'];
yield ['https://foo.com/page?aa=b+b', 'foo=bar&amp;aa=2+2', 'https://foo.com/page?aa=2+2&amp;foo=bar'];
yield ['https://foo.com/page?aa=b%20b', 'foo=bar&amp;aa=2%202', 'https://foo.com/page?aa=2%202&amp;foo=bar'];
}

public static function provideModeSkipCases(): iterable
{
yield from $this-&gt;provideBaseUrls();

yield ['https://foo.com?a=b', 'foo=bar%20bar', 'https://foo.com?a=b&amp;foo=bar%20bar'];
yield ['https://foo.com?a=b', 'foo=bar+bar', 'https://foo.com?a=b&amp;foo=bar+bar'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2'];
yield ['https://foo.com/page?aa=bb#link', 'foo=bar&amp;biz=2', 'https://foo.com/page?aa=bb&amp;foo=bar&amp;biz=2#link'];
yield ['https://foo.com/page?aa=bb', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=bb&amp;foo=bar'];
yield ['https://foo.com/page?aa=b+b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=b+b&amp;foo=bar'];
yield ['https://foo.com/page?aa=b%20b', 'foo=bar&amp;aa=2', 'https://foo.com/page?aa=b%20b&amp;foo=bar'];
yield ['https://foo.com/page?aa=b+b', 'foo=bar&amp;cc=2+2', 'https://foo.com/page?aa=b+b&amp;foo=bar&amp;cc=2+2'];
yield ['https://foo.com/page?aa=b%20b', 'foo=bar&amp;cc=2%202', 'https://foo.com/page?aa=b%20b&amp;foo=bar&amp;cc=2%202'];
}

/**
@dataProvider provideModeIgnoreCases
/

### `testModeReplace`

- **Parameters**: `string $url, string $queryString, string $expected`
- **Description**: @dataProvider provideModeReplaceCases
/

### `testModeSkip`

- **Parameters**: `string $url, string $queryString, string $expected`
- **Description**: @dataProvider provideModeSkipCases
/

