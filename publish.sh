#!/usr/bin/env bash

set -e
echo ": Checking ENV"
ENV_FILE_PATH='../.env'
if [ -f "$ENV_FILE_PATH" ]; then
    export "$(grep -v '^#' "$ENV_FILE_PATH" | xargs)"
fi

# Set npm authentication token
# Environment variable is GITHUB_PAT
export GH_PAT="$GITHUB_PAT"
npm set //npm.pkg.github.com/:_authToken "${GH_PAT}"

echo "🔴 Pushing commit...."
git add .
git commit -m "build-$1-$(date '+%s')"
git push -u --set-upstream origin $1

echo "$(pwd)"
rm -f ./publish.sh

if [[ "$2" == "true" ]]; then
  npm publish
fi
