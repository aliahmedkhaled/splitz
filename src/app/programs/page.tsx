import Link from "next/link";
import {useTranslations} from "next-intl";
import SiteHeader from "@/components/site-header";
import ProgramCatalog from "@/components/program-catalog";

export default function ProgramsPage() {
  const t = useTranslations("Catalog");
  const footer = useTranslations("Footer");

  return (
    <main className="coach-page" id="top">
      <SiteHeader />
      <section className="catalog-hero" aria-labelledby="catalog-heading">
        <div className="section-container catalog-hero__inner">
          <div className="catalog-hero__content">
            <span className="section-kicker" dir="ltr">SPLITZ / 02 — PROGRAM CATALOG</span>
            <h1 id="catalog-heading">{t("headingFirst")} <span>{t("headingSecond")}</span></h1>
            <p>{t("description")}</p>
            <div className="catalog-hero__note"><span aria-hidden="true">●</span>{t("demoNote")}</div>
          </div>
          <div aria-hidden="true" className="catalog-hero__emblem" dir="ltr"><span>CO</span><span>OS</span><small>TRAIN // TRACK</small></div>
        </div>
      </section>
      <ProgramCatalog />
      <footer className="site-footer">
        <div className="section-container site-footer__inner">
          <strong dir="ltr">SPLIT<span>Z</span></strong>
          <span>{footer("status")}</span>
          <Link href="/">{t("backHome")}</Link>
        </div>
      </footer>
    </main>
  );
}
