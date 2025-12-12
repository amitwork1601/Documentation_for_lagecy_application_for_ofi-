# Quick Start Guide - Running with Your Private Repository

## Step 1: Get Your GitHub Token

1. Go to GitHub.com and log in
2. Click your profile picture → **Settings**
3. Scroll down to **Developer settings** (left sidebar)
4. Click **Personal access tokens** → **Tokens (classic)**
5. Click **Generate new token** → **Generate new token (classic)**
6. Give it a name (e.g., "Documentation Generator")
7. Select scopes:
   - ✅ **repo** (Full control of private repositories)
8. Click **Generate token**
9. **COPY THE TOKEN** - You won't see it again!

## Step 2: Update config.yaml

Open `config.yaml` and replace the placeholder URL with your actual repository:

```yaml
repo_url: "https://github.com/YOUR-ORG/YOUR-REPO.git"
```

**Example:**
```yaml
repo_url: "https://github.com/mycompany/legacy-app.git"
```

## Step 3: Set the GitHub Token

Open PowerShell in this directory and run:

```powershell
$env:GITHUB_TOKEN="ghp_your_actual_token_here"
```

**Replace `ghp_your_actual_token_here` with the token you copied in Step 1.**

## Step 4: Run the Script

```powershell
python generate_docs.py
```

## What Will Happen

The script will:
1. ✅ Clone your private repository to `./repo_src`
2. ✅ Scan all files (PHP, JS, TS, Vue, etc.)
3. ✅ Extract documentation from each file
4. ✅ Generate markdown files in `./docs`
5. ✅ Create `SUMMARY.md` with table of contents

## Expected Output

```
Cloning repository to ./repo_src...
Scanning files...
Processing UserController.php...
Processing api.js...
Processing Button.vue...
...
Documentation generated in ./docs
```

## Step 5: View the Documentation

Open `docs/SUMMARY.md` to see the table of contents, then browse the generated markdown files.

---

## Complete Example (Copy-Paste Ready)

```powershell
# 1. Set your token (replace with your actual token)
$env:GITHUB_TOKEN="ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

# 2. Run the script
python generate_docs.py

# 3. View the results
code docs/SUMMARY.md
```

---

## Troubleshooting

### Error: "Authentication failed"
- Check that your token is correct
- Make sure the token has `repo` scope
- Verify the token hasn't expired

### Error: "Repository not found"
- Check the URL in `config.yaml` is correct
- Ensure the token has access to that repository
- Verify you have permission to access the repo

### Error: "config.yaml not found"
- Make sure you're running the command from the correct directory
- The directory should contain `generate_docs.py` and `config.yaml`

### No files processed
- Check your `exclude` patterns in `config.yaml`
- Make sure your repo has supported file types (.php, .js, .vue, etc.)

---

## Security Note

⚠️ **Never commit your GitHub token to git!**

The token is set as an environment variable, so it's only stored in your current PowerShell session. When you close PowerShell, it's gone.

If you need to run the script again later, you'll need to set the token again.

---

## Alternative: Using a .env File (Optional)

If you want to avoid typing the token each time:

1. Create a file named `.env` in this directory:
```
GITHUB_TOKEN=ghp_your_token_here
```

2. Add `.env` to `.gitignore`:
```
echo .env >> .gitignore
```

3. Install python-dotenv:
```bash
pip install python-dotenv
```

4. The script will automatically load the token from `.env`

---

## Next Steps

After the documentation is generated:

1. **Review the output** - Check `docs/SUMMARY.md`
2. **Customize** - Edit `config.yaml` to exclude certain directories
3. **Deploy** - Use the `docs/` folder with MkDocs or any static site generator
4. **Update** - Re-run the script whenever your code changes

---

## Example config.yaml for Your Project

```yaml
# Your actual repository
repo_url: "https://github.com/mycompany/legacy-app.git"

# Where to save documentation
output_dir: "./docs"

# Directories to skip
exclude:
  - "node_modules"
  - "vendor"
  - ".git"
  - "dist"
  - "build"
  - "coverage"
  - "*.test.js"
  - "*.spec.js"
```

---

## Ready to Go!

You're all set! Just follow the 4 steps above and you'll have complete documentation for your legacy codebase in minutes.
