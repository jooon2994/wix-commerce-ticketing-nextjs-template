import { NextResponse } from 'next/server';

// Capture timestamp when module loads (server startup time) as fallback
const SERVER_START_TIME = new Date().toISOString();

export async function GET() {
  // Use NEXT_PUBLIC_BUILD_TIME if set during build, otherwise use server start time
  const buildTimestamp =
    process.env.NEXT_PUBLIC_BUILD_TIME || SERVER_START_TIME;

  return NextResponse.json({
    buildTimestamp,
    environment: process.env.NODE_ENV || 'development',
  });
}
