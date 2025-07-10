#!/bin/sh

# Start the Laravel server in background
php artisan serve --host=0.0.0.0 --port=80 &

# Start Vite dev server
npm run dev
