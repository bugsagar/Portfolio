// Adroom. Copy is from the Adroom product design case study; the Userbase,
// Research, Audit and Workflow sections are drafted from it and should be checked
// against the real project before they are treated as findings.

const img = {
  analysis: ['adroom/analysis', 'Adroom ad activity analysis'],
  home: ['adroom/home', 'Adroom AI creation home'],
  brands: ['adroom/brands', 'Adroom monitored brands dashboard'],
  overview: ['adroom/overview', 'Adroom report overview', 'tall'],
  hooks: ['adroom/hooks', 'Adroom hooks analysis'],
  resize: ['adroom/resize', 'Adroom AI resize workspace'],
  loading: ['adroom/loading', 'Adroom loading state'],
  recovery: ['adroom/recovery', 'Adroom empty state'],
};

export default {
  subtitle: 'From creative possibility to a clearer next move',
  intro: [
    'Adroom brings AI-assisted ad creation, competitor intelligence and hands-on editing into one product experience. ',
    'Two entry points — start with an idea or start with a competitor — lead into one creative loop',
    ', so marketers always know what to do next.',
  ],
  meta: [['Product', 'Adroom'], ['Years', '2024'], ['Scope', 'Product design, AI creative tools, Data visualisation']],
  hero: img.home,
  challenge: 'More tools should not mean more decisions. The challenge was to help marketers find a starting point, understand the competitive landscape and stay in control of what they create.',
  goals: [
    ['Create', 'AI ad generation for every kind of creative'],
    ['Compare', 'Competitor intelligence in one scannable view'],
    ['Control', 'Hands-on editing that keeps the final say'],
  ],
  userbase: {
    title: 'Designing for Both Sides of a Campaign',
    intro: 'Adroom is used by marketers making the creative, and by marketers reading the market it lands in.',
    users: [
      { icon: '🎨', title: 'Performance marketers', copy: 'Generate, edit and resize ads, UGC videos and product imagery for every placement.' },
      { icon: '🔍', title: 'Brand & strategy teams', copy: 'Monitor competitors’ ad activity, positioning and hooks to find the next angle.' },
    ],
  },
  research: {
    title: 'Framing the Problem',
    intro: 'Before designing screens, we framed the questions the experience had to answer — from the first creative to the last resize.',
    questionsTitle: 'Questions we designed around',
    questions: [
      'Where should someone start when they can create almost anything?',
      'Which competitor signals actually change a creative decision?',
      'How much of a report should be visible at once?',
      'Where does AI help — and where must people stay in control?',
      'What happens while content loads, or when there’s no data yet?',
    ],
    painTitle: 'Pain points',
    painSub: 'Distilled from the design challenge',
    pains: [
      { title: 'A wide starting field', tone: 'green', star: true, items: ['Prompts, UGC, video and product imagery', 'No clear place to begin'] },
      { title: 'Signals in the noise', tone: 'blue', items: ['Dense ad libraries and reports', 'Need hierarchy, not another layer'] },
      { title: 'Automation vs agency', tone: 'teal', items: ['AI should speed up production', 'Without hiding the controls that matter'] },
      { title: 'Moments between results', tone: 'lilac', items: ['Loading and empty states', 'Need to explain what is happening'] },
    ],
  },
  audit: {
    title: 'Auditing the Creation Home',
    intro: 'What each part of the AI creation home does, and how it turns a wide capability set into a place to start.',
    image: img.home,
    notes: [
      { x: 3.5, y: 40, title: 'Compact navigation', items: ['Home, Library, Brand Kit, Templates and Projects always in reach'] },
      { x: 29.5, y: 24, title: 'Prompt-led start', items: ['A broad invitation: describe what you want to generate'] },
      { x: 37, y: 43, title: 'Intent-led categories', items: ['Generations & AI, Photo, Templates, Social Media, Creative Insights'] },
      { x: 70, y: 60, title: 'Concrete paths', items: ['Full ads, UGC videos, video ads and product imagery', 'Each path says what goes in: a prompt or an image'] },
      { x: 53, y: 88, title: 'Shortcuts for scale', items: ['Generate ads in bulk', 'Brand-ready AI copy'] },
    ],
  },
  exploration: {
    title: 'Two Entry Points',
    intro: 'Start with an idea or start with a competitor. Both paths support a more informed creative decision.',
    options: [
      { tag: 'Start with an idea', copy: 'A prompt-led home pairs a broad invitation with concrete paths: full ads, UGC videos, video ads and product imagery.', image: img.home },
      { tag: 'Start with a competitor', copy: 'A dedicated entry point introduces competitor intelligence, then brings monitored brands into a single, scannable view.', image: img.brands },
    ],
  },
  workflow: {
    title: 'The End-to-End Workflow',
    intro: 'Two entry points, one creative loop. Each stage below shows who does what, the decision it turns on, and the states designed for it, from the first competitor to the last resized ad.',
    loop: 'A new competitor signal sends you back to stage 2; a new idea starts again at stage 4.',
    stages: [
      {
        label: 'Choose a way in', image: img.home,
        goal: 'Give a wide product one clear place to start.',
        steps: [
          ['user', 'Lands on the creation home.'],
          ['system', 'Offers a prompt box, intent-led categories and concrete paths.'],
          ['user', 'Starts from an idea, or opens Competitor Insights from the rail.'],
        ],
        decision: { q: 'Start with an idea or a competitor?', branches: [['An idea', 'Create (stage 4).'], ['A competitor', 'Monitor brands (stage 2).']] },
        why: 'Both doors lead into the same loop, so neither path is a dead end.',
      },
      {
        label: 'Monitor competitors', image: img.brands,
        goal: 'Keep every tracked brand in one scannable inventory.',
        steps: [
          ['user', 'Adds a brand to monitor, or searches the list.'],
          ['system', 'Lists each brand’s platform, media mix, date added and active vs inactive ads.'],
          ['user', 'Opens a brand’s dashboard or its AI report.'],
        ],
        decision: { q: 'How deep to go?', branches: [['View Dashboard', 'Read the data module by module (stage 3).'], ['View AI Report', 'A written summary of what the brand is doing.']] },
        states: [['Loading', 'The workspace holds its shape while data arrives.', ], ['No active ads', '“Nothing to show yet” explains why, says when data will appear, and leads back to brands.']],
        why: 'A table beats a gallery here: the question is “which brand?”, not “which ad?”.',
      },
      {
        label: 'Read the market', image: img.analysis,
        goal: 'Turn a dense report into answers to one question at a time.',
        steps: [
          ['system', 'Opens on a report overview that sets the context.'],
          ['user', 'Moves through modules with persistent navigation.'],
          ['user', 'Reads ad activity: cadence, lifespan and platform split; or the hooks competitors lead with.'],
        ],
        decision: { q: 'Which question is being asked?', branches: [['How active are they?', 'Ad activity.'], ['What do they lead with?', 'Hooks.'], ['What’s the big picture?', 'Overview.']] },
        why: 'One module per question keeps each view readable, and the overview keeps them connected.',
      },
      {
        label: 'Create', image: img.home,
        goal: 'Turn an idea, or an insight, into a first creative.',
        steps: [
          ['user', 'Describes the ad in the prompt box, or picks a path.'],
          ['user', 'Chooses full ads, UGC videos, video ads or product imagery.'],
          ['system', 'Says what each path needs, a prompt or an image, before generating.'],
          ['system', 'Generates; bulk generation and brand-ready copy for scale.'],
        ],
        decision: { q: 'What goes in?', branches: [['A prompt', 'Text-led generation.'], ['An image', 'Product imagery and image-led ads.'], ['Many at once', 'Generate ads in bulk.']] },
        why: 'Each path names its input up front, so nobody discovers a missing image after they press generate.',
      },
      {
        label: 'Refine & resize', image: img.resize,
        goal: 'Keep the final say with the person, not the model.',
        steps: [
          ['user', 'Opens Canvas Size and picks saved sizes, 16:9, 4:5 or 1:1, or adds custom ones.'],
          ['user', 'Chooses Resize Instantly or Resize with AI.'],
          ['system', 'With AI, adjusts the layout and keeps key areas in frame for each size.'],
          ['user', 'Refines with familiar tools (shadow, opacity, flip, align), then shares.'],
        ],
        decision: { q: 'Instant or AI resize?', branches: [['Instant', 'Exact sizes, layout as is.'], ['With AI', 'Layout reworked for each format.']] },
        states: [['Many sizes', 'Each size becomes a page you can step through.'], ['Custom size', 'Width and height with a ratio lock.'], ['Bulk Create Mode', 'A toggle for producing many at once.'], ['Undo / redo', 'Always in the top bar.']],
        why: 'AI does the tedious part; the canvas, layers and undo stay exactly where designers expect them.',
      },
    ],
  },
  features: [
    { title: 'AI creation home', copy: 'Intent-led categories turn a wide capability set into a browsable starting point.', image: img.home },
    { title: 'Monitored brands', copy: 'A clear inventory of brands, platforms, media mix and available reports.', image: img.brands },
    { title: 'Report overview', copy: 'An overview sets the context, with persistent navigation into each module.', image: img.overview },
    { title: 'Ad activity', copy: 'Cadence, lifespan and platform distribution, focused on one kind of question.', image: img.analysis },
    { title: 'Hooks', copy: 'A dedicated module for the hooks competitors lead with.', image: img.hooks },
    { title: 'AI resize workspace', copy: 'Select a format, refine the result and choose what belongs on the canvas.', image: img.resize },
    { title: 'Loading & empty states', copy: 'A loading state holds the workspace; an empty state explains why data is absent and when it will arrive.', image: img.recovery },
  ],
  language: {
    intro: 'Dark surfaces let creative assets take focus. Teal actions, cool gradients and consistent typography connect the workspace.',
    palette: [['Workspace', '#090E14'], ['Raised surface', '#222934'], ['Teal / F35', '#278F8F'], ['Blue atmosphere', 'linear-gradient(#478ab1, #204084)', 'Local gradient']],
    type: 'Inter — a shared sans-serif voice across navigation, controls and analytical detail.',
  },
  outcomes: {
    title: 'Design Takeaways',
    intro: 'Make complexity useful. Keep creativity human.',
    items: [
      ['Lead with intent', 'A clear starting point matters more than exposing every capability at once.'],
      ['Give data a hierarchy', 'Overviews establish context; focused modules support deeper questions.'],
      ['Preserve the final say', 'AI-assisted creation works best alongside visible, familiar creative controls.'],
    ],
    validate: 'Time to first creative · Report comprehension · Resize acceptance',
  },
  tldr: [
    ['Problem', 'Marketers had more creative tools than ever, but no clear place to start, too much competitor data to read and too little control over AI output.'],
    ['Solution', 'Two entry points — create with AI or start from a competitor — feeding one loop of explore, understand and refine, with resizing and editing in the workspace.'],
    ['Outcome', 'A calm frame for expressive work, with three measures to validate next: time to first creative, report comprehension and resize acceptance.'],
  ],
};
