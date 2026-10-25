"use client";

import {useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function SiteHeader() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [switching, setSwitching] = useState(false);
  const [switchError, setSwitchError] = useState(false);

  const navigation = [
    {href: "/", label: t("home")},
    {href: "/programs", label: t("programs")},
    {href: "/#how-it-works", label: t("how")},
    {href: "/about", label: t("about")},
    {href: "/faq", label: t("faq")},
    {href: "/contact", label: t("contact")}
  ];

  async function switchLanguage() {
    if (switching) return;
    setSwitching(true);
    setSwitchError(false);

    try {
      const response = await fetch("/api/locale", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({locale: locale === "ar" ? "en" : "ar"})
      });
      if (!response.ok) throw new Error("Locale switch failed");
      window.location.reload();
    } catch {
      setSwitchError(true);
      setSwitching(false);
    }
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-mark" aria-label={t("backHome")} onClick={() => setMenuOpen(false)}>
          <span aria-hidden="true" className="brand-mark__icon">S</span>
          <span className="brand-mark__name" dir="ltr">
            SPLIT<span>Z</span>
            <small>TRAIN · TRACK · TRANSFORM</small>
          </span>
        </Link>

        <nav className="site-header__desktop-nav" aria-label={t("desktopLabel")}>
          {navigation.map(item => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <span className="preview-tag">
            <span className="preview-tag__dot" aria-hidden="true" />
            {t("demo")}
          </span>
          <button
            className="language-switch"
            type="button"
            disabled={switching}
            aria-label={t("switchAria")}
            onClick={switchLanguage}
          >
            {t("switchTo")}
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(open => !open)}
          >
            <span aria-hidden="true" className={menuOpen ? "menu-toggle__lines is-open" : "menu-toggle__lines"}>
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>
      {switchError && <p role="alert" className="language-switch__error">{t("switchError")}</p>}
      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label={t("mobileLabel")}>
          {navigation.map(item => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
