import { SectionLabel } from './site.jsx';
import { Cards, Palette, Principles, Screen, Steps, StudyHero, useLightbox } from './caseStudyKit.jsx';

/* Prism AI case study. Copy and screens come from the Prism UX/UI case study
   (Figma Make); the layout uses the portfolio's own case study styles. */

const screens = {
  home: ['prism/home', 'Prism home with suggested tasks'],
  answer: ['prism/answer', 'Prism competitive insights answer', 'tall'],
  detail: ['prism/detail', 'Prism detailed answer chart'],
  prompts: ['prism/prompts', 'Prism prompt library and editor'],
  files: ['prism/files', 'Prism workspace files'],
  bookmarks: ['prism/bookmarks', 'Prism workspace bookmarks'],
  settings: ['prism/settings', 'Prism organization settings'],
};

export const prismSections = [
  ['overview', 'Overview'],
  ['challenge', 'Challenge'],
  ['principles', 'Principles'],
  ['experience', 'Experience Map'],
  ['solution', 'Solution'],
  ['clarity', 'Clarity'],
  ['reuse', 'Reuse'],
  ['system', 'Visual Language'],
  ['screens', 'Screens'],
  ['reflection', 'Reflection'],
];

export function PrismHero({ project }) {
  return (
    <StudyHero
      project={project}
      subtitle="From complex data to confident decisions."
      intro="Prism brings campaign questions, AI-generated answers and reusable knowledge into a single workspace for performance marketing teams."
      meta={[
        ['Product', 'Pixis Prism'],
        ['Domain', 'AI-powered marketing intelligence'],
        ['Experience', 'Desktop web platform'],
        ['Role', 'Product design · Design systems'],
        ['Focus', 'Ask · Understand · Reuse'],
      ]}
      image={['prism/home', 'Prism home dashboard']}
      kicker="Product design / Case study"
      highlights={[
        ['Ask', 'Start with a question, not a report.'],
        ['Understand', 'Keep accounts and sources in view.'],
        ['Reuse', 'Save useful work for the next task.'],
      ]}
    />
  );
}

export function PrismContent() {
  const { show, lightbox } = useLightbox();
  return (
    <>
      <section className="cs-section" id="overview">
        <SectionLabel index={1}>OVERVIEW</SectionLabel>
        <h2 className="cs-heading">A clearer lens on marketing performance.</h2>
        <div className="cs-split">
          <p className="cs-lead">Prism brings campaign questions, AI-generated answers and reusable knowledge into a single workspace for performance marketing teams.</p>
          <aside className="cs-aside">
            <div className="cs-role"><span className="mono">PRODUCT</span><p>Pixis Prism — AI-powered marketing intelligence, designed as a desktop web platform.</p></div>
            <div className="cs-callout"><span className="mono">DESIGN FOCUS</span><p>Ask · Understand · Reuse</p></div>
          </aside>
        </div>
        <Cards items={[
          ['Ask naturally', 'Start with a question, not a report.'],
          ['See the context', 'Keep accounts and sources in view.'],
          ['Build on answers', 'Save useful work for the next task.'],
        ]} />
      </section>

      <section className="cs-section" id="challenge">
        <SectionLabel index={2}>THE DESIGN CHALLENGE</SectionLabel>
        <h2 className="cs-heading">More information is not the same as more clarity.</h2>
        <div className="cs-question"><span className="mono">GUIDING QUESTION</span><p>How might we help marketers move from a campaign question to an understandable, reusable answer — without losing the context behind it?</p></div>
        <Cards dark numbered items={[
          ['01', 'Where do I begin?', 'A blank input needs useful starting points, not more complexity.'],
          ['02', 'What am I looking at?', 'An answer needs hierarchy, evidence and a clear account context.'],
          ['03', 'How do I use this again?', 'Prompts, files and saved conversations need a place in the workflow.'],
        ]} />
      </section>

      <section className="cs-section" id="principles">
        <SectionLabel index={3}>DESIGN PRINCIPLES</SectionLabel>
        <h2 className="cs-heading">Less friction. More focus.</h2>
        <Principles items={[
          ['01 / START', 'A question, not a query builder.', 'Natural-language input and suggested tasks make the first step feel approachable.'],
          ['02 / UNDERSTAND', 'Context stays close.', 'Account selectors, answer structure and source tabs support a more transparent experience.'],
          ['03 / REUSE', 'Good work compounds.', 'Prompts, uploaded files and bookmarks turn isolated tasks into a reusable workspace.'],
        ]} />
        <p className="cs-note mono">Three principles, carried from the first question to the next session.</p>
      </section>

      <section className="cs-section" id="experience">
        <SectionLabel index={4}>EXPERIENCE MAP</SectionLabel>
        <h2 className="cs-heading">From intent to insight.</h2>
        <p className="cs-statement">A connected workflow, with reusable knowledge alongside the conversation.</p>
        <Steps accent={3} steps={[
          ['Choose context', 'Select account and data sources.'],
          ['Ask or explore', 'Type a question or use a suggested task.'],
          ['Understand', 'Read answers, inspect steps and sources.'],
          ['Keep the value', 'Bookmark, share, export or reuse a prompt.'],
        ]} />
        <p className="cs-toward"><span className="mono">WORKSPACE</span>Prompts / Files / Bookmarks — persistent tools for the next question.</p>
      </section>

      <section className="cs-section" id="solution">
        <SectionLabel index={5}>THE SOLUTION</SectionLabel>
        <h2 className="cs-heading">One workspace. Many ways in.</h2>
        <Screen image={screens.home} label="Home & suggested tasks" onOpen={show} />
        <div className="cs-captions mono"><span>Natural-language input</span><span>Task-based starting points</span><span>Persistent workspace tools</span></div>
      </section>

      <section className="cs-section" id="clarity">
        <SectionLabel index={6}>CONVERSATION AND CLARITY</SectionLabel>
        <h2 className="cs-heading">Answers with a visible foundation.</h2>
        <p className="cs-statement">Not just a response. A place to understand it.</p>
        <div className="cs-clarity">
          <div>
            <h3 className="cs-subhead">Read the story. Inspect the evidence.</h3>
            <p className="cs-body">Answers, Steps and Sources create distinct layers of detail. Charts and tables give complex information a more scannable structure.</p>
            <Screen image={screens.detail} label="Detailed answer" sizes="(max-width: 900px) 100vw, 40vw" onOpen={show} />
            <h4 className="cs-minihead">A consistent frame for detailed answers</h4>
            <p className="cs-body small">The composer stays within reach, while bookmarking, sharing and exporting sit above the conversation.</p>
          </div>
          <Screen image={screens.answer} label="Competitive insights · chart, narrative and table" sizes="(max-width: 900px) 100vw, 35vw" className="is-tall" onOpen={show} />
        </div>
      </section>

      <section className="cs-section" id="reuse">
        <SectionLabel index={7}>REUSABLE INTELLIGENCE</SectionLabel>
        <h2 className="cs-heading">A good question is worth keeping.</h2>
        <p className="cs-statement">A library for repeatable work — with filters, pinned prompts and an editable preview.</p>
        <Screen image={screens.prompts} label="Prompt library & editor" onOpen={show} />
        <Cards items={[
          ['Find', 'Filter by platform, category and ownership.'],
          ['Refine', 'Edit prompt details and variables.'],
          ['Run', 'Bring a repeatable task back into the flow.'],
        ]} />
      </section>

      <section className="cs-section" id="system">
        <SectionLabel index={8}>VISUAL LANGUAGE</SectionLabel>
        <h2 className="cs-heading">A calm surface for complex work.</h2>
        <p className="cs-statement">Warm neutrals, restrained teal and consistent patterns let the information lead.</p>
        <Palette items={[
          ['Deep ink', '#072929'],
          ['Action teal', '#136D6D'],
          ['Warm surface', '#F5F5F0', null, true],
          ['Supporting text', '#556179'],
        ]} />
        <div className="cs-system">
          <article className="cs-card">
            <span className="mono">PRODUCT TYPOGRAPHY</span>
            <h3>PP Agrandir</h3>
            <h4>GT America Trial</h4>
            <p>The source screens pair expressive headings with compact, functional interface text.</p>
          </article>
          <article className="cs-card">
            <span className="mono">RECURRING PATTERNS</span>
            <h4>Compact navigation</h4><p>A stable rail anchors the experience.</p>
            <h4>Clear hierarchy</h4><p>Cards, tabs and tables separate levels of detail.</p>
            <h4>Consistent actions</h4><p>Teal marks the next meaningful step.</p>
          </article>
        </div>
        <p className="cs-note mono">Palette and type families observed in the Prism screens.</p>
      </section>

      <section className="cs-section" id="screens">
        <SectionLabel index={9}>SELECTED SCREENS</SectionLabel>
        <h2 className="cs-heading">The experience, end to end.</h2>
        <p className="cs-statement">Real screens from the Prism design — from the first question to a connected workspace.</p>
        <div className="cs-gallery">
          {[
            ['home', '01 / Home & suggested tasks'],
            ['prompts', '02 / Prompt library & editor'],
            ['detail', '03 / Detailed answer'],
            ['files', '04 / Workspace · Files'],
            ['bookmarks', '05 / Workspace · Bookmarks'],
            ['settings', '06 / Organization settings'],
          ].map(([shot, label]) => <Screen key={shot} image={screens[shot]} label={label} sizes="(max-width: 900px) 100vw, 35vw" onOpen={show} />)}
        </div>
        <p className="cs-note mono">A shared navigation model connects conversation, knowledge and administration.</p>
      </section>

      <section className="cs-section" id="reflection">
        <SectionLabel index={10}>DESIGN REFLECTION</SectionLabel>
        <h2 className="cs-heading">Make intelligence useful. Then make it reusable.</h2>
        <Cards items={[
          ['Guide the first step', 'Suggested tasks give natural-language input a practical starting point.'],
          ['Make depth optional', 'A clear answer comes first; steps and sources are there when needed.'],
          ['Design beyond one session', 'Prompts, files and bookmarks preserve the value of ongoing work.'],
        ]} />
        <p className="cs-closing">PRISM<span className="accent">A clearer path from question to understanding.</span></p>
      </section>

      {lightbox}
    </>
  );
}
