#!/bin/bash

# Define paths to the three repositories
BASE_DIR="/Users/pondokit/Herd"
WEB_DIR="$BASE_DIR/pesona-baubau-web"
ADMIN_DIR="$BASE_DIR/pesona-baubau-admin"
MITRA_DIR="$BASE_DIR/pesona-baubau-mitra"

echo "Starting Pesona Baubau Web..."
cd "$WEB_DIR" && npm run dev &
WEB_PID=$!

echo "Starting Pesona Baubau Admin..."
cd "$ADMIN_DIR" && npm run dev &
ADMIN_PID=$!

echo "Starting Pesona Baubau Mitra..."
cd "$MITRA_DIR" && npm run dev &
MITRA_PID=$!

echo "=========================================================="
echo "Semua service sedang berjalan di background!"
echo "Tekan [CTRL + C] untuk mematikan semuanya secara bersamaan."
echo "=========================================================="

# Tangkap sinyal interrupt (Ctrl+C) untuk mematikan semua proses
trap "echo -e '\nMematikan semua service...'; kill $WEB_PID $ADMIN_PID $MITRA_PID 2>/dev/null; exit 0" SIGINT SIGTERM

# Tunggu sampai semua background process selesai
wait $WEB_PID $ADMIN_PID $MITRA_PID
