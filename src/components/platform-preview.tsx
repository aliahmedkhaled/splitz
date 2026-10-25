"use client";

import {useState} from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import styles from "./platform-preview.module.css";

type PreviewMode = "member" | "coach";

function CircleIcon({active = false}: {active?: boolean}) {
  return <span aria-hidden="true" className={active ? styles.navIconActive : styles.navIcon} />;
}

export default function PlatformPreview() {
  const t = useTranslations("Showcase");
  const locale = useLocale();
  const [mode, setMode] = useState<PreviewMode>("member");
  const isMember = mode === "member";

  return (
    <section id="platform-preview" className={styles.section} aria-labelledby="platform-preview-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className="section-container">
        <div className={styles.heading}>
          <p className="section-kicker" dir="ltr">02 / PRODUCT INTERFACE</p>
          <h2 id="platform-preview-title">{t("headingFirst")} <span>{t("headingSecond")}</span></h2>
          <p>{t("intro")}</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.introPanel}>
            <span className={styles.introLabel} dir="ltr"><span aria-hidden="true" /> INTERACTIVE UI CONCEPT</span>
            <h3>{t("subheading")}</h3>
            <p>{t("description")}</p>
            <div className={styles.modePicker} role="group" aria-label={t("chooseView")}>
              <button type="button" className={isMember ? styles.modeActive : styles.mode} aria-pressed={isMember} onClick={() => setMode("member")}>
                <span aria-hidden="true">◈</span>{t("memberTab")}
              </button>
              <button type="button" className={!isMember ? styles.modeActive : styles.mode} aria-pressed={!isMember} onClick={() => setMode("coach")}>
                <span aria-hidden="true">▦</span>{t("coachTab")}
              </button>
            </div>
            <p className={styles.modeDescription} aria-live="polite">{isMember ? t("memberDescription") : t("coachDescription")}</p>
            <div className={styles.note} role="note">
              <span aria-hidden="true">i</span>
              {t("demoDisclaimer")}
            </div>
            <Link href="/programs" className={styles.catalogLink}>
              {t("catalogLink")} <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className={styles.frame}>
            <div className={styles.browser} dir="ltr">
              <div className={styles.browserDots} aria-hidden="true"><i/><i/><i/></div>
              <span>SPLITZ / INTERFACE PREVIEW</span>
              <span className={styles.browserStatus}><b aria-hidden="true"/>{t("previewStatus")}</span>
            </div>
            <div className={styles.application} dir={locale === "ar" ? "rtl" : "ltr"}>
              <aside className={styles.sidebar} aria-label={t("mockSidebarLabel")}>
                <span className={styles.sidebarBrand} dir="ltr">S<span>Z</span></span>
                <div className={styles.sidebarTitle}>{isMember ? t("memberWorkspace") : t("coachWorkspace")}</div>
                <div className={styles.sidebarNav}>
                  <div className={styles.navSelected}><CircleIcon active/>{t("navigationOverview")}</div>
                  <div><CircleIcon/>{isMember ? t("navigationPrograms") : t("navigationLibrary")}</div>
                  <div><CircleIcon/>{isMember ? t("navigationProgress") : t("navigationContent")}</div>
                </div>
                <div className={styles.sidebarBottom}><span className={styles.avatar}>S</span><span>{t("sampleWorkspace")}</span></div>
              </aside>

              <div className={styles.content} key={mode}>
                <header className={styles.contentHeader}>
                  <div><span className={styles.miniEyebrow}>{t("productLabel")}</span><h4>{isMember ? t("memberHeading") : t("coachHeading")}</h4></div>
                  <span className={styles.sampleTag}>{t("sampleBadge")}</span>
                </header>

                {isMember ? (
                  <>
                    <div className={styles.programBanner}>
                      <div><span className={styles.bannerKicker}>STRENGTH / 001</span><strong>{t("samplePlan")}</strong><small>{t("samplePlanMeta")}</small></div>
                      <div className={styles.bannerGlyph} aria-hidden="true" dir="ltr">S<span>01</span></div>
                    </div>
                    <div className={styles.groupTitle}><strong>{t("weeksTitle")}</strong><span>{t("structureLabel")}</span></div>
                    <div className={styles.weekGrid}>
                      {[1,2,3,4].map(week => <div key={week} className={week === 1 ? styles.weekSelected : styles.week}>
                        <small>{t("weekLabel")}</small><strong dir="ltr">{String(week).padStart(2, "0")}</strong>
                      </div>)}
                    </div>
                    <div className={styles.previewBottom}>
                      <div className={styles.workoutPanel}>
                        <span className={styles.miniEyebrow}>{t("workoutLabel")}</span>
                        <h5>{t("workoutTitle")}</h5>
                        <div className={styles.exerciseRow}><span>01</span>{t("exerciseOne")}<small>3 × 8</small></div>
                        <div className={styles.exerciseRow}><span>02</span>{t("exerciseTwo")}<small>3 × 10</small></div>
                        <div className={styles.exerciseRow}><span>03</span>{t("exerciseThree")}<small>3 × 12</small></div>
                      </div>
                      <div className={styles.sidePanel}>
                        <span className={styles.miniEyebrow}>{t("focusLabel")}</span>
                        <div className={styles.targetCircle} aria-hidden="true">◎</div>
                        <strong>{t("focusTitle")}</strong>
                        <small>{t("focusDescription")}</small>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.adminTiles}>
                      <div><span aria-hidden="true">▣</span><strong>{t("adminPrograms")}</strong><small>{t("adminProgramsDesc")}</small></div>
                      <div><span aria-hidden="true">⌘</span><strong>{t("adminWorkouts")}</strong><small>{t("adminWorkoutsDesc")}</small></div>
                      <div><span aria-hidden="true">◈</span><strong>{t("adminAccess")}</strong><small>{t("adminAccessDesc")}</small></div>
                    </div>
                    <div className={styles.groupTitle}><strong>{t("libraryHeading")}</strong><span>{t("structureLabel")}</span></div>
                    <div className={styles.adminTable}>
                      <div className={styles.tableHead}><span>{t("tablePlan")}</span><span>{t("tableStructure")}</span><span>{t("tableStatus")}</span></div>
                      {[{name:t("libraryOne"),desc:t("libraryOneDetail")},{name:t("libraryTwo"),desc:t("libraryTwoDetail")},{name:t("libraryThree"),desc:t("libraryThreeDetail")}].map((item,i) => (
                        <div className={styles.tableRow} key={item.name}>
                          <span className={styles.tableName}><i/><span><strong>{item.name}</strong><small>{item.desc}</small></span></span>
                          <span className={styles.tableMeta}>{i === 0 ? "04 × 03" : i === 1 ? "06 × 04" : "04 × 05"}</span>
                          <span className={styles.draftTag}>{t("sampleRow")}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className={styles.frameFooter} dir="ltr"><span>DESIGNED AS A PRODUCT / NOT A CONNECTED ACCOUNT</span><span>SPLITZ ©</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
