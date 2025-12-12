# MkDocs Setup Guide

This guide explains how to use MkDocs to view the generated documentation.

## Prerequisites

Make sure you have Python installed and all dependencies:

```bash
python -m pip install -r requirements.txt
```

## Quick Start

### Option 1: Generate and Serve (Recommended)

Run the complete workflow to generate documentation from repositories and serve it:

```bash
generate_and_serve.bat
```

This will:
1. Clone/update the repositories
2. Generate documentation with AI enhancement
3. Start the MkDocs development server at `http://127.0.0.1:8000`

### Option 2: Just Serve Existing Documentation

If documentation is already generated, just serve it:

```bash
run_mkdocs.bat serve
```

Or simply:

```bash
run_mkdocs.bat
```

### Option 3: Build Static Site

To build a static HTML site for deployment:

```bash
run_mkdocs.bat build
```

The static site will be in the `site/` directory.

## Manual Commands

### Generate Documentation

```bash
python generate_docs.py
```

### Serve with MkDocs

```bash
python -m mkdocs serve
```

Visit: `http://127.0.0.1:8000`

### Build Static Site

```bash
python -m mkdocs build
```

### Clean Build

```bash
run_mkdocs.bat clean
```

## Configuration

### MkDocs Configuration

Edit `mkdocs.yml` to customize:
- Site name and description
- Theme colors and features
- Navigation structure
- Markdown extensions

### Documentation Generation

Edit `config.yaml` to configure:
- Repository URLs
- AI enhancement settings (Groq API)
- Output directory
- Exclude patterns
- Language-specific settings

## Features

### Theme Features

- 🌓 **Dark/Light Mode** - Toggle in the header
- 🔍 **Instant Search** - Fast client-side search
- 📱 **Responsive Design** - Works on all devices
- 📋 **Code Copy** - One-click code copying
- 🎨 **Material Design** - Modern, clean interface

### Documentation Features

- 🤖 **AI-Enhanced Summaries** - Intelligent descriptions
- 📦 **Multi-Repository** - Backend, Frontend, CMS
- 🏷️ **Categorized** - Controllers, Services, Entities, etc.
- 🔗 **Cross-Referenced** - Easy navigation between files

## Troubleshooting

### Port Already in Use

If port 8000 is already in use, specify a different port:

```bash
python -m mkdocs serve -a localhost:8001
```

### Missing Dependencies

Install all requirements:

```bash
python -m pip install -r requirements.txt
```

### Git Not Found

Make sure Git is installed and in your PATH. The script will attempt to add it automatically on Windows.

### AI Enhancement Not Working

Check your Groq API key in `config.yaml`:

```yaml
ai_enhancement:
  enabled: true
  api_key: "your-api-key-here"
```

## File Structure

```
.
├── config.yaml              # Documentation generator config
├── mkdocs.yml              # MkDocs configuration
├── generate_docs.py        # Documentation generator script
├── run_mkdocs.bat          # MkDocs helper script
├── generate_and_serve.bat  # Complete workflow script
├── docs/                   # Generated documentation
│   ├── index.md           # Homepage
│   ├── SUMMARY.md         # Documentation index
│   ├── explorer.md        # Interactive explorer
│   ├── docs_index.json    # Search index
│   └── *.md               # Generated doc files
├── repo_src/              # Cloned repositories
│   ├── backend/
│   ├── frontend/
│   └── cms/
└── site/                  # Built static site (after build)
```

## Next Steps

1. **Generate Documentation**: Run `generate_and_serve.bat`
2. **Browse**: Open `http://127.0.0.1:8000` in your browser
3. **Explore**: Use the search and navigation features
4. **Deploy** (optional): Build static site and deploy to web server

## Support

For issues or questions:
- Check `config.yaml` for configuration
- Review `mkdocs.yml` for theme settings
- See MkDocs documentation: https://www.mkdocs.org/
- See Material theme docs: https://squidfunk.github.io/mkdocs-material/
