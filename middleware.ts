// @ts-nocheck
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|login.html|assets).*)',
    ],
};

export default function middleware(request: Request) {
    const url = new URL(request.url);

    // Skip if we are already on login page (matcher handles this, but extra safety)
    if (url.pathname === '/login.html') {
        return;
    }

    // Parse cookies from header manually since we are avoiding NextRequest
    const cookieHeader = request.headers.get('cookie') || '';
    const hasAuth = cookieHeader.includes('auth_token=');

    if (!hasAuth) {
        const loginUrl = new URL('/login.html', request.url);
        loginUrl.searchParams.set('from', url.pathname);
        return Response.redirect(loginUrl);
    }

    // If authorized, continue.
    // In Vercel Edge Middleware, returning nothing (void) continues to the next middleware or origin.
}
