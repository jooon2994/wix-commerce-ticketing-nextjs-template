import { NextResponse } from 'next/server';

// This timestamp is set at build time
const BUILD_TIMESTAMP = new Date().toISOString();

export async function GET() {
  return NextResponse.json({
    buildTimestamp: BUILD_TIMESTAMP,
    environment: process.env.NODE_ENV || 'development',
  });
}
