"use client";

import {useMemo, useState} from "react";
import {useTranslations} from "next-intl";
import ProgramCard from "@/components/program-card";
import {demoPrograms, type DemoGoal, type DemoLevel} from "@/data/demo-programs";

type GoalFilter = "all" | DemoGoal;
type LevelFilter = "any" | DemoLevel;
type DaysFilter = "any" | "3" | "4" | "5";

export default function ProgramCatalog() {
  const t = useTranslations("Catalog");
  const p = useTranslations("Programs");
  const [goal, setGoal] = useState<GoalFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("any");
  const [days, setDays] = useState<DaysFilter>("any");

  const filtered = useMemo(() => demoPrograms.filter(program => (
    (goal === "all" || program.goal === goal) &&
    (level === "any" || program.level === level || (level !== "all" && program.level === "all")) &&
    (days === "any" || program.days === Number(days))
  )), [goal, level, days]);

  function clearFilters() {
    setGoal("all");
    setLevel("any");
    setDays("any");
  }

  return (
    <section className="catalog-content section-container" aria-label={t("filterSection")}> 
      <div className="catalog-toolbar">
        <div className="catalog-field">
          <label htmlFor="catalog-goal">{t("goalLabel")}</label>
          <select id="catalog-goal" value={goal} onChange={event => setGoal(event.target.value as GoalFilter)}>
            <option value="all">{t("goalAll")}</option>
            <option value="strength">{t("goalStrength")}</option>
            <option value="fitness">{t("goalFitness")}</option>
            <option value="movement">{t("goalMovement")}</option>
          </select>
        </div>
        <div className="catalog-field">
          <label htmlFor="catalog-level">{t("levelLabel")}</label>
          <select id="catalog-level" value={level} onChange={event => setLevel(event.target.value as LevelFilter)}>
            <option value="any">{t("levelAll")}</option>
            <option value="beginner">{t("beginner")}</option>
            <option value="intermediate">{t("intermediate")}</option>
            <option value="all">{t("anyLevel")}</option>
          </select>
        </div>
        <div className="catalog-field">
          <label htmlFor="catalog-days">{t("daysLabel")}</label>
          <select id="catalog-days" value={days} onChange={event => setDays(event.target.value as DaysFilter)}>
            <option value="any">{t("daysAll")}</option>
            <option value="3">{t("threeDays")}</option>
            <option value="4">{t("fourDays")}</option>
            <option value="5">{t("fiveDays")}</option>
          </select>
        </div>
        <button type="button" className="catalog-reset" onClick={clearFilters} disabled={goal === "all" && level === "any" && days === "any"}>
          {t("clear")}
        </button>
      </div>

      <div className="catalog-summary" aria-live="polite" aria-atomic="true">
        <p>{t("results", {count: filtered.length})}</p>
        <span>{t("previewOnly")}</span>
      </div>

      {filtered.length > 0 ? (
        <div className="program-grid">
          {filtered.map(program => (
            <ProgramCard
              key={program.id}
              variant={program.id}
              number={program.number}
              posterLines={program.posterLines}
              days={program.days}
              weeks={program.weeks}
              title={p(`${program.id}.title`)}
              subtitle={p(`${program.id}.subtitle`)}
              level={p(`${program.id}.level`)}
              sampleLabel={p("sampleLabel")}
              daysUnit={p("daysUnit")}
              weeksUnit={p("weeksUnit")}
              levelLabel={p("levelLabel")}
              durationLabel={p("durationLabel")}
              detailHref={`/programs/${program.id}`}
              detailsLabel={p("viewDetails")}
            />
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <span aria-hidden="true">⌕</span>
          <h2>{t("emptyTitle")}</h2>
          <p>{t("emptyBody")}</p>
          <button type="button" onClick={clearFilters}>{t("showAll")}</button>
        </div>
      )}
    </section>
  );
}
