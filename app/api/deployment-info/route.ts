import { NextResponse } from 'next/server';

export async function GET() {
  // Use NEXT_PUBLIC_BUILD_TIME if set during build, otherwise use current time as fallback
  const buildTimestamp =
    process.env.NEXT_PUBLIC_BUILD_TIME || new Date().toISOString();

  return NextResponse.json({
    buildTimestamp,
    environment: process.env.NODE_ENV || 'development',
  });
}
