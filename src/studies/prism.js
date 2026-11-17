// Prism AI. Copy is from the Prism UX/UI case study; the Userbase, Research
// and Audit sections are drafted from it and should be checked against the
// real project before they are treated as findings.

const img = {
  home: ['prism/home', 'Prism home with suggested tasks'],
  answer: ['prism/answer', 'Prism competitive insights answer', 'tall'],
  detail: ['prism/detail', 'Prism detailed answer chart'],
  prompts: ['prism/prompts', 'Prism prompt library and editor'],
  files: ['prism/files', 'Prism workspace files'],
  bookmarks: ['prism/bookmarks', 'Prism workspace bookmarks'],
  settings: ['prism/settings', 'Prism organization settings'],
};

export default {
  subtitle: 'From complex data to confident decisions',
  intro: [
    'Prism brings campaign questions, AI-generated answers and reusable knowledge into a single workspace for performance marketing teams. ',
    'The experience is built around three moves — ask, understand and reuse',
    ', so a campaign question becomes an answer people can trust and come back to.',
  ],
  meta: [['Product', 'Pixis Prism'], ['Years', '2025 — Now'], ['Scope', 'Product design, Design systems, AI interaction']],
  hero: ['prism/home', 'Prism home dashboard'],
  challenge: 'More information is not the same as more clarity. How might we help marketers move from a campaign question to an understandable, reusable answer — without losing the context behind it?',
  goals: [
    ['Ask', 'Start with a question, not a report'],
    ['Understand', 'Keep accounts and sources in view'],
    ['Reuse', 'Save useful work for the next task'],
  ],
  userbase: {
    title: 'Designing for Marketing Teams',
    intro: 'Prism serves performance marketing teams — the people asking questions of campaign data, and the people who set up the workspace those questions are asked in.',
    users: [
      { icon: '📈', title: 'Performance marketers', copy: 'Ask campaign questions in plain language, read the answer and its evidence, and act on it across accounts.' },
      { icon: '🗂️', title: 'Workspace admins', copy: 'Set up accounts, data sources and organization settings so every answer starts from the right context.' },
    ],
  },
  research: {
    title: 'Framing the Problem',
    intro: 'Before designing screens, we framed the questions the experience had to answer and the friction marketers hit on the way from data to a decision.',
    questionsTitle: 'Questions we designed around',
    questions: [
      'Where do I begin when the input is blank?',
      'What am I looking at — and where did this answer come from?',
      'Which account and data sources is this answer based on?',
      'How do I use this answer again next week?',
      'What should stay one click away rather than on screen?',
    ],
    painTitle: 'Pain points',
    painSub: 'Distilled from the design challenge',
    pains: [
      { title: 'Blank starting point', tone: 'green', star: true, items: ['A blank input gives no hint of what to ask', 'Needs useful starting points, not more complexity'] },
      { title: 'Answers without hierarchy', tone: 'blue', items: ['Dense responses are hard to scan', 'Evidence needs a clear structure'] },
      { title: 'Context out of view', tone: 'teal', items: ['Account and sources unclear at a glance', 'Trust drops when context is hidden'] },
      { title: 'Work that disappears', tone: 'lilac', items: ['Good prompts get rewritten from scratch', 'Files and answers have no home'] },
    ],
  },
  audit: {
    title: 'Auditing the Home Experience',
    intro: 'What each part of the home screen does, and why it earns its place.',
    image: img.home,
    notes: [
      { x: 2.5, y: 30, title: 'Compact navigation', items: ['A stable rail anchors the experience'] },
      { x: 29, y: 25, title: 'Natural-language input', items: ['Start with a question, not a report', 'Account and data-source selectors keep context close'] },
      { x: 71, y: 31, title: 'Consistent actions', items: ['Teal marks the next meaningful step'] },
      { x: 30, y: 40, title: 'Task-based starting points', items: ['Suggested tasks give the input a practical starting point', 'Filter by conversion, insights, audience or performance'] },
      { x: 97.5, y: 10, title: 'Persistent workspace tools', items: ['Prompts, Files and Bookmarks stay one click away'] },
    ],
  },
  exploration: {
    title: 'Two Modes of Working',
    intro: 'Prism has to serve two different moments: getting an answer now, and building on answers over time. Designing both side by side shaped one workspace with many ways in.',
    options: [
      { tag: 'Ask in the moment', copy: 'A conversation that turns a campaign question into a structured answer, with steps and sources a click away.', image: img.detail },
      { tag: 'Reuse over time', copy: 'A prompt library, files and bookmarks that turn isolated tasks into a reusable workspace.', image: img.prompts },
    ],
  },
  process: {
    title: 'From Intent to Insight',
    intro: 'A connected workflow, with reusable knowledge alongside the conversation.',
    steps: [['Choose context & ask', img.home], ['Understand the answer', img.detail], ['Keep the value', img.bookmarks]],
  },
  features: [
    { title: 'Home & suggested tasks', copy: 'Natural-language input and task-based starting points make the first step feel approachable.', image: img.home },
    { title: 'Detailed answers', copy: 'Answers, Steps and Sources create distinct layers of detail, while the composer stays within reach.', image: img.detail },
    { title: 'Competitive insights', copy: 'Chart, narrative and table give complex information a more scannable structure.', image: img.answer },
    { title: 'Prompt library & editor', copy: 'Filter by platform, category and ownership, edit prompt details and variables, then run it again.', image: img.prompts },
    { title: 'Workspace files & bookmarks', copy: 'Prompts, uploaded files and bookmarks preserve the value of ongoing work.', image: img.files },
    { title: 'Organization settings', copy: 'A shared navigation model connects conversation, knowledge and administration.', image: img.settings },
  ],
  language: {
    intro: 'Warm neutrals, restrained teal and consistent patterns let the information lead.',
    palette: [['Deep ink', '#072929'], ['Action teal', '#136D6D'], ['Warm surface', '#F5F5F0'], ['Supporting text', '#556179']],
    type: 'PP Agrandir for expressive headings, GT America for compact, functional interface text.',
  },
  outcomes: {
    title: 'Design Reflection',
    intro: 'Make intelligence useful. Then make it reusable.',
    items: [
      ['Guide the first step', 'Suggested tasks give natural-language input a practical starting point.'],
      ['Make depth optional', 'A clear answer comes first; steps and sources are there when needed.'],
      ['Design beyond one session', 'Prompts, files and bookmarks preserve the value of ongoing work.'],
    ],
  },
  tldr: [
    ['Problem', 'More information is not the same as more clarity: marketers needed to get from a campaign question to an answer they could understand and reuse.'],
    ['Solution', 'One workspace with natural-language input, layered answers with steps and sources, and a library of prompts, files and bookmarks.'],
    ['Outcome', 'A calm surface for complex work, where useful answers build up instead of disappearing.'],
  ],
};
