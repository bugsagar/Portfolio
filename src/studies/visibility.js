// Visibility. Copy is from the Visibility interactive case study; the
// Userbase, Research, Audit and Workflow sections are drafted from it and should be
// checked against the real project before they are treated as findings.

const img = {
  overview: ['visibility/overview', 'Visibility website overview'],
  onboarding: ['visibility/onboarding', 'Pixis Visibility account creation'],
  strategy: ['visibility/strategy', 'Strategy Brain'],
  geo: ['visibility/geo', 'GEO visibility dashboard', 'tall'],
  content: ['visibility/content', 'Strategic content plan'],
  technical: ['visibility/technical', 'Technical SEO overview'],
  report: ['visibility/report', 'Impact tracking report'],
};

export default {
  subtitle: 'Make every search a chance to be discovered',
  intro: [
    'Visibility connects traditional search performance with how brands appear in AI-generated answers — ',
    'then brings strategy, content and technical fixes into the same workflow',
    '. SEO and generative engine optimization, in one connected workspace.',
  ],
  meta: [['Product', 'Pixis Visibility'], ['Focus', 'SEO · GEO · Content operations'], ['Scope', 'UX strategy, Product design, Information architecture']],
  hero: img.overview,
  note: 'Design walkthrough based on the existing product screens. Interface data is illustrative, not evidence of measured results.',
  challenge: 'Being found is no longer just about ranking. The challenge: help teams understand where they show up, where they are missing, and what to do next — across search engines and AI answers.',
  goals: [
    ['Understand', 'Search and AI visibility'],
    ['Prioritize', 'Business-led strategy'],
    ['Execute', 'Content and site fixes'],
    ['Measure', 'Performance and impact'],
  ],
  userbase: {
    title: 'Designing for Discovery Teams',
    intro: 'Visibility brings together the people who plan for discovery and the people who act on it.',
    users: [
      { icon: '🧭', title: 'SEO & content teams', copy: 'Find gaps in search and AI visibility, plan content and fix technical issues.' },
      { icon: '📊', title: 'Marketing leads', copy: 'Set business context and priorities, then review performance and impact over time.' },
    ],
  },
  research: {
    title: 'Framing the Problem',
    intro: 'Before designing screens, we framed the questions the product had to answer across search engines and AI answers.',
    questionsTitle: 'Questions we designed around',
    questions: [
      'Where does our brand show up — in search results and in AI answers?',
      'Which signals should lead to action first?',
      'How does business context change what we prioritize?',
      'How do strategy, production and reporting stay connected?',
      'What changed after we shipped the fix?',
    ],
    painTitle: 'Pain points',
    painSub: 'Distilled from the design challenge',
    pains: [
      { title: 'A fragmented picture', tone: 'green', star: true, items: ['SEO metrics, AI mentions and site health', 'Each answers a different part of the question'] },
      { title: 'Signal without direction', tone: 'blue', items: ['Scores alone don’t say what to do next', 'Needs a clear next action'] },
      { title: 'AI answers out of view', tone: 'teal', items: ['No shared view of model coverage', 'Position and sentiment missing'] },
      { title: 'An open loop', tone: 'lilac', items: ['Strategy, production and reporting drift apart', 'Work loses its link to results'] },
    ],
  },
  audit: {
    title: 'Auditing the Website Overview',
    intro: 'What each part of the overview does, and how it points a team towards the next move.',
    image: img.overview,
    notes: [
      { x: 16, y: 27, title: 'Workflow navigation', items: ['Strategy, Execute, GEO, Technical SEO and Reports', 'Organized around the work, not the data'] },
      { x: 66, y: 21, title: 'Data freshness', items: ['Last synced, next sync and latest data stay visible'] },
      { x: 38, y: 35, title: 'Headline metrics', items: ['Clicks, impressions, CTR and position with trends', 'Arrows flag change at a glance'] },
      { x: 57, y: 52, title: 'Opportunities needing attention', items: ['Pages tagged traffic decay, needs depth, low clicks', 'A score per page to prioritize'] },
      { x: 60, y: 88, title: 'Recent activity', items: ['Background jobs and syncs, like GEO analysis, as they run'] },
    ],
  },
  exploration: {
    title: 'Two Places to Be Found',
    intro: 'Discovery now happens in search engines and in AI answers. Designing both views side by side shaped one connected workspace.',
    options: [
      { tag: 'Search performance', copy: 'A website overview pairs headline search metrics with opportunities, top queries and recent activity.', image: img.overview },
      { tag: 'AI visibility', copy: 'A dedicated GEO view brings market share, position, model coverage and sentiment together across OpenAI, Google and Perplexity.', image: img.geo },
    ],
  },
  workflow: {
    title: 'The End-to-End Workflow',
    intro: 'Visibility is a loop, not another dashboard: set the strategy, see where you show up, plan the content, fix the site, and measure what changed. Each stage below shows who does what, the decision it turns on, and the states designed for it.',
    loop: 'What the reports show feeds back into the strategy at stage 2, and the backlog is scored again.',
    stages: [
      {
        label: 'Get started', image: img.onboarding,
        goal: 'Explain the value before asking for anything.',
        steps: [
          ['user', 'Creates an account in a short, focused form.'],
          ['system', 'Explains alongside it what the product covers: search, AI answers, content and site health.'],
        ],
        why: 'People sign up for an outcome, not a feature list, so the form sits beside the promise.',
      },
      {
        label: 'Set the strategy', image: img.strategy,
        goal: 'Turn business context into rules that score the work.',
        steps: [
          ['system', 'Guides setup in four steps: Strategy Brain, Competitors & Keywords, Prompts & Keyword Clusters, GEO Analysis Hub.'],
          ['user', 'Defines the ideal customer, objectives, brand voice, priorities and risk tolerance.'],
          ['user', 'Sets strategy sliders: short vs long term, informational vs commercial, updating vs new.'],
          ['user', 'Saves a strategic shift as a new version.'],
        ],
        decision: { q: 'How far did the sliders move?', branches: [['A little', 'Saved; the strategy stays in sync.'], ['A lot', 'A warning first: the whole page backlog will be scored again.']] },
        states: [['In sync', 'A status dot and version (v1) show which strategy is live.'], ['Reset', 'Undo slider changes before saving.'], ['Guided setup', 'Step 1 of 4, dismissable once understood.']],
        why: 'Sliders make priorities explicit, and the warning makes their cost visible before it happens.',
      },
      {
        label: 'See where you show up', image: img.geo,
        goal: 'One picture across search engines and AI answers.',
        steps: [
          ['system', 'Website overview: clicks, impressions, CTR and position, with trends.'],
          ['system', 'GEO view: share, position, model coverage and sentiment across OpenAI, Google and Perplexity.'],
          ['user', 'Opens the pages flagged as opportunities: traffic decay, needs depth, low clicks.'],
        ],
        decision: { q: 'Where is the gap?', branches: [['In search', 'Plan content (stage 4).'], ['In AI answers', 'Adjust prompts and clusters, then plan content.'], ['On the site', 'Fix it (stage 5).']] },
        states: [['Freshness', 'Last synced, next sync and latest data always visible.'], ['Jobs', 'Background syncs and GEO analysis show as they run.']],
        why: 'Scores alone don’t say what to do; every metric here leads to a next action.',
      },
      {
        label: 'Plan the content', image: img.content,
        goal: 'Put quick wins and long-term authority on one board.',
        steps: [
          ['system', 'Sorts work into 30-day growth, 60-day momentum, 90-day authority and backlog.'],
          ['user', 'Switches between bucket, day, week and month views; filters by region.'],
          ['user', 'Adds a custom item, then moves on to briefs and drafts.'],
        ],
        decision: { q: 'Which horizon does it belong to?', branches: [['30 days', 'Immediate priorities and quick wins.'], ['60 days', 'Expansion and optimization.'], ['90 days', 'Long-term authority.'], ['Not yet', 'General backlog.']] },
        states: [['Overdue', 'Flagged in red with days overdue.'], ['Empty bucket', '“No items planned”, not a blank column.']],
        why: 'Horizons make trade-offs visible: the team sees what waits when something urgent comes in.',
      },
      {
        label: 'Fix the site', image: img.technical,
        goal: 'Turn every technical issue into a ranked, actionable fix.',
        steps: [
          ['system', 'Scores broken URLs, robots.txt, sitemaps, site vitals and internal links.'],
          ['system', 'Lists issues with severity and a plain explanation of why each matters.'],
          ['user', 'Opens an issue with Go, or marks it Done; runs a new analysis.'],
        ],
        decision: { q: 'What now with this issue?', branches: [['Go', 'Open the affected pages and fix it.'], ['Done', 'Mark it resolved; it leaves the list.']] },
        states: [['Severity', 'High and Medium tags rank the list.'], ['Critical score', 'Low scores are called out in words, not just numbers.'], ['Recent runs', 'A history of past analyses.']],
        why: 'An issue is only useful with its reason and a next step, so every row has both.',
      },
      {
        label: 'Measure', image: img.report,
        goal: 'Connect the work that shipped with what changed.',
        steps: [
          ['system', 'Reports clicks, impressions and query performance over time.'],
          ['user', 'Compares before and after the content and fixes.'],
          ['user', 'Takes what changed back into the strategy.'],
        ],
        why: 'Closing the loop is what makes it a workflow rather than a set of dashboards.',
      },
    ],
  },
  features: [
    { title: 'Onboarding', copy: 'A focused account form pairs with a clear explanation of the value: visibility across search, AI answers, content and site health.', image: img.onboarding },
    { title: 'Strategy Brain', copy: 'Audience, voice and objectives define the starting point; strategy sliders make prioritization explicit.', image: img.strategy },
    { title: 'GEO intelligence', copy: 'Compare visibility across OpenAI, Google and Perplexity, with position and sentiment for context.', image: img.geo },
    { title: 'Strategic content plan', copy: '30, 60 and 90-day horizons put near-term priorities and long-term authority building on one board.', image: img.content },
    { title: 'Technical SEO', copy: 'Health scores, severity and explanations turn each issue into a ranked, actionable fix.', image: img.technical },
    { title: 'Reports', copy: 'Clicks, impressions and query performance over time reconnect execution with results.', image: img.report },
  ],
  language: {
    intro: 'Deep teal anchors the interface. Soft neutral surfaces and lilac accents give dense tables, scores and status indicators room to breathe.',
    palette: [['Deep teal', '#092d2d', 'Structure + emphasis'], ['Action teal', '#156d6d', 'Primary actions'], ['Soft lilac', '#ccbaff', 'Ambient accents'], ['Warm neutral', '#ecede7', 'Quiet surfaces']],
  },
  outcomes: {
    title: 'Design Outcomes',
    intro: 'From being visible to knowing what’s next.',
    items: [
      ['A shared picture', 'Search performance, AI visibility and technical health in one product.'],
      ['A path into action', 'Business context flows into content planning and prioritized fixes.'],
      ['A visible feedback loop', 'Reports reconnect execution with performance over time.'],
    ],
  },
  tldr: [
    ['Problem', 'Being found is no longer just about ranking: teams needed to see where they show up across search and AI answers, and what to do next.'],
    ['Solution', 'One workspace that sets business context, maps search and AI visibility, plans content on 30/60/90-day horizons and ranks technical fixes.'],
    ['Outcome', 'A connected loop from insight to production and back to performance, instead of another dashboard.'],
  ],
};
