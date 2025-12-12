import os
import json
import random
from pathlib import Path

def count_files(directory, exclude_patterns=None):
    if exclude_patterns is None:
        exclude_patterns = []
    count = 0
    extensions = {'.php', '.js', '.vue', '.ts', '.tsx', '.md', '.feature', '.sh', '.bash'}

    for root, dirs, files in os.walk(directory):
        # Filter directories
        dirs[:] = [d for d in dirs if d not in ['.git', 'node_modules', 'vendor', 'dist', 'build']]

        for file in files:
            if any(file.endswith(ext) for ext in extensions):
                 count += 1
    return count

def validate_docs(docs_dir, src_dirs):
    print(f"--- Validation Report ---")

    # 1. Source File Counts
    total_src = 0
    for src in src_dirs:
        if os.path.exists(src):
            c = count_files(src)
            print(f"Source ({os.path.basename(src)}): {c} files")
            total_src += c
        else:
            print(f"Source ({os.path.basename(src)}): Not found")

    # 2. Generated File Counts
    docs_path = Path(docs_dir)
    if not docs_path.exists():
        print(f"Docs directory {docs_dir} does not exist yet.")
        return

    generated_files = list(docs_path.rglob("*.md"))
    total_gen = len(generated_files)
    print(f"\nGenerated Documents: {total_gen} files")

    # 3. Index Check
    index_path = docs_path / "docs_index.json"
    if index_path.exists():
        try:
            with open(index_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            print(f"Index Entry Count: {len(data.get('files', []))}")
        except Exception as e:
            print(f"Error reading index: {e}")
    else:
        print("docs_index.json not found.")

    # 4. Content Sampling
    print("\n--- Content Sampling (Random 3 files) ---")
    if generated_files:
        sample = random.sample(generated_files, min(3, len(generated_files)))
        for p in sample:
            print(f"\nFile: {p.name}")
            try:
                with open(p, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                    # Check for sections
                    content = "".join(lines)
                    has_summary = "## Summary" in content
                    has_classes = "## Classes" in content or "## Function Details" in content
                    print(f"  - AI Summary Present: {'YES' if has_summary else 'NO'}")
                    print(f"  - Structure Valid: {'YES' if 'Path' in content else 'NO'}")
                    print(f"  - Size: {len(content)} bytes")
            except Exception as e:
                print(f"  - Error reading: {e}")

if __name__ == "__main__":
    # Load config to get paths
    import yaml
    try:
        with open('config.yaml', 'r') as f:
            config = yaml.safe_load(f)

        output_dir = config.get('output_dir', './docs')
        repos = config.get('repositories', [])
        src_dirs = [repo.get('local_path') for repo in repos]

        validate_docs(output_dir, src_dirs)

    except Exception as e:
        print(f"Configuration error: {e}")
 