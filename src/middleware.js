import { NextResponse } from 'next/server'
import blogLinksSource from '/public/old_blog_links'

export function middleware(request) {

  const pathname = request.nextUrl.pathname

  let redirectData;
  // console.log("pathname",pathname)

  if(pathname !== '/' && pathname !=='/blog') {
    redirectData = blogLinksSource.find(item => item.old_link.includes(pathname)) || null
  }

  if(redirectData) {
    // console.log('hay redirect data')
    const redirectEntry = redirectData.new_link === '/' ? request.nextUrl.origin : redirectData.new_link 
    const statusCode = redirectEntry.permanent ? 308 : 307
    return NextResponse.redirect(redirectEntry, statusCode)
  }
 
  // No redirect found, continue without redirecting
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api/|_next/static|_next/image|favicon.ico|js/).*)',
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    /* {
      source: '/((?!api/|_next/static|_next/image|favicon.ico|js/).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
        { type: 'header', key: 'sec-fetch-site', value: 'same-origin' },
      ],
    }, */
  ],
}