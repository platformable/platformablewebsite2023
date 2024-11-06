import { NextResponse } from 'next/server'
import blogLinksSource from '/public/old_blog_links'

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  const redirectData = pathname !== '/' ? blogLinksSource.find(item => item.old_link.includes(pathname)) : null

    // console.log(pathname)
  if (redirectData) {
    const redirectEntry = redirectData.new_link === '/' ? request.nextUrl.origin : redirectData.new_link 
    const statusCode = redirectEntry.permanent ? 308 : 307
    return NextResponse.redirect(redirectEntry, statusCode)
  }
 
  // No redirect found, continue without redirecting
  return NextResponse.next()
}