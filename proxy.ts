import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - _vercel (Vercel internals)
  // - Static files (files with extensions like .png, .svg, .ico, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
