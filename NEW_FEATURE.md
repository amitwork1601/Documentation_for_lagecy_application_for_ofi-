# New Feature: Auto-Generated Code Explanations

## What's New?

The script now **automatically extracts and documents** function/method details from your codebase, including:

✅ **Function parameters**  
✅ **Docstring/comment descriptions**  
✅ **Method signatures**

## How It Works

### Before (Old Version)
The script would only list function names:

```markdown
## Functions
- `login`
- `logout`
```

### After (New Version)
The script now provides detailed explanations:

```markdown
## Functions
- `login`
- `logout`

## Function Details

### `login($username, $password)`

**Description**: Logs the user in.

**Parameters**: `$username, $password`

### `logout()`

**Description**: Logs the user out and destroys the session.
```

## Supported Languages

### PHP
Extracts:
- Function names
- Parameters (e.g., `$username, $password`)
- PHPDoc comments

**Example Input:**
```php
/**
 * Logs the user in.
 */
public function login($username, $password) {
    // logic
}
```

**Generated Output:**
```markdown
### `login($username, $password)`

**Description**: Logs the user in.

**Parameters**: `$username, $password`
```

### JavaScript/TypeScript
Extracts:
- Function names (regular and arrow functions)
- Parameters
- JSDoc comments

**Example Input:**
```javascript
/**
 * Fetches user data from the API.
 */
function getUser(id) {
    return fetch(`/api/users/${id}`);
}

/**
 * Formats user name for display.
 */
const formatName = (user) => {
    return `${user.firstName} ${user.lastName}`;
}
```

**Generated Output:**
```markdown
### `getUser(id)`

**Description**: Fetches user data from the API.

**Parameters**: `id`

### `formatName(user)`

**Description**: Formats user name for display.

**Parameters**: `user`
```

## What Changed in the Code?

### 1. Enhanced Parsers
- **PHPParser**: Now extracts function parameters and docstrings
- **JSParser**: Now extracts parameters from both regular and arrow functions

### 2. New Data Structure
Parsers now return a `methods` dictionary with detailed information:

```python
{
    'functions': ['login', 'logout'],
    'methods': {
        'login': {
            'params': '$username, $password',
            'doc': 'Logs the user in.'
        },
        'logout': {
            'params': '',
            'doc': 'Logs the user out.'
        }
    }
}
```

### 3. Enhanced Markdown Output
The `MarkdownGenerator` now creates a "Function Details" section with:
- Function signature with parameters
- Description from docstrings
- Parameter list

## Benefits

### For Developers
- **Understand code faster** - See what each function does at a glance
- **Know parameters** - No need to open source files to check function signatures
- **Better onboarding** - New team members can understand the codebase quickly

### For Documentation
- **Automatic updates** - Re-run the script to update docs when code changes
- **Consistent format** - All functions documented in the same style
- **No manual work** - Extracts info directly from your existing code comments

## Example: Real-World Output

### Input File: `backend/api/user.js`
```javascript
/**
 * User API controller
 */

/**
 * Gets a user by ID.
 */
async function getUser(id) {
    return await User.findById(id);
}

/**
 * Updates user profile.
 */
const updateUser = (id, data) => {
    return User.update(id, data);
}
```

### Generated Documentation: `backend_api_user_js.md`
```markdown
# backend/api/user.js

## Summary
User API controller

## Functions
- `getUser`
- `updateUser`

## Function Details

### `getUser(id)`

**Description**: Gets a user by ID.

**Parameters**: `id`

### `updateUser(id, data)`

**Description**: Updates user profile.

**Parameters**: `id, data`
```

## How to Use

Just run the script as before:

```bash
python generate_docs.py
```

The enhanced documentation will be generated automatically!

## Notes

- **Docstrings are optional** - If a function has no docstring, only the signature is shown
- **Works with existing code** - No need to change your code style
- **Regex-based** - Fast and lightweight, no AST parsing required
- **Handles edge cases** - Works with public/private/protected methods, arrow functions, etc.

## Future Enhancements

Potential improvements:
- Extract return types
- Parse @param tags for detailed parameter descriptions
- Support for more languages (Python, Go, etc.)
- Extract class method relationships
