#!/bin/sh
set -eu

cd /var/www/html

if [ ! -f artisan ]; then
    echo "Laravel project not found. Creating a fresh Laravel application..."
    rm -f .gitkeep
    composer create-project laravel/laravel . --prefer-dist --no-interaction
fi

if [ -f artisan ]; then
    # Generate the application key only once; do not invalidate encrypted data on restarts.
    if ! grep -q '^APP_KEY=base64:' .env 2>/dev/null; then
        php artisan key:generate --force
    fi

    # Wait for MySQL readiness (Compose healthcheck also gates startup).
    php artisan config:clear || true
    php artisan migrate --force || true
fi

exec "$@"
