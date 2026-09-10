/* /darts — EK Darts 2026, zaterdag 19 december.
 *
 * This URL is printed as a QR on the affiche, so it must answer 200 from the
 * moment the posters are handed out. Half the facts are still undecided; they
 * render dimmed with "nog te beslissen" rather than being hidden, so the page is
 * honest instead of broken. Editing `src/data/darts.json` is the whole update
 * mechanism — no code change is needed to land a price or a start hour.
 *
 * ⚠️ `darts.json` is a COPY. The source of truth is
 * personal-development/.scratch/darts-tournament/content/darts.json, and the
 * Next.js site holds the other copy. Never edit this file's facts here: edit the
 * source, then copy it to both. Two pages that disagree are worse than one page.
 *
 * Layout decided by prototype 2026-09-10 (branch prototype/darts-page,
 * ?variant=A|B|C|D): full-bleed affiche, one dark facts band, the day as a
 * timeline, a sticky signup bar. See issue 21 in the darts map.
 *
 * On the component kit: this site is being replaced by the Next.js build, and
 * the bar here is visual consistency, not reuse (Kevin, 2026-09-10). So it uses
 * the site's own classes and custom properties — page__wrapper--limited,
 * page__section, featured-border, --color-green--bright — and does not take on
 * Hero/Card/EventCard. The Next.js page is the one held to the strict rule.
 */
import React from "react"
import { Seo } from "../components/Seo"
import Layout from "../layouts"
import darts from "../data/darts.json"
import "./darts.scss"

const POSTER = `/darts/poster-liggend.jpg`

/* The affiche carries the date, the bullets and the QR as pixels, so the alt
   text carries them too. A short alt would drop the whole poster for anyone who
   cannot see it. */
const POSTER_ALT =
  `Affiche EK Darts 2026 — zaterdag 19 december 2026, kantine KCVV Elewijt. ` +
  `Teams van vier personen, gegarandeerd meerdere wedstrijden, kwalificatie en ` +
  `eindronde voor iedereen, mooie prijzen en een vette afterparty.`

type Undecided = { todo?: boolean; dummy?: string }

/* An undecided fact is shown, never hidden — the same convention affiche-copy.md
   uses for the poster, so the two surfaces mark a missing decision identically. */
const Todo = ({ children }: { children: React.ReactNode }) => (
  <span className="darts__todo" title="Nog niet beslist">
    {children}
  </span>
)

const Fact = ({ value }: { value: Undecided | string }) =>
  typeof value === `string` ? <>{value}</> : value.todo ? <Todo>{value.dummy}</Todo> : <>{value.dummy}</>

const uren = darts.uren.dummy

const DartsPage = () => (
  <Layout>
    <div className="darts__cover">
      <img src={POSTER} alt={POSTER_ALT} />
    </div>

    <section className="darts__facts" aria-label="Praktisch">
      <div className="darts__facts-inner">
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
              <span className="darts__sub">{darts.waar.adres}</span>
            </dd>
          </div>
          <div>
            <dt>Ploeg</dt>
            <dd>
              {darts.formule.ploeg}
              <br />
              <span className="darts__sub">{darts.formule.ontmoeting}</span>
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

    <div className="page__wrapper page__wrapper--limited page__section darts__body">
      <h2 className="featured-border">De dag</h2>
      <ol className="darts__timeline">
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
          <span>{darts.formule.verloop}</span>
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

      <h2 className="featured-border">Waar</h2>
      <p>
        {darts.waar.naam}
        <br />
        {darts.waar.adres}
      </p>

      <p className="darts__legal">{darts.wettelijk.regel}</p>
    </div>

    <div className="darts__sticky">
      <span>{darts.datum.tekst}</span>
      <a className="darts__cta" href="#inschrijven">
        Inschrijven
      </a>
    </div>
  </Layout>
)

export default DartsPage

export const Head = () => (
  <Seo
    title="EK Darts 2026 — zaterdag 19 december"
    description={`${darts.tagline}. ${darts.datum.tekst}, ${darts.waar.naam}. ${darts.formule.ploeg}, ${darts.formule.ontmoeting}.`}
    path="/darts/"
    /* Seo wants {src,width,height}, not a URL. Note it hard-codes
       og:image:type as image/png for every page; this one is a JPG. Scrapers
       sniff the bytes, so it renders — not worth patching a shared component on
       a site being replaced. */
    image={{ src: POSTER, width: 1920, height: 1080 }}
  />
)
