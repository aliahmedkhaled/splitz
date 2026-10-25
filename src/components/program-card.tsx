import Link from "next/link";

/**
 * SPLITZ program showcase card.
 * All visible plan details are clearly labelled demo content for this portfolio MVP.
 * Original artwork is inline SVG + CSS; no third-party brand or stock assets.
 */

export type ProgramVariant =
  | "strength"
  | "upper"
  | "home"
  | "ppl"
  | "conditioning"
  | "mobility";

type ProgramCardProps = {
  variant: ProgramVariant;
  number: string;
  posterLines: readonly [string, string];
  days: number;
  weeks: number;
  title: string;
  subtitle: string;
  level: string;
  sampleLabel: string;
  daysUnit: string;
  weeksUnit: string;
  levelLabel: string;
  durationLabel: string;
  detailHref: string;
  detailsLabel: string;
  hideDetailsLink?: boolean;
};

function ProgramArtwork({variant}: {variant: ProgramVariant}) {
  const standard = {stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const};

  // Custom vector shapes. Each card has a different graphic system.
  return (
    <svg
      className={`training-card__vector training-card__vector--${variant}`}
      viewBox="0 0 400 260"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <circle cx="220" cy="144" r="102" stroke="currentColor" strokeOpacity=".18" strokeWidth="2" strokeDasharray="7 13" />
      <circle cx="220" cy="144" r="75" stroke="currentColor" strokeOpacity=".10" strokeWidth="1" />

      {variant === "strength" && (
        <g transform="rotate(-25 220 132)">
          <rect x="72" y="119" width="306" height="23" rx="9" fill="#D4D3EA" />
          <rect x="83" y="112" width="32" height="37" rx="7" fill="currentColor" />
          <rect x="112" y="82" width="44" height="97" rx="10" fill="#201435" stroke="currentColor" strokeWidth="7" />
          <rect x="152" y="94" width="25" height="72" rx="7" fill="currentColor" />
          <rect x="280" y="94" width="25" height="72" rx="7" fill="currentColor" />
          <rect x="301" y="82" width="44" height="97" rx="10" fill="#201435" stroke="currentColor" strokeWidth="7" />
          <rect x="342" y="112" width="32" height="37" rx="7" fill="currentColor" />
          <path d="M195 124h55m-50 7h43" stroke="#11131B" strokeOpacity=".6" strokeWidth="4" />
        </g>
      )}

      {variant === "upper" && (
        <g {...standard}>
          <path d="M132 65l-30 42 26 41 35-13 30 73h54l29-73 36 13 24-41-30-42-53 22-34 27-34-27-53-22z" fill="currentColor" fillOpacity=".68" strokeWidth="7" />
          <path d="M198 115l21 39 22-39M185 162l34 21 35-21" stroke="#211408" strokeOpacity=".7" strokeWidth="8" />
          <path d="M105 104l49 25m131 0l49-25" stroke="#FFF3D7" strokeOpacity=".42" strokeWidth="7" />
          <path d="M140 58l40 22m119-22l-40 22" strokeWidth="7" strokeOpacity=".65" />
        </g>
      )}

      {variant === "home" && (
        <g {...standard}>
          <path d="M100 137L218 47l118 90v82H100v-82z" strokeWidth="10" strokeOpacity=".85" />
          <path d="M146 219v-65h143v65" strokeWidth="8" strokeOpacity=".55" />
          <path d="M142 182h153" stroke="#E4F4FF" strokeWidth="13" />
          <rect x="118" y="158" width="28" height="52" rx="6" fill="currentColor" />
          <rect x="291" y="158" width="28" height="52" rx="6" fill="currentColor" />
          <rect x="190" y="86" width="58" height="35" rx="5" strokeWidth="6" strokeOpacity=".5" />
        </g>
      )}

      {variant === "ppl" && (
        <g {...standard} transform="rotate(-13 220 138)">
          <rect x="93" y="81" width="51" height="143" rx="7" fill="currentColor" fillOpacity=".36" strokeWidth="5" />
          <rect x="171" y="61" width="51" height="163" rx="7" fill="currentColor" fillOpacity=".64" strokeWidth="5" />
          <rect x="249" y="91" width="51" height="133" rx="7" fill="currentColor" fillOpacity=".92" strokeWidth="5" />
          <path d="M93 110h51M171 96h51M249 125h51" stroke="#FFCFD0" strokeOpacity=".6" strokeWidth="5" />
        </g>
      )}

      {variant === "conditioning" && (
        <g {...standard}>
          <path d="M69 154h67l27-58 43 112 28-68h36l24-52 31 66h42" strokeWidth="11" strokeOpacity=".95" />
          <circle cx="214" cy="151" r="74" strokeWidth="13" strokeOpacity=".28" />
          <path d="M214 107v45l28 20" stroke="#E1FFF6" strokeWidth="9" strokeOpacity=".85" />
        </g>
      )}

      {variant === "mobility" && (
        <g {...standard}>
          <circle cx="180" cy="132" r="63" strokeWidth="19" strokeOpacity=".8" />
          <circle cx="267" cy="132" r="63" strokeWidth="19" strokeOpacity=".6" />
          <path d="M96 210C146 170 173 189 207 210s80 23 133-11" strokeWidth="11" strokeOpacity=".66" />
          <path d="M131 55l17-19m171 156l25-17" strokeWidth="7" strokeOpacity=".45" />
        </g>
      )}
    </svg>
  );
}

export default function ProgramCard({
  variant,
  number,
  posterLines,
  days,
  weeks,
  title,
  subtitle,
  level,
  sampleLabel,
  daysUnit,
  weeksUnit,
  levelLabel,
  durationLabel,
  detailHref,
  detailsLabel,
  hideDetailsLink = false
}: ProgramCardProps) {
  return (
    <article className={`training-card training-card--${variant}`}>
      <div className="training-card__frame" aria-hidden="true">
        <div className="training-card__tab" />
        <div className="training-card__poster">
          <div className="training-card__shine" />
          <div className="training-card__poster-top" dir="ltr">
            <span>SPLITZ <b>/</b> PERFORMANCE</span>
            <span className="training-card__serial">#{number}</span>
          </div>
          <div className="training-card__poster-title" dir="ltr">
            <span>{posterLines[0]}</span>
            <strong>{posterLines[1]}</strong>
          </div>
          <ProgramArtwork variant={variant} />
          <div className="training-card__poster-bottom" dir="ltr">
            <span>TRAINING <b>SYSTEM</b></span>
            <strong>{String(days).padStart(2, "0")} <small>DAYS / WK</small></strong>
          </div>
          <div className="training-card__corner-cut" />
        </div>
      </div>
      <div className="training-card__body">
        <div className="training-card__eyebrow">
          <span className="training-card__sample-dot" />
          <span>{sampleLabel}</span>
          <span className="training-card__index" dir="ltr">/ {number}</span>
        </div>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <dl className="training-card__metadata">
          <div>
            <dt>{levelLabel}</dt>
            <dd>{level}</dd>
          </div>
          <div>
            <dt>{durationLabel}</dt>
            <dd>{weeks} {weeksUnit}</dd>
          </div>
          <div>
            <dt>{daysUnit}</dt>
            <dd>{days}</dd>
          </div>
        </dl>
        {!hideDetailsLink && (
          <Link href={detailHref} className="training-card__open">
            <span>{detailsLabel}</span><span aria-hidden="true" dir="ltr">↗</span>
          </Link>
        )}
      </div>
    </article>
  );
}
