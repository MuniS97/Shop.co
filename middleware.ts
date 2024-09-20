import { NextRequest, NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']);

const locales = ['en', 'ru', 'uz'];

function getLocale(request: NextRequest): string {
    return locales[0];
}

export default clerkMiddleware((auth, request) => {
    const { pathname } = request.nextUrl;

    if (!isPublicRoute(request)) {
        auth().protect();
    }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    const locale = getLocale(request);
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(newUrl);
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
        '/((?!_next).*)',
    ],
};
