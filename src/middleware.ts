import { NextRequest, NextResponse } from 'next/server';
import { updateSession } from './libraries/supabase/middleware';
import {
  createRedirectHandler,
  setCorsHeaders,
} from './utilities/helpers/middeware';

export async function middleware(request: NextRequest) {
  // First check for redirects
  const redirectResponse = handleRedirect(request);

  if (redirectResponse) {
    return redirectResponse;
  }

  // If no redirect, proceed with normal middleware
  const response = NextResponse.next({ request });

  setCorsHeaders({ crossOrigins, request, response });

  return await updateSession(request, response);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};

const crossOrigins = [
  'localhost',
  '127.0.0.1',
  'devokrann.vercel.app',
  'drone-space.vercel.app',
  'dronespace.co.ke',
  'conference-ai.vercel.app',
  'aiconference.co.ke',
];

const pastEvents = {
  yr2024: '/past-events/2024',
};

const staticRedirects = {
  '/': `${pastEvents.yr2024}`,
  '/exhibit': `${pastEvents.yr2024}#exhibitors`,
  '/program': `${pastEvents.yr2024}#program`,
  '/speakers': `${pastEvents.yr2024}#speakers`,
  '/sponsors': `${pastEvents.yr2024}#sponsors-partners`,
};

const dynamicRedirects = [
  {
    // Matches "/speakers/any-service-title" and redirects to /drone-solutions
    pattern: /^\/speakers\/[^\/]+$/,
    replacement: `${pastEvents.yr2024}#speakers`,
  },
];

const handleRedirect = createRedirectHandler(
  staticRedirects,
  dynamicRedirects,
  {
    permanent: false,
    preserveQuery: true,
    preserveHash: true,
  }
);
