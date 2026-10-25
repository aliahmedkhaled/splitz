import type {Metadata} from "next";
import {cookies} from "next/headers";
import {NextIntlClientProvider} from "next-intl";
import {Barlow_Condensed, Cairo} from "next/font/google";
import {LOCALE_COOKIE, toSupportedLocale} from "@/i18n/locale";
import arabicMessages from "@/messages/ar.json";
import englishMessages from "@/messages/en.json";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-cairo"
});

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-barlow"
});

export const metadata: Metadata = {
  title: "SPLITZ — Train. Track. Transform.",
  description: "Premium bilingual fitness coaching platform — portfolio MVP."
};

export default async function RootLayout({
  children
}: Readonly<{children: React.ReactNode}>) {
  const cookieStore = await cookies();
  const locale = toSupportedLocale(cookieStore.get(LOCALE_COOKIE)?.value);
  const messages = locale === "ar" ? arabicMessages : englishMessages;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${cairo.variable} ${barlow.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
