#!/bin/bash

# Check if git is installed
command -v git >/dev/null 2>&1 || { echo "Git is not installed. Skipping."; exit 0; }

# Check if in a git repository
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || { echo "Not in a Git repository. Skipping."; exit 0; }

git log -1 --pretty=oneline --abbrev-commit | grep "[Skip GitHub Action]" || exit 1

echo "Proceeding with deployment."
exit 0