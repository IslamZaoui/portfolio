#!/bin/bash

git log -1 --pretty=oneline --abbrev-commit | grep "[Skip GitHub Action]" || exit 1

echo "Proceeding with deployment."
exit 0