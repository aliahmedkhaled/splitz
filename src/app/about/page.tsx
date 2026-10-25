import Link from "next/link";
import {useTranslations} from "next-intl";
import SiteHeader from "@/components/site-header";
import "./about.css";

const principles = ["One", "Two", "Three"] as const;

function ProfileArtwork() {
  return (
    <div className="co-about-artwork" aria-hidden="true">
      <div className="co-about-artworkGlow" />
      <div className="co-about-artworkGrid" />
      <div className="co-about-artworkOrbit" />
      <svg className="co-about-artworkSymbol" viewBox="0 0 400 390" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="about-metal" x1="85" y1="200" x2="330" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D75BE" />
            <stop offset=".47" stopColor="#ECE4FF" />
            <stop offset="1" stopColor="#8476AE" />
          </linearGradient>
          <linearGradient id="about-plate" x1="70" y1="40" x2="320" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A27BFF" />
            <stop offset="1" stopColor="#4C17CC" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="184" r="131" stroke="#BDA8FF" strokeOpacity=".21" strokeWidth="2" />
        <circle cx="200" cy="184" r="93" stroke="#BDA8FF" strokeOpacity=".17" strokeWidth="2" />
        <g transform="rotate(-31 200 185)">
          <rect x="51" y="174" width="298" height="22" rx="8" fill="url(#about-metal)" />
          <rect x="73" y="111" width="39" height="148" rx="12" fill="url(#about-plate)" stroke="#BC9BFF" strokeWidth="3" />
          <rect x="98" y="132" width="22" height="108" rx="8" fill="#361086" stroke="#A47BFF" strokeWidth="3" />
          <rect x="280" y="132" width="22" height="108" rx="8" fill="#361086" stroke="#A47BFF" strokeWidth="3" />
          <rect x="288" y="111" width="39" height="148" rx="12" fill="url(#about-plate)" stroke="#BC9BFF" strokeWidth="3" />
          <path d="M167 178v14m12-14v14m12-14v14m12-14v14m12-14v14m12-14v14" stroke="#343040" strokeWidth="3" />
        </g>
        <path d="M38 335h109M253 335h109" stroke="#9D7BFF" strokeWidth="2" opacity=".55" />
        <path d="M195 328h10v13h-10z" fill="#9D7BFF" />
      </svg>
      <span className="co-about-artworkSerial" dir="ltr">C/OS — PROFILE 001</span>
      <span className="co-about-artworkStamp" dir="ltr">EDITABLE<br />COACH PROFILE</span>
    </div>
  );
}

export default function AboutCoachPage() {
  const t = useTranslations("AboutCoachPage");
  const footer = useTranslations("Footer");

  return (
    <main className="coach-page" id="top">
      <SiteHeader />

      <div className="section-container co-about-breadcrumb" aria-label={t("breadcrumbCurrent")}>
        <Link href="/">{t("breadcrumbHome")}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{t("breadcrumbCurrent")}</span>
      </div>

      <section className="co-about-hero" aria-labelledby="about-hero-title">
        <div className="section-container co-about-heroGrid">
          <div className="co-about-heroText">
            <span className="section-kicker" dir="ltr">{t("kicker")}</span>
            <span className="co-about-demoBadge">{t("labelPreview")}</span>
            <h1 id="about-hero-title" className="co-about-heroTitle">
              {t("titleFirst")} <span>{t("titleSecond")}</span>
            </h1>
            <p className="co-about-lead">{t("heroBody")}</p>
            <div className="co-about-heroActions">
              <Link href="/programs" className="button-primary">{t("explore")} <span aria-hidden="true">↗</span></Link>
              <Link href="/#how-it-works" className="button-secondary">{t("how")}</Link>
            </div>
          </div>
          <aside className="co-about-profileCard" aria-label={t("placeholderLabel")}>
            <div className="co-about-cardTop"><span dir="ltr">{t("coachCardTop")}</span><span aria-hidden="true">✳</span></div>
            <ProfileArtwork />
            <div className="co-about-cardBottom">
              <span>{t("placeholderLabel")}</span>
              <h2>{t("coachName")}</h2>
              <p>{t("coachTag")}</p>
              <small>{t("coachCardFoot")}</small>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-container co-about-story" aria-labelledby="about-story-title">
        <div className="co-about-storyHeading">
          <span className="section-kicker" dir="ltr">{t("storyKicker")}</span>
          <h2 id="about-story-title">{t("storyTitle")}</h2>
        </div>
        <div className="co-about-storyBody">
          <p className="co-about-storyLead">{t("storyLead")}</p>
          <p>{t("storyBody")}</p>
          <div className="co-about-pills">
            <span>{t("pill1")}</span><span>{t("pill2")}</span><span>{t("pill3")}</span>
          </div>
        </div>
      </section>

      <section className="co-about-approach" aria-labelledby="about-approach-title">
        <div className="section-container">
          <span className="section-kicker" dir="ltr">{t("approachKicker")}</span>
          <h2 id="about-approach-title" className="co-about-sectionTitle">{t("approachTitle")}</h2>
          <p className="co-about-sectionIntro">{t("approachIntro")}</p>
          <div className="co-about-principleGrid">
            {principles.map((word, index) => (
              <article key={word} className="co-about-principleCard">
                <span dir="ltr" className="co-about-principleNumber">0{index + 1}</span>
                <h3>{t(`step${word}Title`)}</h3>
                <p>{t(`step${word}Body`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container co-about-next" aria-labelledby="about-next-title">
        <div>
          <span className="section-kicker" dir="ltr">{t("nextKicker")}</span>
          <h2 id="about-next-title">{t("nextTitle")}</h2>
          <p>{t("nextBody")}</p>
          <small>{t("noteSocial")}</small>
        </div>
        <Link href="/programs" className="button-primary">{t("explore")} <span aria-hidden="true">↗</span></Link>
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
