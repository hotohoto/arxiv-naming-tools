#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

echo $SCRIPT_DIR
echo $PROJECT_DIR

cd "$PROJECT_DIR"

zip -r "$PROJECT_DIR/arxiv_naming_tool_extension.zip" \
    "manifest.json" \
    "scripts" \
    "images" \
    "manifest.json" \
    "popup.html"
