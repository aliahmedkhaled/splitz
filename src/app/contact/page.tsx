import Link from "next/link";
import {useTranslations} from "next-intl";
import SiteHeader from "@/components/site-header";
import ContactComposer from "@/components/contact-composer";
import {contactSettings} from "@/config/contact";
import "./contact.css";

function MailArtwork() {
  return (
    <div className="co-contact-art" aria-hidden="true">
      <div className="co-contact-artGrid" />
      <div className="co-contact-artCircle" />
      <svg className="co-contact-artIcon" viewBox="0 0 330 260" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="co-contact-envelope" x1="30" y1="15" x2="290" y2="245">
            <stop stopColor="#BC9DFF" />
            <stop offset="1" stopColor="#6331F4" />
          </linearGradient>
        </defs>
        <rect x="49" y="58" width="234" height="155" rx="14" fill="#171024" stroke="url(#co-contact-envelope)" strokeWidth="4"/>
        <path d="M51 81L156 151C162 155 171 155 177 151L281 81" stroke="#C3A9FF" strokeWidth="6" strokeLinecap="round"/>
        <path d="M51 202L126 141M281 202L207 141" stroke="#8255E9" strokeWidth="4"/>
        <circle cx="266" cy="59" r="27" fill="#6D28FF" stroke="#D7C3FF" strokeWidth="3"/>
        <path d="M254 59H278M266 47V71" stroke="#fff" strokeWidth="4" strokeLinecap="round"/>
        <path d="M13 204H32M300 101H322M26 47H57M282 240H311" stroke="#8B5CF6" strokeWidth="3" opacity=".65"/>
      </svg>
      <span className="co-contact-artSerial" dir="ltr">SPLITZ / CONNECTION 001</span>
      <span className="co-contact-artBadge" dir="ltr">MESSAGE<br />COMPOSER</span>
    </div>
  );
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const footer = useTranslations("Footer");

  return (
    <main className="coach-page" id="top">
      <SiteHeader />
      <nav className="section-container co-contact-breadcrumb" aria-label={t("breadcrumbLabel")}>
        <Link href="/">{t("breadcrumbHome")}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{t("breadcrumbCurrent")}</span>
      </nav>

      <section className="co-contact-hero" aria-labelledby="contact-title">
        <div className="section-container co-contact-heroGrid">
          <div>
            <span className="section-kicker" dir="ltr">SPLITZ / SUPPORT DESK</span>
            <h1 id="contact-title" className="co-contact-title">
              {t("titleFirst")} <span>{t("titleSecond")}</span>
            </h1>
            <p className="co-contact-lead">{t("heroDescription")}</p>
            <span className="co-contact-demoBadge">{t("demoBadge")}</span>
          </div>
          <div className="co-contact-artFrame"><MailArtwork /></div>
        </div>
      </section>

      <section className="section-container co-contact-main" aria-label={t("sectionLabel")}>
        <aside className="co-contact-side" aria-labelledby="co-contact-channels">
          <span className="section-kicker" dir="ltr">01 / CHANNELS</span>
          <h2 id="co-contact-channels">{t("channelsTitle")}</h2>
          <p>{t("channelsIntro")}</p>

          <div className="co-contact-channel">
            <span className="co-contact-channelIcon" aria-hidden="true">@</span>
            <div>
              <strong>{t("emailChannelTitle")}</strong>
              {contactSettings.email ? (
                <a href={`mailto:${contactSettings.email}`} dir="ltr">{contactSettings.email}</a>
              ) : (
                <span>{t("channelNotConfigured")}</span>
              )}
            </div>
          </div>
          <div className="co-contact-channel">
            <span className="co-contact-channelIcon" aria-hidden="true">✳</span>
            <div>
              <strong>{t("whatsappChannelTitle")}</strong>
              {contactSettings.whatsappUrl ? (
                <a href={contactSettings.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t("openWhatsApp")}
                </a>
              ) : (
                <span>{t("channelNotConfigured")}</span>
              )}
            </div>
          </div>
          <div className="co-contact-note" role="note">
            <strong>{t("importantTitle")}</strong>
            <p>{contactSettings.email ? t("importantWithEmail") : t("importantWithoutEmail")}</p>
          </div>
        </aside>

        <div className="co-contact-formShell">
          <ContactComposer contactEmail={contactSettings.email} />
        </div>
      </section>

      <section className="section-container co-contact-bottom">
        <div>
          <span className="section-kicker" dir="ltr">03 / KEEP EXPLORING</span>
          <h2>{t("bottomTitle")}</h2>
          <p>{t("bottomDescription")}</p>
        </div>
        <div className="co-contact-bottomActions">
          <Link href="/faq" className="button-secondary">{t("faqCta")}</Link>
          <Link href="/programs" className="button-primary">{t("programsCta")} <span aria-hidden="true">↗</span></Link>
        </div>
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
