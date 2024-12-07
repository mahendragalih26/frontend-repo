import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken") // Retrieve token from cookies

  const isAuthRoute = request.nextUrl.pathname.startsWith("/login")

  if (!token && !isAuthRoute) {
    // Redirect unauthenticated users to the login page
    const loginUrl = new URL("/login", request.url)
    return NextResponse.redirect(loginUrl)
  }

  if (token && isAuthRoute) {
    // Redirect authenticated users away from the login page
    const dashboardUrl = new URL("/dashboard", request.url)
    return NextResponse.redirect(dashboardUrl)
  }

  return NextResponse.next()
}

// Match protected routes
export const config = {
  matcher: ["/login", "/main/:path*", "/dashboard"], // Protect these routes
}
