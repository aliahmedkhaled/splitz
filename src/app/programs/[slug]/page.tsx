import Link from "next/link";
import {notFound} from "next/navigation";
import {getTranslations} from "next-intl/server";
import SiteHeader from "@/components/site-header";
import ProgramCard from "@/components/program-card";
import {demoPrograms} from "@/data/demo-programs";

type Props = {params: Promise<{slug: string}>};

// All six mock detail URLs are known in this portfolio preview.
export function generateStaticParams() {
  return demoPrograms.map(program => ({slug: program.id}));
}

export default async function ProgramDetailsPage({params}: Props) {
  const {slug} = await params;
  const program = demoPrograms.find(entry => entry.id === slug);
  if (!program) notFound();

  const [t, p, footer] = await Promise.all([
    getTranslations("ProgramDetails"),
    getTranslations("Programs"),
    getTranslations("Footer")
  ]);

  const title = p(`${program.id}.title`);
  const plan = (key: "overview" | "audience" | "equipment" | "focus1" | "focus2" | "focus3") => t(`plans.${program.id}.${key}`);
  const goalKey = `${program.id}Goal` as const;

  return (
    <main className="coach-page" id="top">
      <SiteHeader />
      <div className="section-container detail-breadcrumb" aria-label={t("breadcrumbPrograms")}>
        <Link href="/">{t("breadcrumbHome")}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/programs">{t("breadcrumbPrograms")}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{title}</span>
      </div>

      <section className={`program-detail program-detail--${program.id}`} aria-labelledby="program-detail-title">
        <div className="section-container program-detail__hero">
          <div className="program-detail__copy">
            <span className="section-kicker" dir="ltr">{t("kicker")}</span>
            <div className="program-detail__badge"><span aria-hidden="true">●</span> {t("sampleBadge")}</div>
            <h1 id="program-detail-title">{title}<span className="program-detail__period">.</span></h1>
            <p className="program-detail__lead">{plan("overview")}</p>
            <div className="program-detail__stats">
              <div><span>{t("weeklyFrequency")}</span><strong>{program.days} <small>{t("daysUnit")}</small></strong></div>
              <div><span>{t("duration")}</span><strong>{program.weeks} <small>{t("weeksUnit")}</small></strong></div>
              <div><span>{t("difficulty")}</span><strong>{p(`${program.id}.level`)}</strong></div>
              <div><span>{t("goal")}</span><strong>{t(goalKey)}</strong></div>
            </div>
            <Link href="/programs" className="button-secondary program-detail__back">{t("backCatalog")}</Link>
          </div>
          <div className="program-detail__card">
            <ProgramCard
              variant={program.id}
              number={program.number}
              posterLines={program.posterLines}
              days={program.days}
              weeks={program.weeks}
              title={title}
              subtitle={p(`${program.id}.subtitle`)}
              level={p(`${program.id}.level`)}
              sampleLabel={p("sampleLabel")}
              daysUnit={p("daysUnit")}
              weeksUnit={p("weeksUnit")}
              levelLabel={p("levelLabel")}
              durationLabel={p("durationLabel")}
              detailHref={`/programs/${program.id}`}
              detailsLabel={p("viewDetails")}
              hideDetailsLink
            />
          </div>
        </div>
      </section>

      <div className="section-container program-detail__lower">
        <section className="program-detail__panel" aria-labelledby="detail-overview">
          <span className="section-kicker" dir="ltr">01 / OVERVIEW</span>
          <h2 id="detail-overview">{t("overviewHeading")}</h2>
          <p>{plan("overview")}</p>
          <h3>{t("audienceHeading")}</h3>
          <p>{plan("audience")}</p>
          <h3>{t("equipmentHeading")}</h3>
          <p>{plan("equipment")}</p>
        </section>
        <div className="program-detail__aside">
          <section className="program-detail__panel" aria-labelledby="detail-focus">
            <span className="section-kicker" dir="ltr">02 / FOCUS</span>
            <h2 id="detail-focus">{t("focusHeading")}</h2>
            <ul className="detail-feature-list">
              <li>{plan("focus1")}</li>
              <li>{plan("focus2")}</li>
              <li>{plan("focus3")}</li>
            </ul>
          </section>
          <section className="program-detail__panel" aria-labelledby="detail-included">
            <span className="section-kicker" dir="ltr">03 / PLANNED</span>
            <h2 id="detail-included">{t("includedHeading")}</h2>
            <ul className="detail-feature-list detail-feature-list--muted">
              <li>{t("feature1")}</li>
              <li>{t("feature2")}</li>
              <li>{t("feature3")}</li>
            </ul>
            <p className="detail-note">{t("plannedNote")}</p>
          </section>
        </div>
      </div>
      <div className="section-container">
        <aside className="detail-access" aria-labelledby="detail-access-title">
          <div>
            <span className="section-kicker" dir="ltr">MVP / NOT AVAILABLE YET</span>
            <h2 id="detail-access-title">{t("accessHeading")}</h2>
            <p>{t("accessBody")}</p>
          </div>
          <Link className="button-primary" href="/programs">{t("backCatalog")}</Link>
        </aside>
      </div>
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
