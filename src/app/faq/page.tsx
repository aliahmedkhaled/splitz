import Link from "next/link";
import {useTranslations} from "next-intl";
import SiteHeader from "@/components/site-header";
import "./faq.css";

const categories = [
  {
    id: "access",
    number: "01",
    questions: ["accessRequest", "payment", "approval"]
  },
  {
    id: "programs",
    number: "02",
    questions: ["beginner", "choosing", "equipment"]
  },
  {
    id: "platform",
    number: "03",
    questions: ["dashboard", "videos", "progress"]
  }
] as const;

export default function FAQPage() {
  const t = useTranslations("FAQPage");
  const footer = useTranslations("Footer");

  return (
    <main className="coach-page" id="top">
      <SiteHeader />

      <nav className="section-container co-faq-breadcrumb" aria-label={t("breadcrumbLabel")}>
        <Link href="/">{t("breadcrumbHome")}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{t("breadcrumbCurrent")}</span>
      </nav>

      <section className="co-faq-hero" aria-labelledby="faq-title">
        <div className="section-container co-faq-heroGrid">
          <div>
            <span className="section-kicker" dir="ltr">{t("kicker")}</span>
            <h1 id="faq-title" className="co-faq-title">
              {t("titleFirst")} <span>{t("titleSecond")}</span>
            </h1>
            <p className="co-faq-intro">{t("intro")}</p>
            <span className="co-faq-demoNote">{t("demoNote")}</span>
          </div>
          <div className="co-faq-heroPanel" aria-hidden="true">
            <div className="co-faq-panelTop"><span dir="ltr">SPLITZ / SUPPORT</span><span>✳</span></div>
            <span className="co-faq-panelGraphic" dir="ltr">?</span>
            <div className="co-faq-panelBottom" dir="ltr">
              <strong>FAQ / 09</strong>
              <span>TRAIN · TRACK · TRANSFORM</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container co-faq-faqContent">
        {categories.map((category) => (
          <section className="co-faq-category" key={category.id} aria-labelledby={`faq-${category.id}`}>
            <div className="co-faq-categoryHeading">
              <span className="co-faq-categoryIndex" dir="ltr">{category.number} / 03</span>
              <div>
                <h2 id={`faq-${category.id}`}>{t(`${category.id}.title`)}</h2>
                <p>{t(`${category.id}.intro`)}</p>
              </div>
            </div>

            <div className="co-faq-accordion">
              {category.questions.map((question, index) => (
                <details className="co-faq-item" key={question}>
                  <summary className="co-faq-question">
                    <span className="co-faq-questionNum" dir="ltr">0{index + 1}</span>
                    <span className="co-faq-questionText">{t(`questions.${question}.question`)}</span>
                    <span className="co-faq-expandIcon" aria-hidden="true" />
                  </summary>
                  <div className="co-faq-answer">
                    <p>{t(`questions.${question}.answer`)}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="section-container co-faq-cta" aria-labelledby="faq-next-title">
        <div>
          <span className="section-kicker" dir="ltr">{t("nextKicker")}</span>
          <h2 id="faq-next-title">{t("nextTitle")}</h2>
          <p>{t("nextBody")}</p>
        </div>
        <Link href="/programs" className="button-primary">{t("explorePrograms")} <span aria-hidden="true">↗</span></Link>
      </section>

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
