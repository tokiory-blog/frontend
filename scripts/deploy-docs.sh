#!/usr/bin/env bash

echo "Generating Typescript documentation"
pnpm typedoc --plugin typedoc-plugin-markdown \
  --entryPointStrategy expand components composables config \
  constants data layouts pages server types utils --tsconfig \
  ./tsconfig.json --out docs/tech
  
echo "Deploying to Github Pages"
mkdocs gh-deploy --remote-branch gh-pages
