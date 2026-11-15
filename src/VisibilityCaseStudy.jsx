import { SectionLabel, responsiveImage } from './site.jsx';
import { Cards, Palette, Principles, Screen, Steps, StudyHero, useLightbox } from './caseStudyKit.jsx';

/* Visibility case study. Copy and screens come from the Visibility interactive
   case study (Figma Make); the layout uses the portfolio's own case study styles. */

const screens = {
  overview: ['visibility/overview', 'Visibility website overview'],
  onboarding: ['visibility/onboarding', 'Pixis Visibility account creation'],
  strategy: ['visibility/strategy', 'Strategy Brain'],
  geo: ['visibility/geo', 'GEO visibility dashboard', 'tall'],
  content: ['visibility/content', 'Strategic content plan'],
  technical: ['visibility/technical', 'Technical SEO overview'],
  report: ['visibility/report', 'Impact tracking report'],
};

export const visibilitySections = [
  ['overview', 'Overview'],
  ['challenge', 'Challenge'],
  ['principles', 'Principles'],
  ['journey', 'Product Journey'],
  ['onboarding', 'Onboarding'],
  ['strategy', 'Strategy'],
  ['intelligence', 'AI Visibility'],
  ['execution', 'Execution'],
  ['impact', 'Health & Impact'],
  ['system', 'Visual Language'],
  ['outcomes', 'Outcomes'],
];

export function VisibilityHero({ project }) {
  return (
    <StudyHero
      project={project}
      subtitle="Make every search a chance to be discovered."
      intro="SEO + generative engine optimization, in one connected workspace."
      meta={[
        ['Product', 'Pixis Visibility'],
        ['Focus', 'SEO · GEO · Content operations'],
        ['Case study', 'UX / UI'],
        ['Role', 'Product design · UX strategy'],
      ]}
      image={screens.overview}
      kicker="UX / UI case study"
      highlights={[
        ['Understand', 'Search and AI visibility.'],
        ['Act', 'Content and site fixes.'],
        ['Measure', 'Performance and impact.'],
      ]}
    />
  );
}

export function VisibilityContent() {
  const { show, lightbox } = useLightbox();
  return (
    <>
      <section className="cs-section" id="overview">
        <SectionLabel index={1}>PRODUCT OVERVIEW</SectionLabel>
        <h2 className="cs-heading">One workspace. A wider view of discovery.</h2>
        <div className="cs-split">
          <p className="cs-lead">Visibility connects traditional search performance with how brands appear in AI-generated answers — then brings strategy, content and technical fixes into the same workflow.</p>
          <aside className="cs-aside">
            <div className="cs-role"><span className="mono">PRODUCT</span><p>Pixis Visibility</p></div>
            <div className="cs-callout"><span className="mono">FOCUS</span><p>SEO · GEO · Content operations</p></div>
          </aside>
        </div>
        <Cards cols={4} items={[
          ['Understand', 'Search and AI visibility'],
          ['Prioritize', 'Business-led strategy'],
          ['Execute', 'Content and site fixes'],
          ['Measure', 'Performance and impact'],
        ]} />
        <p className="cs-note mono">Design walkthrough based on the existing product screens. Interface data is illustrative, not evidence of measured results.</p>
      </section>

      <section className="cs-section" id="challenge">
        <SectionLabel index={2}>THE CHALLENGE</SectionLabel>
        <h2 className="cs-heading">Being found is no longer just about ranking.</h2>
        <p className="cs-statement">The design challenge: help teams understand where they show up, where they are missing, and what to do next — across search engines and AI answers.</p>
        <Cards dark numbered items={[
          ['01', 'A fragmented picture', 'SEO metrics, AI mentions and site health answer different parts of the same question.'],
          ['02', 'Signal without direction', 'Scores become useful when a team can connect them to a clear next action.'],
          ['03', 'An open loop', 'Strategy, production and reporting need to stay connected as work moves forward.'],
        ]} />
      </section>

      <section className="cs-section" id="principles">
        <SectionLabel index={3}>DESIGN PRINCIPLES</SectionLabel>
        <h2 className="cs-heading">From more information to a clearer next move.</h2>
        <Principles items={[
          ['01 / CLARITY', 'A useful signal. An obvious action.', 'Pair visibility and health indicators with a path into analysis, planning or remediation.'],
          ['02 / CONTEXT', 'Start with the business', 'Let audience, brand voice and priorities shape the strategy.'],
          ['03 / CONTINUITY', 'Keep the loop connected', 'Move from insight to production, then back to performance.'],
        ]} />
      </section>

      <section className="cs-section" id="journey">
        <SectionLabel index={4}>A CONNECTED PRODUCT JOURNEY</SectionLabel>
        <h2 className="cs-heading">Not another dashboard. A continuous workflow.</h2>
        <p className="cs-statement">The product is organized around the work: set context, understand performance, make a plan, and act on it.</p>
        <Steps accent={0} steps={[
          ['Set context', 'Onboarding + Strategy Brain'],
          ['Find the gaps', 'Website overview + GEO intelligence'],
          ['Plan the work', 'Content calendar + briefs and drafts'],
          ['Improve the site', 'Technical SEO + automations'],
          ['Review impact', 'Reports + performance tracking'],
        ]} />
        <p className="cs-toward"><span className="mono">THE LOOP</span>Measure → learn → refine the strategy</p>
      </section>

      <section className="cs-section" id="onboarding">
        <SectionLabel index={5}>ONBOARDING</SectionLabel>
        <h2 className="cs-heading">Start with a promise. Make the first step simple.</h2>
        <p className="cs-statement">A focused account form pairs with a clear explanation of the value: visibility across search, AI answers, content and site health.</p>
        <Screen image={screens.onboarding} label="Account creation" onOpen={show} />
      </section>

      <section className="cs-section" id="strategy">
        <SectionLabel index={6}>BUSINESS-LED STRATEGY</SectionLabel>
        <h2 className="cs-heading">Give the intelligence some business context.</h2>
        <p className="cs-statement">Audience, voice and objectives define the starting point. Strategy sliders make prioritization explicit.</p>
        <Screen image={screens.strategy} label="Strategy Brain" onOpen={show} />
      </section>

      <section className="cs-section" id="intelligence">
        <SectionLabel index={7}>AI VISIBILITY INTELLIGENCE</SectionLabel>
        <h2 className="cs-heading">See how AI sees your brand.</h2>
        <p className="cs-statement">A dedicated GEO view brings market share, position, model coverage and sentiment together.</p>
        <div className="cs-clarity is-tall-first">
          <Screen image={screens.geo} label="GEO visibility" sizes="(max-width: 900px) 100vw, 40vw" className="is-tall" onOpen={show} />
          <div className="cs-points">
            {[
              ['01', 'Make coverage tangible', 'Compare visibility across OpenAI, Google and Perplexity in a shared view.'],
              ['02', 'Add meaning to mentions', 'Position and brand sentiment add context beyond a single aggregate score.'],
              ['03', 'Let the detail unfold', 'Tabs and filters separate visibility, prompt results, competitors and sentiment.'],
            ].map(([n, title, copy]) => (
              <article key={n}>
                <span className="mono">{n}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section" id="execution">
        <SectionLabel index={8}>FROM STRATEGY TO EXECUTION</SectionLabel>
        <h2 className="cs-heading">Turn the backlog into a visible plan.</h2>
        <p className="cs-statement">30, 60 and 90-day horizons make near-term priorities and longer-term authority building visible in the same board.</p>
        <Screen image={screens.content} label="Strategic content plan" onOpen={show} />
      </section>

      <section className="cs-section" id="impact">
        <SectionLabel index={9}>TECHNICAL HEALTH + IMPACT</SectionLabel>
        <h2 className="cs-heading">Fix what holds you back. See what changes.</h2>
        <p className="cs-statement">Prioritized technical issues on one side. Performance over time on the other. Two views that bring the workflow back to evidence.</p>
        <div className="cs-gallery">
          <Screen image={screens.technical} label="Technical SEO" caption="Ranked issues and remediation paths" sizes="(max-width: 900px) 100vw, 35vw" onOpen={show} />
          <Screen image={screens.report} label="Reports" caption="Clicks, impressions and query performance" sizes="(max-width: 900px) 100vw, 35vw" onOpen={show} />
        </div>
        <Cards items={[
          ['Diagnose', 'Health scores surface where attention is needed.'],
          ['Prioritize', 'Severity and explanations make each issue actionable.'],
          ['Review', 'Timelines and comparisons put performance in context.'],
        ]} />
      </section>

      <section className="cs-section" id="system">
        <SectionLabel index={10}>VISUAL LANGUAGE</SectionLabel>
        <h2 className="cs-heading">A calm frame for complex information.</h2>
        <p className="cs-statement">Deep teal anchors the interface. Soft neutral surfaces and lilac accents give dense tables, scores and status indicators room to breathe.</p>
        <Palette items={[
          ['Deep teal', '#092d2d', 'Structure + emphasis'],
          ['Action teal', '#156d6d', 'Primary actions'],
          ['Soft lilac', '#ccbaff', 'Ambient accents', true],
          ['Warm neutral', '#ecede7', 'Quiet surfaces', true],
        ]} />
        <button type="button" className="cs-crop" onClick={() => show(screens.overview)} aria-label="Enlarge: website overview metrics">
          <img {...responsiveImage('visibility/overview', '(max-width: 900px) 100vw, 70vw')} alt="Website overview metrics detail" loading="lazy" />
        </button>
      </section>

      <section className="cs-section" id="outcomes">
        <SectionLabel index={11}>DESIGN OUTCOMES</SectionLabel>
        <h2 className="cs-heading">From being visible to knowing what’s next.</h2>
        <p className="cs-statement">A connected system for understanding discovery, choosing priorities and moving work forward.</p>
        <Cards dark numbered items={[
          ['01', 'A shared picture', 'Search performance, AI visibility and technical health in one product.'],
          ['02', 'A path into action', 'Business context flows into content planning and prioritized fixes.'],
          ['03', 'A visible feedback loop', 'Reports reconnect execution with performance over time.'],
        ]} />
        <p className="cs-closing">PIXIS / VISIBILITY<span className="accent">UX / UI case study.</span></p>
      </section>

      {lightbox}
    </>
  );
}
