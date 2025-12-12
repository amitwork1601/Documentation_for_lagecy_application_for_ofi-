# Code Explanation - generate_docs.py

This document explains all the classes and methods used in the documentation generator script.

---

## Overview

The script is organized into several classes, each with a specific responsibility:

1. **ConfigLoader** - Loads YAML configuration
2. **RepoManager** - Handles Git operations
3. **ParserUtils** - Utility functions for parsing
4. **Language Parsers** - Extract info from different file types
5. **MarkdownGenerator** - Creates markdown documentation
6. **main()** - Orchestrates the entire process

---

## Class: ConfigLoader

**Purpose**: Loads and parses the YAML configuration file.

### Methods:

#### `load(config_path)` - Static Method
**What it does**: Reads the `config.yaml` file and converts it to a Python dictionary.

**Parameters**:
- `config_path` (string): Path to the config file

**Returns**: Dictionary with configuration settings

**Example**:
```python
config = ConfigLoader.load('config.yaml')
# Returns: {'repo_url': '...', 'output_dir': './docs', ...}
```

---

## Class: RepoManager

**Purpose**: Manages Git repository operations (clone/pull).

### Constructor: `__init__(repo_url, local_path, token=None)`
**What it does**: Initializes the repository manager with connection details.

**Parameters**:
- `repo_url` (string): GitHub repository URL
- `local_path` (string): Where to clone/store the repo locally
- `token` (string, optional): GitHub access token for private repos

### Methods:

#### `setup()`
**What it does**: 
- Checks if the repo already exists locally
- If yes: runs `git pull` to update it
- If no: runs `git clone` to download it
- Inserts the GitHub token into the URL for authentication

**How it works**:
1. Checks if `local_path` directory exists
2. If exists → Update with `git pull`
3. If not exists → Clone with `git clone`
4. If token provided → Modifies URL to `https://TOKEN@github.com/...`

---

## Class: ParserUtils

**Purpose**: Provides utility functions for extracting documentation from code.

### Methods:

#### `extract_docstring(content)` - Static Method
**What it does**: Finds and extracts documentation comments from code.

**Looks for**:
- JavaScript/PHP style: `/** ... */`
- Python style: `"""..."""`

**Returns**: Cleaned comment text

**Example**:
```python
content = "/** This is a summary */\nfunction foo() {}"
summary = ParserUtils.extract_docstring(content)
# Returns: "This is a summary"
```

#### `clean_comment(comment)` - Static Method
**What it does**: Removes extra characters from comments (like `*` and whitespace).

**Parameters**:
- `comment` (string): Raw comment text

**Returns**: Cleaned, formatted text

---

## Class: PHPParser

**Purpose**: Extracts information from PHP files.

### Methods:

#### `parse(content)`
**What it does**: Analyzes PHP code and extracts:
- File-level summary (from docblocks)
- Class names
- Function names

**How it works**:
1. Calls `ParserUtils.extract_docstring()` for summary
2. Uses regex to find `class ClassName`
3. Uses regex to find `function functionName(`

**Returns**: Dictionary with:
```python
{
    'summary': 'File description',
    'classes': ['AuthController', 'UserController'],
    'functions': ['login', 'logout']
}
```

---

## Class: JSParser

**Purpose**: Extracts information from JavaScript/TypeScript files.

### Methods:

#### `parse(content)`
**What it does**: Analyzes JS/TS code and extracts:
- File-level summary
- Class names
- Function names (regular and arrow functions)
- Strapi API routes (if present)

**How it works**:
1. Extracts docstring for summary
2. Finds `class ClassName`
3. Finds `function name()` and `const name = ()`
4. Looks for Strapi route patterns: `method: 'GET', path: '/api/users'`

**Returns**: Dictionary with:
```python
{
    'summary': 'Utility functions',
    'classes': ['UserService'],
    'functions': ['getUser', 'updateUser'],
    'routes': ['GET /api/users', 'POST /api/users']
}
```

---

## Class: VueParser

**Purpose**: Extracts information from Vue.js component files.

### Methods:

#### `parse(content)`
**What it does**: Analyzes Vue files and extracts:
- Component summary (from `<script>` section)
- Props
- Methods

**How it works**:
1. Finds the `<script>` section using regex
2. Extracts docstring from script content
3. Finds `props: { ... }` and extracts property names
4. Finds `methods: { ... }` and extracts method names

**Returns**: Dictionary with:
```python
{
    'summary': 'Button component',
    'props': ['label', 'disabled'],
    'methods': ['handleClick']
}
```

---

## Class: GenericParser

**Purpose**: Extracts basic information from files with hash-style comments (Shell, Dockerfile, Twig).

### Methods:

#### `parse(content)`
**What it does**: Looks for the first line starting with `#` and uses it as the summary.

**Example**:
```bash
# Deployment script for production
echo "Deploying..."
```
Returns: `{'summary': 'Deployment script for production'}`

---

## Class: MDXParser

**Purpose**: Extracts information from MDX (Markdown + JSX) files.

### Methods:

#### `parse(content)`
**What it does**: Extracts documentation from MDX files by:
1. Looking for frontmatter (YAML at the top between `---`)
2. Extracting the `title:` field
3. If no frontmatter, uses the first `#` header

**Example**:
```mdx
---
title: Getting Started Guide
---
# Welcome
```
Returns: `{'summary': '**Title**: Getting Started Guide'}`

---

## Class: GherkinParser

**Purpose**: Extracts information from Gherkin/BDD feature files.

### Methods:

#### `parse(content)`
**What it does**: Extracts:
- Feature name (from `Feature:` line)
- All scenario names (from `Scenario:` lines)

**Example**:
```gherkin
Feature: User Authentication
  Scenario: Successful login
  Scenario: Failed login
```
Returns:
```python
{
    'summary': 'User Authentication',
    'scenarios': ['Successful login', 'Failed login']
}
```

---

## Class: MarkdownGenerator

**Purpose**: Generates markdown documentation files and the table of contents.

### Constructor: `__init__(output_dir)`
**What it does**: Initializes the generator with an output directory and creates an empty tree structure.

### Methods:

#### `add_to_tree(path_parts, link)`
**What it does**: Builds a nested dictionary representing the directory structure.

**Parameters**:
- `path_parts` (list): e.g., `['backend', 'api', 'user.js']`
- `link` (string): Markdown link to the file

**Example**:
```python
add_to_tree(['backend', 'api', 'user.js'], '[user.js](backend_api_user_js.md)')
# Creates: tree['backend']['api']['user.js'] = '[user.js](...)'
```

#### `generate_summary_lines(tree, level=0)`
**What it does**: Recursively converts the tree structure into markdown list format.

**Parameters**:
- `tree` (dict): Nested directory structure
- `level` (int): Current indentation level

**Returns**: List of markdown lines with proper indentation

**Example output**:
```markdown
- backend
  - api
    - [user.js](backend_api_user_js.md)
```

#### `generate(file_path, info, root_dir)`
**What it does**: Creates a markdown file for a single source file.

**Process**:
1. Calculates relative path from root
2. Creates a safe filename (replaces `/` with `_`)
3. Writes markdown file with:
   - File header
   - Summary section
   - Classes section (if any)
   - Functions section (if any)
   - Props/Methods/Routes/Scenarios (if any)
4. Adds the file to the tree structure

**Parameters**:
- `file_path` (string): Full path to source file
- `info` (dict): Parsed information from the file
- `root_dir` (string): Repository root directory

#### `write_index()`
**What it does**: Creates the `SUMMARY.md` file with the table of contents.

**Process**:
1. Starts with "# Table of Contents"
2. Calls `generate_summary_lines()` to build the tree
3. Writes everything to `SUMMARY.md`

---

## Function: main()

**Purpose**: The main entry point that orchestrates the entire documentation generation process.

### What it does (step by step):

1. **Load Configuration**
   - Calls `ConfigLoader.load('config.yaml')`
   - Exits if config file not found

2. **Setup Repository**
   - Checks if using `repo_url` or `local_path`
   - If `repo_url`: Creates `RepoManager` and calls `setup()` to clone/update
   - Gets GitHub token from environment variable `GITHUB_TOKEN`

3. **Prepare Output Directory**
   - Deletes existing `docs/` folder (if exists)
   - Creates fresh `docs/` folder

4. **Initialize Parsers**
   - Creates a dictionary mapping file extensions to parser instances
   - Example: `{'.php': PHPParser(), '.js': JSParser(), ...}`

5. **Create Generator**
   - Initializes `MarkdownGenerator` with output directory

6. **Scan Files**
   - Walks through all directories using `os.walk()`
   - Filters out excluded directories (node_modules, vendor, etc.)
   - For each file:
     - Determines which parser to use based on extension
     - Handles special cases (Dockerfile has no extension)
     - Reads file content
     - Calls appropriate parser
     - Calls `generator.generate()` to create markdown

7. **Generate Index**
   - Calls `generator.write_index()` to create `SUMMARY.md`

8. **Complete**
   - Prints success message

---

## How Everything Works Together

### Example Flow:

1. **User runs**: `python generate_docs.py`

2. **main() starts**:
   - Loads `config.yaml`
   - Clones repo to `./repo_src`

3. **Scanning begins**:
   - Finds `backend/api/user.js`
   - Determines it's a JS file
   - Uses `JSParser`

4. **JSParser.parse()**:
   - Reads the file content
   - Finds `class UserService`
   - Finds `function getUser()`
   - Returns: `{'classes': ['UserService'], 'functions': ['getUser']}`

5. **MarkdownGenerator.generate()**:
   - Creates `backend_api_user_js.md`
   - Writes:
     ```markdown
     # backend/api/user.js
     
     ## Classes
     - `UserService`
     
     ## Functions
     - `getUser`
     ```
   - Adds to tree structure

6. **After all files processed**:
   - `write_index()` creates `SUMMARY.md` with nested structure

7. **Done!**
   - User has complete documentation in `docs/` folder

---

## Key Design Decisions

### Why separate parser classes?
- Each language has different syntax
- Easy to add new languages (just create new parser)
- Each parser can focus on language-specific patterns

### Why use regex instead of AST parsers?
- Simpler and faster for basic extraction
- No need for language-specific dependencies
- Good enough for generating summaries

### Why create a tree structure?
- Preserves directory organization
- Makes navigation easier
- Matches the actual project structure

### Why safe filenames (replacing `/` with `_`)?
- Avoids creating deep directory structures in `docs/`
- All markdown files in one folder
- Easier to manage and deploy

---

## Summary Table

| Class | Purpose | Key Method |
|-------|---------|------------|
| `ConfigLoader` | Load YAML config | `load()` |
| `RepoManager` | Git operations | `setup()` |
| `ParserUtils` | Extract comments | `extract_docstring()` |
| `PHPParser` | Parse PHP files | `parse()` |
| `JSParser` | Parse JS/TS files | `parse()` |
| `VueParser` | Parse Vue files | `parse()` |
| `GenericParser` | Parse Shell/Docker | `parse()` |
| `MDXParser` | Parse MDX files | `parse()` |
| `GherkinParser` | Parse feature files | `parse()` |
| `MarkdownGenerator` | Create docs | `generate()`, `write_index()` |
| `main()` | Orchestrate everything | N/A |
