// Adroom. Copy is from the Adroom product design case study; the Userbase,
// Research and Audit sections are drafted from it and should be checked
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
  process: {
    title: 'One Creative Loop',
    intro: 'Explore, understand, refine — the loop both entry points lead into.',
    steps: [['Explore', img.brands], ['Understand', img.analysis], ['Refine', img.resize]],
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
