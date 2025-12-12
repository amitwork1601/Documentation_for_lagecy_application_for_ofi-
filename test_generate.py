"""
Quick test script to verify documentation generation with local test_repo
"""
import sys
import os

# Temporarily rename config files
if os.path.exists('config.yaml'):
    os.rename('config.yaml', 'config.yaml.backup')
if os.path.exists('config_test.yaml'):
    os.rename('config_test.yaml', 'config.yaml')

try:
    # Import and run the main function
    from generate_docs import main
    main()
finally:
    # Restore original config
    if os.path.exists('config.yaml'):
        os.rename('config.yaml', 'config_test.yaml')
    if os.path.exists('config.yaml.backup'):
        os.rename('config.yaml.backup', 'config.yaml')
