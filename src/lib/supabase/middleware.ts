import { PUBLIC_ROUTES } from "@/config/public-routes";
import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  try {
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

    const supabase = createServerClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) =>
              request.cookies.set(name, value)
            );
            response = NextResponse.next({
              request,
            });
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    // This will refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/server-side/nextjs
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    console.log(error);

    // Check if the current path is in the PUBLIC_ROUTES array
    const isPublicRoute = PUBLIC_ROUTES.some(
      (route) =>
        request.nextUrl.pathname === route ||
        request.nextUrl.pathname.startsWith(route)
    );
    // Handle email verification callback
    if (request.nextUrl.pathname.startsWith("/auth/callback")) {
      return response;
    }

    // If route is not public and user is not authenticated, redirect to signin
    if (!isPublicRoute && !user) {
      // Preserve the original path in redirect URL
      const redirectUrl = new URL("/signin", request.url);
      redirectUrl.searchParams.set("redirect_to", request.nextUrl.pathname);
      return NextResponse.redirect(redirectUrl);
    }

    // Redirect authenticated users away from signin page to protected area
    if (request.nextUrl.pathname === "/signin" && user) {
      const redirectTo = request.nextUrl.searchParams.get("redirect_to") || "/";
      return NextResponse.redirect(new URL(redirectTo, request.url));
    }

    return response;
  } catch (e) {
    console.log(e);
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    });
  }
};
