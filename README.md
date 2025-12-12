# Codebase Documentation Generator

Automatically generates Markdown documentation for legacy codebases with support for multiple languages.

## Supported Languages

### Frontend
- **JavaScript** (`.js`, `.jsx`, `.mjs`, `.cjs`)
- **TypeScript** (`.ts`, `.tsx`)
- **Vue** (`.vue`)
- **MDX** (`.mdx`)

### Backend
- **PHP** (`.php`)
- **JavaScript/Node.js** (`.js`)
- **Twig** (`.twig`)
- **Gherkin/BDD** (`.feature`)
- **Shell** (`.sh`, `.bash`)
- **Docker** (`Dockerfile`, `.dockerfile`)

### CMS
- **JavaScript** (`.js`)

## Features

✅ **Multi-language support** - Parses PHP, JS, TS, Vue, MDX, Shell, Docker, Twig, and Gherkin  
✅ **Monorepo ready** - Automatically organizes docs by directory structure  
✅ **Private repo support** - Uses GitHub tokens for authentication  
✅ **Configurable** - Easy YAML configuration for excludes and settings  
✅ **MkDocs compatible** - Generates `SUMMARY.md` for static site generators  
✅ **Auto-explanations** - Extracts function parameters and docstrings automatically  

## Installation

```bash
pip install -r requirements.txt
```

## Configuration

Edit `config.yaml`:

```yaml
repo_url: "https://github.com/your-org/your-repo.git"
output_dir: "./docs"

exclude:
  - "node_modules"
  - "vendor"
  - ".git"
```

## Usage

### For Private Repositories

Set your GitHub token:

**PowerShell:**
```powershell
$env:GITHUB_TOKEN="your_token_here"
python generate_docs.py
```

**CMD:**
```cmd
set GITHUB_TOKEN=your_token_here
python generate_docs.py
```

**Linux/Mac:**
```bash
export GITHUB_TOKEN="your_token_here"
python generate_docs.py
```

### For Local Testing

Uncomment `local_path` in `config.yaml`:

```yaml
# repo_url: "https://github.com/your-org/your-repo.git"
local_path: "./test_repo"
```

Then run:
```bash
python generate_docs.py
```

## Output

The script generates:

- **`docs/SUMMARY.md`** - Table of contents with nested directory structure
- **Individual `.md` files** - One per source file with extracted info
- **`docs/docs_index.json`** - Search index consumed by the Explorer UI
- **`docs/viewer/`** - Static Explorer (HTML/CSS/JS) bundled with the site
- **`mkdocs.yml`** - MkDocs configuration that treats `docs/` as the site root

### Example Output Structure

```
docs/
├── SUMMARY.md
├── docs_index.json
├── viewer/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── backend_api_user_js.md
├── backend_Dockerfile.md
├── frontend_components_Button_vue.md
└── frontend_utils_ts.md
mkdocs.yml
```

## Previewing with MkDocs

1. Install dependencies (first time only):
   ```bash
   pip install -r requirements.txt
   ```
2. Regenerate documentation:
   ```bash
   python generate_docs.py
   ```
3. Serve the MkDocs site locally:
   ```bash
   mkdocs serve
   ```
   Visit `http://127.0.0.1:8000` to browse all generated pages using MkDocs'
   sidebar navigation, built-in search, and the **Interactive Explorer** entry.
4. Build for deployment (optional):
   ```bash
   mkdocs build
   ```
   The static site will be available under the `site/` directory.

## Interactive Explorer

- Open the **Explorer** page from the MkDocs navigation (or go directly to
  `/viewer/index.html`) to load the enhanced UI.
- Use the search box plus category and repository dropdowns to narrow results.
- Select a card to preview the underlying Markdown document without leaving the
  UI.
- The viewer reads `docs_index.json`, so rerun `python generate_docs.py` before
  refreshing the Explorer to keep results current.

### What Gets Extracted

- **PHP**: Classes, functions, docblocks, parameters
- **JS/TS**: Classes, functions, Strapi routes, parameters, JSDoc comments
- **Vue**: Props, methods, component docs
- **Gherkin**: Features, scenarios
- **MDX**: Frontmatter titles, headers
- **Shell/Docker**: Top-level comments

### Example: Function Details

For a PHP function like:
```php
/**
 * Logs the user in.
 */
public function login($username, $password) {
    // logic
}
```

The generated documentation will include:
```markdown
### `login($username, $password)`

**Description**: Logs the user in.

**Parameters**: `$username, $password`
```

## Example SUMMARY.md

```markdown
# Table of Contents

- backend
  - api
    - [user.js](backend_api_user_js.md)
  - [Dockerfile](backend_Dockerfile.md)
- frontend
  - components
    - [Button.vue](frontend_components_Button_vue.md)
  - [utils.ts](frontend_utils_ts.md)
```

## Customization

### Exclude Patterns

Add patterns to `config.yaml`:

```yaml
exclude:
  - "node_modules"
  - "vendor"
  - "dist"
  - "*.test.js"
```

### Language Settings

Customize file extensions in `config.yaml`:

```yaml
languages:
  php:
    extensions: [".php"]
  javascript:
    extensions: [".js", ".jsx"]
```

## Troubleshooting

**Issue**: Script fails with "config.yaml not found"  
**Solution**: Run the script from the directory containing `config.yaml`

**Issue**: No files processed  
**Solution**: Check your exclude patterns aren't too broad

**Issue**: Authentication failed  
**Solution**: Verify your `GITHUB_TOKEN` is set correctly

## License

MIT
