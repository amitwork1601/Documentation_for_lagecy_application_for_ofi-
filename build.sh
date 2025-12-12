#!/bin/bash
set -e

echo "Installing Python dependencies..."
pip install -r requirements.txt

echo "Building MkDocs site..."
mkdocs build

echo "Build complete! Site generated in ./site directory"
