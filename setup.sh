#!/usr/bin/env bash
set -euo pipefail

echo "Running setup for Diyet ve Spor Takibi"
ROOT_DIR=$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)
cd "$ROOT_DIR"

# 1) Install node deps
if command -v npm >/dev/null 2>&1; then
  echo "Installing npm dependencies..."
  npm install
else
  echo "npm not found - please install Node.js 18+ and npm" >&2
  exit 1
fi

# 2) Run tests
echo "Running tests..."
npm test

# 3) Offer to start the app locally or with docker-compose
cat <<'EOF'

Setup complete.
You can start the app locally with:
  npm start
or run with docker-compose:
  docker compose up -d

To stop docker-compose:
  docker compose down

EOF
