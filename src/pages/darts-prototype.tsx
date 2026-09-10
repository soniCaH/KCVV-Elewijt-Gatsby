/* PROTOTYPE — throwaway. Three variants of the /darts page on one route,
 * switchable with ?variant=A|B|C and the floating bar at the bottom.
 *
 * Question it answers: what should /darts look like, and how does it stay good
 * while the price, the start hour, the signup route and the reglement are all
 * still undecided?
 *
 * Owned by personal-development/.scratch/darts-tournament/issues/21-two-darts-pages-one-truth.md
 * Facts come from src/data/darts.json — a verbatim copy of that map's content
 * file. Never edit the copy; edit the map's and copy it again.
 *
 * Deliberately NOT using Card/EventCard/Hero: their props are not read yet and
 * a prototype is not the place to learn them. It uses the site's real class
 * names instead (page__wrapper--limited, featured-border, rich-link), so the
 * type, rhythm and links are the site's own.
 */
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import darts from "../data/darts.json"
import "./darts-prototype.scss"

const POSTER = `/darts/poster-liggend.jpg`

/* An undecided fact is shown, never hidden — same convention as affiche-copy.md:
   the dummy value renders dimmed and italic so nobody reads it as a decision. */
const Todo = ({ children }: { children: React.ReactNode }) => (
  <span className="dp__todo" title="Nog niet beslist">
    {children}
  </span>
)

const Fact = ({ value }: { value: any }) =>
  value && value.todo ? <Todo>{value.dummy}</Todo> : <>{value}</>

const uren = darts.uren.dummy

/* ---------------------------------------------------------------- VARIANT A */
/* "Affiche eerst" — the poster is the page. Full-bleed cover, then one dark
   band of the four facts people came for, then quiet long-form below it. */
const VariantA = () => (
  <>
    <div className="dp-a__cover">
      <img src={POSTER} alt="EK Darts 2026 — zaterdag 19 december" />
    </div>
    <div className="dp-a__band">
      <div className="dp-a__band-inner">
        <div>
          <span>Wanneer</span>
          <strong>{darts.datum.tekst}</strong>
        </div>
        <div>
          <span>Eerste worp</span>
          <strong>
            <Todo>{uren.eersteWorp}</Todo>
          </strong>
        </div>
        <div>
          <span>Prijs per ploeg</span>
          <strong>
            <Fact value={darts.prijs} />
          </strong>
        </div>
        <div>
          <span>Ploegen van</span>
          <strong>4</strong>
        </div>
      </div>
    </div>
    <div className="page__wrapper page__wrapper--limited page__section">
      <h2 className="featured-border">De formule</h2>
      <p>
        {darts.formule.ploeg}. {darts.formule.ontmoeting}. {darts.formule.verloop}.
      </p>
      <h2 className="featured-border">Inschrijven</h2>
      <p>
        <Fact value={darts.inschrijven} />
      </p>
      <h2 className="featured-border">De avond</h2>
      <p>{darts.dj.tekst}</p>
      <h2 className="featured-border">Reglement</h2>
      <p>
        <Fact value={darts.reglement} />
      </p>
      <ul>
        {darts.reglement.vast.map(r => (
          <li key={r}>{r}</li>
        ))}
      </ul>
      <h2 className="featured-border">Waar</h2>
      <p>
        {darts.waar.naam}
        <br />
        {darts.waar.adres}
      </p>
    </div>
  </>
)

/* ---------------------------------------------------------------- VARIANT B */
/* "Scorebord" — split hero, poster beside a hard-edged facts panel, then the
   day as a vertical timeline. Tournament-led: for someone deciding whether to
   enter a team, not for someone browsing. */
const VariantB = () => (
  <>
    <div className="dp-b__hero">
      <div className="dp-b__hero-img">
        <img src={POSTER} alt="EK Darts 2026" />
      </div>
      <div className="dp-b__hero-panel">
        <p className="dp-b__kicker">{darts.tagline}</p>
        <h1>{darts.titel}</h1>
        <p className="dp-b__date">{darts.datum.tekst}</p>
        <dl>
          <dt>Ploeg</dt>
          <dd>{darts.formule.ploeg}</dd>
          <dt>Ontmoeting</dt>
          <dd>{darts.formule.ontmoeting}</dd>
          <dt>Prijs</dt>
          <dd>
            <Fact value={darts.prijs} />
          </dd>
          <dt>Inschrijven</dt>
          <dd>
            <Fact value={darts.inschrijven} />
          </dd>
        </dl>
      </div>
    </div>
    <div className="page__wrapper page__wrapper--limited page__section">
      <h2 className="featured-border">De dag</h2>
      <ol className="dp-b__timeline">
        <li>
          <b>
            <Todo>{uren.deuren}</Todo>
          </b>
          <span>Deuren open</span>
        </li>
        <li>
          <b>
            <Todo>{uren.eersteWorp}</Todo>
          </b>
          <span>Eerste worp — kwalificatie in groepen</span>
        </li>
        <li>
          <b>—</b>
          <span>Eindronde</span>
        </li>
        <li>
          <b>
            <Todo>{uren.prijsuitreiking}</Todo>
          </b>
          <span>Prijsuitreiking</span>
        </li>
        <li>
          <b>19.15 u</b>
          <span>{darts.dj.tekst}</span>
        </li>
      </ol>
      <h2 className="featured-border">Eten en drank</h2>
      <p>
        <Fact value={darts.eten} />
      </p>
      <h2 className="featured-border">Reglement</h2>
      <p>
        <Fact value={darts.reglement} />
      </p>
      <ul>
        {darts.reglement.vast.map(r => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>
  </>
)

/* ---------------------------------------------------------------- VARIANT C */
/* "Trechter" — narrow editorial column, poster contained rather than bleeding,
   and one sticky call to action that never leaves the screen. The poster's job
   is to get people here; this variant's job is to get them signed up. */
const VariantC = () => (
  <>
    <div className="dp-c">
      <div className="dp-c__col">
        <p className="dp-c__kicker">{darts.tagline}</p>
        <h1>{darts.titel}</h1>
        <p className="dp-c__lead">
          {darts.datum.tekst} — {darts.waar.naam}. {darts.formule.ploeg}, {darts.formule.ontmoeting}.
        </p>
        <img className="dp-c__poster" src={POSTER} alt="EK Darts 2026" />
        <h2>Wat het is</h2>
        <p>
          {darts.formule.verloop}. Gegarandeerd meerdere wedstrijden, kwalificatie en eindronde voor iedereen, mooie
          prijzen en een vette afterparty.
        </p>
        <h2>Uren</h2>
        <p>
          Deuren <Todo>{uren.deuren}</Todo>, eerste worp <Todo>{uren.eersteWorp}</Todo>, prijsuitreiking{` `}
          <Todo>{uren.prijsuitreiking}</Todo>.
        </p>
        <h2>Prijs</h2>
        <p>
          <Fact value={darts.prijs} />
        </p>
        <h2>Eten en drank</h2>
        <p>
          <Fact value={darts.eten} />
        </p>
        <h2>De afterparty</h2>
        <p>{darts.dj.tekst}</p>
        <h2>Reglement</h2>
        <p>
          <Fact value={darts.reglement} />
        </p>
        <ul>
          {darts.reglement.vast.map(r => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <h2>Waar</h2>
        <p>
          {darts.waar.naam}
          <br />
          {darts.waar.adres}
        </p>
      </div>
    </div>
    <div className="dp-c__sticky">
      <span>{darts.datum.tekst}</span>
      <a className="dp-c__cta" href="#inschrijven">
        Inschrijven
      </a>
    </div>
  </>
)

/* ---------------------------------------------------------------- VARIANT D */
/* THE MIX — Kevin, 2026-09-10: "Header from A, block below header more like B,
   sticky bar from C." So: A's full-bleed cover, B's hard facts panel and
   timeline underneath it instead of A's thin band, and C's sticky signup bar.
   The one thing that had to be resolved: B's panel sat BESIDE the poster and
   carried the title, because the poster was cropped. Under a full-bleed cover
   the poster already shouts the title, so the panel drops it and leads with the
   facts — repeating "EK DARTS" 200px under the affiche is the same word twice. */
const VariantD = () => (
  <>
    <div className="dp-a__cover">
      <img src={POSTER} alt="EK Darts 2026 — zaterdag 19 december" />
    </div>

    <section className="dp-d__facts">
      <div className="dp-d__facts-inner">
        <dl>
          <div>
            <dt>Wanneer</dt>
            <dd>{darts.datum.tekst}</dd>
          </div>
          <div>
            <dt>Waar</dt>
            <dd>
              {darts.waar.naam}
              <br />
              <span className="dp-d__sub">{darts.waar.adres}</span>
            </dd>
          </div>
          <div>
            <dt>Ploeg</dt>
            <dd>
              {darts.formule.ploeg}
              <br />
              <span className="dp-d__sub">{darts.formule.ontmoeting}</span>
            </dd>
          </div>
          <div>
            <dt>Prijs</dt>
            <dd>
              <Fact value={darts.prijs} />
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <div className="page__wrapper page__wrapper--limited page__section">
      <h2 className="featured-border">De dag</h2>
      <ol className="dp-b__timeline">
        <li>
          <b>
            <Todo>{uren.deuren}</Todo>
          </b>
          <span>Deuren open</span>
        </li>
        <li>
          <b>
            <Todo>{uren.eersteWorp}</Todo>
          </b>
          <span>Eerste worp — kwalificatie in groepen</span>
        </li>
        <li>
          <b>—</b>
          <span>Eindronde: {darts.formule.verloop.toLowerCase()}</span>
        </li>
        <li>
          <b>
            <Todo>{uren.prijsuitreiking}</Todo>
          </b>
          <span>Prijsuitreiking</span>
        </li>
        <li>
          <b>19.15 u</b>
          <span>{darts.dj.tekst}</span>
        </li>
      </ol>

      <h2 className="featured-border" id="inschrijven">
        Inschrijven
      </h2>
      <p>
        <Fact value={darts.inschrijven} />
      </p>

      <h2 className="featured-border">Eten en drank</h2>
      <p>
        <Fact value={darts.eten} />
      </p>

      <h2 className="featured-border">Reglement</h2>
      <p>
        <Fact value={darts.reglement} />
      </p>
      <ul>
        {darts.reglement.vast.map(r => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </div>

    <div className="dp-c__sticky">
      <span>{darts.datum.tekst}</span>
      <a className="dp-c__cta" href="#inschrijven">
        Inschrijven
      </a>
    </div>
  </>
)

/* ------------------------------------------------------------ THE SWITCHER  */
const VARIANTS: Record<string, { name: string; render: () => JSX.Element }> = {
  A: { name: `Affiche eerst`, render: () => <VariantA /> },
  B: { name: `Scorebord`, render: () => <VariantB /> },
  C: { name: `Trechter`, render: () => <VariantC /> },
  D: { name: `De mix (A+B+C)`, render: () => <VariantD /> },
}
const KEYS = Object.keys(VARIANTS)

const Switcher = ({ current }: { current: string }) => {
  const go = (step: number) => {
    const i = (KEYS.indexOf(current) + step + KEYS.length) % KEYS.length
    navigate(`?variant=${KEYS[i]}`, { replace: true })
  }
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t && (t.tagName === `INPUT` || t.tagName === `TEXTAREA` || t.isContentEditable)) return
      if (e.key === `ArrowLeft`) go(-1)
      if (e.key === `ArrowRight`) go(1)
    }
    window.addEventListener(`keydown`, onKey)
    return () => window.removeEventListener(`keydown`, onKey)
  })
  return (
    <div className="dp__switcher">
      <button onClick={() => go(-1)} aria-label="Vorige variant">
        ←
      </button>
      <span>
        {current} — {VARIANTS[current].name}
      </span>
      <button onClick={() => go(1)} aria-label="Volgende variant">
        →
      </button>
    </div>
  )
}

const DartsPrototype = ({ location }: { location: { search: string } }) => {
  const asked = new URLSearchParams(location.search).get(`variant`) ?? `D`
  const current = KEYS.includes(asked) ? asked : `D`
  return (
    <Layout>
      {VARIANTS[current].render()}
      {/* Gated so a stray merge can never ship the bar to a visitor. */}
      {process.env.NODE_ENV !== `production` && <Switcher current={current} />}
    </Layout>
  )
}

export default DartsPrototype
export const Head = () => <Seo title="PROTOTYPE — EK Darts 2026" path="/darts-prototype/" />
