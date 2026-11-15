import { SectionLabel } from './site.jsx';
import { Cards, Palette, Principles, Screen, Steps, StudyHero, useLightbox } from './caseStudyKit.jsx';

/* Adroom case study. Copy and screens come from the Adroom product design case
   study (Figma Make); the layout uses the portfolio's own case study styles. */

const screens = {
  analysis: ['adroom/analysis', 'Adroom ad activity analysis'],
  home: ['adroom/home', 'Adroom AI creation home'],
  brands: ['adroom/brands', 'Adroom monitored brands dashboard'],
  overview: ['adroom/overview', 'Adroom report overview', 'tall'],
  hooks: ['adroom/hooks', 'Adroom hooks analysis'],
  resize: ['adroom/resize', 'Adroom AI resize workspace'],
  loading: ['adroom/loading', 'Adroom loading state'],
  recovery: ['adroom/recovery', 'Adroom empty state'],
};

export const adroomSections = [
  ['overview', 'Overview'],
  ['challenge', 'Challenge'],
  ['principles', 'Principles'],
  ['architecture', 'Architecture'],
  ['create', 'Create with AI'],
  ['competitors', 'Competitor Intelligence'],
  ['direction', 'Data to Direction'],
  ['control', 'Creative Control'],
  ['system', 'Visual Language'],
  ['states', 'States & Feedback'],
  ['takeaways', 'Takeaways'],
];

export function AdroomHero({ project }) {
  return (
    <StudyHero
      project={project}
      subtitle="From creative possibility to a clearer next move."
      intro="Adroom brings AI-assisted ad creation, competitor intelligence and hands-on editing into one product experience."
      meta={[
        ['Product', 'Adroom'],
        ['Experience', 'Desktop workspace'],
        ['Domain', 'AI-assisted creative tools'],
        ['Role', 'Product design'],
        ['Focus', 'Create · Compare · Control'],
      ]}
      image={screens.analysis}
      kicker="Product design / Case study"
      highlights={[
        ['Create', 'AI ad generation for every kind of creative.'],
        ['Compare', 'Competitor intelligence in one scannable view.'],
        ['Control', 'Hands-on editing that keeps the final say.'],
      ]}
    />
  );
}

export function AdroomContent() {
  const { show, lightbox } = useLightbox();
  return (
    <>
      <section className="cs-section" id="overview">
        <SectionLabel index={1}>PROJECT OVERVIEW</SectionLabel>
        <h2 className="cs-heading">One workspace. More ways to move an idea forward.</h2>
        <div className="cs-split">
          <p className="cs-lead">Adroom brings AI-assisted ad creation, competitor intelligence and hands-on editing into one product experience.</p>
          <aside className="cs-aside">
            <div className="cs-role"><span className="mono">THE DESIGN STORY</span><p>Product experience · Desktop workspace · AI-assisted creative tools</p></div>
          </aside>
        </div>
        <Cards numbered items={[
          ['01', 'AI ad generation'],
          ['02', 'Competitor insights'],
          ['03', 'Creative editing'],
        ]} />
        <p className="cs-note mono">A screen-led walkthrough of the existing Adroom design.</p>
      </section>

      <section className="cs-section" id="challenge">
        <SectionLabel index={2}>THE DESIGN CHALLENGE</SectionLabel>
        <h2 className="cs-heading">More tools should not mean more decisions.</h2>
        <p className="cs-statement">The design challenge is to help marketers find a starting point, understand the competitive landscape and stay in control of what they create.</p>
        <Cards dark numbered items={[
          ['01', 'A wide starting field', 'Prompts, UGC, video and product imagery need a clear place to begin.'],
          ['02', 'Signals without the noise', 'Dense ad libraries and reports need hierarchy, not another layer of complexity.'],
          ['03', 'Automation with agency', 'AI should speed up production without hiding the controls that matter.'],
        ]} />
      </section>

      <section className="cs-section" id="principles">
        <SectionLabel index={3}>DESIGN PRINCIPLES</SectionLabel>
        <h2 className="cs-heading">Make the next step feel obvious.</h2>
        <Principles items={[
          ['01 / INTENT', 'Start with intent.', 'Group creation paths around the thing someone wants to make.'],
          ['02 / LAYERS', 'Reveal in layers.', 'Move from brands, to an overview, to focused analytical detail.'],
          ['03 / CONTROL', 'Keep control close.', 'Bring resizing, selection and refinement into the creative workspace.'],
        ]} />
      </section>

      <section className="cs-section" id="architecture">
        <SectionLabel index={4}>EXPERIENCE ARCHITECTURE</SectionLabel>
        <h2 className="cs-heading">Two entry points. One creative loop.</h2>
        <p className="cs-statement">Start with an idea or start with a competitor. Both paths support a more informed creative decision.</p>
        <Steps accent={2} steps={[
          ['Choose a starting point', 'AI creation or competitor intelligence', 'Explore'],
          ['Find the useful signal', 'Prompts, ad activity and creative patterns', 'Understand'],
          ['Make it your own', 'Edit, resize and prepare the creative', 'Refine'],
        ]} />
      </section>

      <section className="cs-section" id="create">
        <SectionLabel index={5}>CREATE WITH AI</SectionLabel>
        <h2 className="cs-heading">A starting point for every kind of creative.</h2>
        <p className="cs-statement">A prompt-led home pairs a broad invitation with concrete paths: full ads, UGC videos, video ads and product imagery.</p>
        <Screen image={screens.home} label="AI creation home" caption="Intent-led categories turn a wide capability set into a browsable starting point." onOpen={show} />
      </section>

      <section className="cs-section" id="competitors">
        <SectionLabel index={6}>COMPETITOR INTELLIGENCE</SectionLabel>
        <h2 className="cs-heading">See the landscape. Find your next angle.</h2>
        <p className="cs-statement">A dedicated entry point introduces the value of competitor intelligence, then brings monitored brands into a single, scannable view.</p>
        <Screen image={screens.brands} label="Monitored brands" caption="A clear inventory of brands, platforms, media mix and available reports." onOpen={show} />
      </section>

      <section className="cs-section" id="direction">
        <SectionLabel index={7}>FROM DATA TO DIRECTION</SectionLabel>
        <h2 className="cs-heading">A wide view. A focused answer.</h2>
        <p className="cs-statement">A report overview sets the context. Dedicated modules make it possible to go deeper into ad activity, positioning and hooks.</p>
        <div className="cs-clarity is-tall-first">
          <Screen image={screens.overview} label="Report overview" sizes="(max-width: 900px) 100vw, 30vw" className="is-tall" onOpen={show} />
          <div>
            <p className="cs-kicker mono">OVERVIEW → DETAIL</p>
            <h3 className="cs-subhead">Bring hierarchy to dense information.</h3>
            <p className="cs-body">Persistent navigation keeps the wider report in reach while each module concentrates on one kind of question.</p>
            <Screen image={screens.analysis} label="Ad activity" caption="Ad activity / cadence, lifespan and platform distribution" sizes="(max-width: 900px) 100vw, 45vw" onOpen={show} />
            <Screen image={screens.hooks} label="Hooks" sizes="(max-width: 900px) 100vw, 45vw" onOpen={show} />
          </div>
        </div>
      </section>

      <section className="cs-section" id="control">
        <SectionLabel index={8}>CREATIVE CONTROL</SectionLabel>
        <h2 className="cs-heading">AI gets you started. The workspace keeps you in control.</h2>
        <p className="cs-statement">The editor keeps the creative central, with format presets and AI-assisted resizing available in a focused side panel.</p>
        <Screen image={screens.resize} label="AI resize workspace" caption="Select a format → refine the result → choose what belongs on the canvas." onOpen={show} />
      </section>

      <section className="cs-section" id="system">
        <SectionLabel index={9}>VISUAL LANGUAGE</SectionLabel>
        <h2 className="cs-heading">A calm frame for expressive work.</h2>
        <p className="cs-statement">Dark surfaces let creative assets take focus. Teal actions, cool gradients and consistent typography connect the workspace.</p>
        <Palette items={[
          ['Workspace', '#090E14'],
          ['Raised surface', '#222934'],
          ['Teal / F35', '#278F8F'],
          ['Blue atmosphere', 'linear-gradient(#478ab1, #204084)', 'Local gradient'],
        ]} />
        <div className="cs-type-card">
          <strong>Aa</strong>
          <div>
            <span className="mono">TYPOGRAPHY</span>
            <h3>Inter</h3>
            <p>A shared sans-serif voice across navigation, controls and analytical detail.</p>
          </div>
        </div>
      </section>

      <section className="cs-section" id="states">
        <SectionLabel index={10}>STATES AND FEEDBACK</SectionLabel>
        <h2 className="cs-heading">Design for the moments between results.</h2>
        <p className="cs-statement">The experience includes loading and empty states—not only the populated dashboard.</p>
        <div className="cs-gallery">
          <div>
            <Screen image={screens.loading} label="Loading state" sizes="(max-width: 900px) 100vw, 35vw" onOpen={show} />
            <h3 className="cs-minihead">01 / While the work is happening</h3>
            <p className="cs-body small">A dedicated loading state holds the workspace while content is prepared.</p>
          </div>
          <div>
            <Screen image={screens.recovery} label="Empty state" sizes="(max-width: 900px) 100vw, 35vw" onOpen={show} />
            <h3 className="cs-minihead">02 / When there is no data yet</h3>
            <p className="cs-body small">An empty state explains why data is absent and when it will become available.</p>
          </div>
        </div>
      </section>

      <section className="cs-section" id="takeaways">
        <SectionLabel index={11}>DESIGN TAKEAWAYS</SectionLabel>
        <h2 className="cs-heading">Make complexity useful. Keep creativity human.</h2>
        <Cards dark numbered items={[
          ['01', 'Lead with intent', 'A clear starting point matters more than exposing every capability at once.'],
          ['02', 'Give data a hierarchy', 'Overviews establish context; focused modules support deeper questions.'],
          ['03', 'Preserve the final say', 'AI-assisted creation works best alongside visible, familiar creative controls.'],
        ]} />
        <p className="cs-toward"><span className="mono">NEXT TO VALIDATE</span>Time to first creative · Report comprehension · Resize acceptance</p>
        <p className="cs-closing">ADROOM<span className="accent">Product design case study.</span></p>
      </section>

      {lightbox}
    </>
  );
}
