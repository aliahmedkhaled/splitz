import Link from "next/link";
import {useTranslations} from "next-intl";
import SiteHeader from "@/components/site-header";
import PortfolioMotion from "@/components/portfolio-motion";
import "./portfolio-polish.css";
import ProgramCard from "@/components/program-card";
import {demoPrograms} from "@/data/demo-programs";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5m6-6-6 6 6 6" />
    </svg>
  );
}

function BarbellArtwork() {
  return (
    <svg
      className="barbell-art"
      aria-hidden="true"
      viewBox="0 0 440 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="barbell-metal" x1="50" y1="120" x2="410" y2="120" gradientUnits="userSpaceOnUse">
          <stop stopColor="#737A90" />
          <stop offset="0.43" stopColor="#F1F2FB" />
          <stop offset="1" stopColor="#72778C" />
        </linearGradient>
        <linearGradient id="barbell-plate" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#A278FF" />
          <stop offset="1" stopColor="#37108B" />
        </linearGradient>
        <filter id="barbell-shadow" x="-30%" y="-50%" width="160%" height="210%">
          <feGaussianBlur stdDeviation="11" />
        </filter>
      </defs>
      <g transform="rotate(-20 220 125)">
        <ellipse cx="221" cy="190" rx="164" ry="21" fill="#6D28FF" opacity=".35" filter="url(#barbell-shadow)" />
        <rect x="47" y="112" width="348" height="17" rx="8.5" fill="url(#barbell-metal)" />
        <rect x="77" y="107" width="10" height="27" rx="3" fill="#DFE0EB" />
        <rect x="350" y="107" width="10" height="27" rx="3" fill="#DFE0EB" />
        <rect x="87" y="64" width="45" height="112" rx="15" fill="url(#barbell-plate)" stroke="#B394FF" strokeWidth="2" />
        <rect x="97" y="72" width="15" height="96" rx="7" fill="#1A0B42" opacity=".58" />
        <path d="M117 74v91" stroke="#FFFFFF" opacity=".28" strokeWidth="2" />
        <rect x="119" y="80" width="26" height="80" rx="9" fill="#260A70" stroke="#9E76FF" strokeWidth="2" />
        <rect x="300" y="80" width="26" height="80" rx="9" fill="#260A70" stroke="#9E76FF" strokeWidth="2" />
        <rect x="313" y="64" width="45" height="112" rx="15" fill="url(#barbell-plate)" stroke="#B394FF" strokeWidth="2" />
        <rect x="327" y="72" width="15" height="96" rx="7" fill="#1A0B42" opacity=".58" />
        <path d="M343 74v91" stroke="#FFFFFF" opacity=".28" strokeWidth="2" />
        <path d="M181 112v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17m8-17v17" stroke="#343847" strokeWidth="2" opacity=".6" />
      </g>
    </svg>
  );
}

export default function Home() {
  const t = useTranslations("Home");
  const programs = useTranslations("Programs");
  const how = useTranslations("How");
  const about = useTranslations("About");
  const footer = useTranslations("Footer");

  return (
    <main id="top" className="coach-page">
      <PortfolioMotion />
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__noise" aria-hidden="true" />
        <div className="section-container hero__content">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__line" aria-hidden="true" />
              <span dir="ltr">{t("eyebrow")}</span>
            </p>
            <h1 id="hero-title" className="hero__title">
              {t("titleFirst")}
              <span>{t("titleSecond")}</span>
            </h1>
            <p className="hero__description">{t("description")}</p>
            <div className="hero__buttons">
              <Link className="button-primary" href="/programs">{t("explore")} <ArrowIcon /></Link>
              <a className="button-secondary" href="#how-it-works">{t("how")}</a>
            </div>
            <div className="hero__features" aria-label={t("featureLabel")}>
              <span><b className="feature-check" aria-hidden="true">✓</b> {t("feature1")}</span>
              <span><b className="feature-check" aria-hidden="true">✓</b> {t("feature2")}</span>
              <span><b className="feature-check" aria-hidden="true">✓</b> {t("feature3")}</span>
            </div>
          </div>

          <div className="hero__visual" role="img" aria-label={t("artLabel")}>
            <div aria-hidden="true" className="hero__halo" />
            <div aria-hidden="true" className="orbit orbit--one" />
            <div aria-hidden="true" className="orbit orbit--two" />
            <div className="stack-card stack-card--back" aria-hidden="true">
              <span>SPLITZ / SERIES</span><strong>UPPER<br />LOWER</strong><i>04 / DAYS</i>
            </div>
            <div className="stack-card stack-card--blue" aria-hidden="true">
              <strong>PUSH<br />PULL<br />LEGS</strong>
            </div>
            <div className="hero-product" aria-hidden="true">
              <div className="hero-product__top"><span dir="ltr">SPLITZ // TRAINING SYSTEM</span><span className="hero-product__index">001</span></div>
              <span className="hero-product__micro">SAMPLE PROGRAM ARTWORK</span>
              <div className="hero-product__title" dir="ltr">BUILD<br /><em>YOUR</em><br />STRENGTH<span>.</span></div>
              <BarbellArtwork />
              <div className="hero-product__bottom">
                <div><strong>STRENGTH FOUNDATIONS</strong><span>BEGINNER / SAMPLE PLAN</span></div>
                <div className="hero-product__badge">03<br /><small>DAYS</small></div>
              </div>
            </div>
            <div className="hero__label" dir="ltr">STRUCTURE. DISCIPLINE. PROGRESS.</div>
          </div>
        </div>
        <div className="hero__bottomline">
          <div className="section-container hero__bottomline-inner">
            <span dir="ltr">SPLITZ / TRAIN. TRACK. TRANSFORM.</span><span>{t("tagline")}</span>
          </div>
        </div>
      </section>

      <section id="programs" className="programs-section section-container" aria-labelledby="programs-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker" dir="ltr">01 / PROGRAM LIBRARY</span>
            <h2 id="programs-title">{programs("headingFirst")} <span>{programs("headingSecond")}</span></h2>
            <p>{programs("intro")}</p>
          </div>
          <span className="section-heading__tag">DEMO PREVIEW</span>
        </div>
        <div className="program-grid">
          {demoPrograms.map(program => (
            <ProgramCard
              key={program.id}
              variant={program.id}
              number={program.number}
              posterLines={program.posterLines}
              days={program.days}
              weeks={program.weeks}
              title={programs(`${program.id}.title`)}
              subtitle={programs(`${program.id}.subtitle`)}
              level={programs(`${program.id}.level`)}
              sampleLabel={programs("sampleLabel")}
              daysUnit={programs("daysUnit")}
              weeksUnit={programs("weeksUnit")}
              levelLabel={programs("levelLabel")}
              durationLabel={programs("durationLabel")}
              detailHref={`/programs/${program.id}`}
              detailsLabel={programs("viewDetails")}
            />
          ))}
        </div>
      </section>

      <section id="how-it-works" className="how-section" aria-labelledby="how-title">
        <div className="section-container">
          <div className="section-heading">
            <div>
              <span className="section-kicker" dir="ltr">02 / YOUR WORKFLOW</span>
              <h2 id="how-title">{how("headingFirst")} <span>{how("headingSecond")}</span></h2>
              <p>{how("intro")}</p>
            </div>
          </div>
          <div className="steps-grid">
            <article><span dir="ltr">01</span><h3>{how("oneTitle")}</h3><p>{how("oneBody")}</p></article>
            <article><span dir="ltr">02</span><h3>{how("twoTitle")}</h3><p>{how("twoBody")}</p></article>
            <article><span dir="ltr">03</span><h3>{how("threeTitle")}</h3><p>{how("threeBody")}</p></article>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-container" aria-labelledby="about-title">
        <div className="about-panel">
          <div>
            <span className="section-kicker" dir="ltr">BUILT FOR CONSISTENCY</span>
            <h2 id="about-title">{about("headingFirst")}<br /><span>{about("headingSecond")}</span></h2>
          </div>
          <p>{about("body")}</p>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-container site-footer__inner">
          <strong dir="ltr">SPLIT<span>Z</span></strong>
          <span>{footer("status")}</span>
          <a href="#top">{footer("backTop")}</a>
        </div>
      </footer>
    </main>
  );
}
