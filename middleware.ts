import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'ru'];

function getLocale(request: NextRequest): string {
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLocale = locales.find(locale => acceptLanguage.includes(locale));

    return preferredLocale || 'en';
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return NextResponse.next();
    }

    const locale = getLocale(request);
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        '/((?!_next|api|assets).*)',
    ],
};
