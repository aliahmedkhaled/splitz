import {NextRequest, NextResponse} from "next/server";
import {LOCALE_COOKIE} from "@/i18n/locale";

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({error: "Forbidden"}, {status: 403});
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({error: "Invalid JSON"}, {status: 400});
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("locale" in body) ||
    (body.locale !== "ar" && body.locale !== "en")
  ) {
    return NextResponse.json({error: "Unsupported locale"}, {status: 400});
  }

  const response = new NextResponse(null, {status: 204});
  response.cookies.set(LOCALE_COOKIE, body.locale, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 365
  });

  return response;
}
