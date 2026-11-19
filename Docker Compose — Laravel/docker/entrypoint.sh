#!/bin/sh
set -eu

cd /var/www/html

if [ ! -f artisan ]; then
    echo "Laravel project not found. Creating a fresh Laravel application..."
    composer create-project laravel/laravel . --prefer-dist --no-interaction
fi

if [ -f .env ]; then
    echo "Using existing Laravel .env file."
else
    if [ -f .env.example ]; then
        cp .env.example .env
    fi
fi

if [ -f artisan ]; then
    # Configure the database connection for the Docker network.
    php artisan config:clear || true
    php artisan key:generate --force || true
    php artisan migrate --force || true
fi

exec "$@"
