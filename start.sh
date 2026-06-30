#!/bin/bash

# Start backend
echo "Starting backend on port 8000..."
cd /workspaces/portfolio
python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload &
BACKEND_PID=$!

# Give backend time to start
sleep 3

# Start frontend
echo "Starting frontend on port 5175..."
cd /workspaces/portfolio/frontend
npm run dev &
FRONTEND_PID=$!

echo "✅ Backend running (PID: $BACKEND_PID)"
echo "✅ Frontend running (PID: $FRONTEND_PID)"
echo ""
echo "Access your portfolio at:"
echo "  🌐 http://localhost:5175"
echo "  📡 API: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop all services"

# Keep script running
wait