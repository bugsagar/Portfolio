// Prism AI. Copy is from the Prism UX/UI case study; the Userbase, Research, Audit
// and Workflow sections are drafted from it and should be checked against the
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
  workflow: {
    title: 'The End-to-End Workflow',
    intro: 'Prism is not one screen but a loop: set the context, ask, read and check the answer, keep what is useful, and run it again. Each stage below shows who does what, the decision it turns on, and the states designed for it.',
    loop: 'Run a saved prompt and you are back at stage 3, with new variables and the same context.',
    stages: [
      {
        label: 'Set context', image: img.home,
        goal: 'Make sure every question starts from the right account and data.',
        steps: [
          ['user', 'Opens Prism home and picks an ad account in the composer.'],
          ['user', 'Chooses the data sources to answer from, such as Meta + SoT.'],
          ['system', 'Scopes suggested tasks and answers to that account and those sources.'],
        ],
        decision: { q: 'Is the account’s platform connected?', branches: [['Yes', 'Suggested tasks load for that account.'], ['No', 'Integrations is one click away in the rail; connect, then come back.']] },
        states: [['First run', 'No account picked yet: the selectors invite a choice before anything is asked.'], ['Many accounts', 'The selector stays in the composer, so switching never means leaving the thread.']],
        why: 'Context lives in the composer, not buried in settings, so the account behind an answer is always in view.',
      },
      {
        label: 'Ask', image: img.home,
        goal: 'Turn a blank input into a useful question.',
        steps: [
          ['user', 'Types a question, or starts from a suggested task.'],
          ['user', 'Filters tasks by conversion, insights, audience or performance.'],
          ['system', 'With Enhanced Prompt on, expands a short question into a fuller one before it runs.'],
        ],
        decision: { q: 'Where does the question come from?', branches: [['Blank input', 'Type it in plain language.'], ['Suggested task', 'A ready question for a common job.'], ['Saved prompt', 'Fill its variables, then run.']] },
        states: [['Empty input', 'Suggested tasks fill the space a blank box leaves.'], ['Enhanced Prompt', 'On or off, a visible toggle rather than a hidden rewrite.']],
        why: 'Three ways in, one composer: beginners get a starting point, experts keep speed.',
      },
      {
        label: 'Get the answer', image: img.detail,
        goal: 'Lead with the answer, keep the depth optional.',
        steps: [
          ['system', 'Restates the request in plain language, then answers.'],
          ['system', 'Structures it: summary points first, then a detail table or chart.'],
          ['user', 'Reads the answer; the composer stays docked below for the next move.'],
        ],
        decision: { q: 'Is the summary enough?', branches: [['Yes', 'Act on it, or keep it (stage 5).'], ['No', 'Open Steps or Sources (stage 4).']] },
        states: [['Simple answer', 'Narrative and a detail table.'], ['Rich answer', 'Chart, narrative and table for competitive insights.']],
        why: 'Answers, Steps and Sources are separate layers, so a dense result can still be scanned in seconds.',
      },
      {
        label: 'Check & refine', image: img.answer,
        goal: 'Let people trust the answer before they use it.',
        steps: [
          ['user', 'Opens Steps to see how the answer was built.'],
          ['user', 'Opens Sources to see the evidence behind it.'],
          ['user', 'Asks a follow-up in the same thread, with account and sources unchanged.'],
        ],
        decision: { q: 'Does the answer hold up?', branches: [['Yes', 'Keep it (stage 5).'], ['Not quite', 'Refine with a follow-up; the context carries over.']] },
        why: 'Trust comes from being able to look, not from being told. The evidence is one tab away, never on top of the answer.',
      },
      {
        label: 'Keep the value', image: img.bookmarks,
        goal: 'Stop good work from disappearing at the end of a session.',
        steps: [
          ['user', 'Bookmarks the answer, shares it, or exports it.'],
          ['user', 'Saves the question as a prompt: name, category, platform and command.'],
          ['user', 'Marks the parts that change as variables, in double braces.'],
          ['system', 'Files it under Prompts, Files or Bookmarks in the workspace panel.'],
        ],
        decision: { q: 'Who is it for?', branches: [['Me', 'My Prompts and Bookmarks.'], ['My team', 'Shared Prompts, or Share.'], ['Outside Prism', 'Export.']] },
        states: [['Files', 'Uploaded files sit next to prompts and bookmarks, not in a separate tool.']],
        why: 'The workspace panel on the right is always there, so saving is part of the flow, not a detour.',
      },
      {
        label: 'Run it again', image: img.prompts,
        goal: 'Turn a one-off answer into a repeatable task.',
        steps: [
          ['user', 'Opens the prompt library and filters by ownership, platform and category.'],
          ['user', 'Pins the prompts used most; edits details and variables.'],
          ['system', 'Runs the prompt and returns to the answer view (stage 3).'],
        ],
        decision: { q: 'Changed the prompt?', branches: [['Yes', 'Update Prompt becomes active; save, then run.'], ['No', 'Run it as it is.']] },
        states: [['Pinned', 'Most-used prompts stay at the top.'], ['No changes', 'Update Prompt stays disabled, so nothing is saved by accident.'], ['Delete', 'Kept apart from Run, in the header.']],
        why: 'Next week’s question is last week’s prompt with new variables. The library closes the loop.',
      },
    ],
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
