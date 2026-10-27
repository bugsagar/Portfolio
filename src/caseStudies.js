// Case study content for /work/<slug>. Draft copy written from the project
// summaries in project.js; replace with real research, numbers and screens.
// `quote`/`closing` pairs render as [plain text, accent text].

export const caseStudies = {
  prism: {
    company: 'Pixis AI',
    subtitle: 'Making AI-driven campaign decisions legible',
    intro: 'Designing a flexible AI workspace that turns complex campaign decisions into clear, collaborative actions for marketing teams.',
    timeline: '2025 — Now',
    role: 'Product Design · Design Systems',
    skills: ['Product Design', 'AI Interaction', 'Design Systems', 'Progressive Disclosure'],
    highlights: [
      { value: 'Legible', label: 'AI recommendations people can read and question' },
      { value: 'Modular', label: 'A visual language built from reusable parts' },
      { value: 'Shared', label: 'Decisions teams can review together' },
    ],
    overview: {
      heading: 'An AI Workspace for Marketers',
      lead: 'Prism AI is a workspace where marketing teams plan, review and act on AI-generated campaign recommendations in one place.',
      body: 'It brings performance signals, AI suggestions and team decisions together, so people can move from “what is the model telling me?” to “what are we doing next?” without leaving the workspace.',
      myRole: 'I worked on product design and the design system behind Prism: mapping decision loops, shaping the interaction model and building the components the product runs on.',
      opportunity: 'Make intelligence feel legible, calm and useful at every step, so people stay in control without having to manage the model.',
    },
    problem: {
      heading: 'Powerful, but Hard to Trust',
      lead: 'Campaign decisions involve a lot of data, and AI can surface more of it than anyone can reasonably review.',
      body: 'When recommendations arrive without context, people either ignore them or accept them blindly. Neither builds confidence, and neither helps a team learn from the decisions it makes.',
      research: 'Looking at how marketers actually worked, the same pattern kept appearing: insights lived in dashboards, conversations happened elsewhere, and the reasoning behind a decision was rarely captured anywhere.',
      quote: ['The problem wasn’t a lack of intelligence.', ' It was that the intelligence wasn’t legible.'],
      question: 'How might we help marketing teams understand, discuss and act on AI recommendations with confidence?',
    },
    approach: {
      heading: 'Progressive Disclosure for AI',
      statement: 'If AI recommendations arrive with just enough context, and more on demand, people can trust them, challenge them and act on them faster.',
      steps: [
        { title: 'Surface', copy: 'Lead with the recommendation and why it matters right now.', tag: 'Summary first' },
        { title: 'Explain', copy: 'Reveal the signals and reasoning behind it when someone asks.', tag: 'Context on demand' },
        { title: 'Decide', copy: 'Let people accept, adjust or reject, and keep a record of why.', tag: 'Human in control' },
        { title: 'Scale', copy: 'Package these patterns as components the whole product can reuse.', tag: 'Design system' },
      ],
      closing: 'Together they form one loop: understand a recommendation, decide on it, and carry that decision across the workflow.',
    },
    decisions: {
      heading: 'Designing the Decision Loop',
      intro: 'Each decision below answers a moment in the loop, from the first glance at a recommendation to the moment a team commits to it.',
      items: [
        {
          tag: 'Surface · Recommendation cards',
          title: 'Lead With the Decision',
          body: ['Recommendations open with a plain-language headline: what to change and the expected direction of impact. Supporting metrics sit one step below.', 'This keeps the first read fast, while the detail stays one click away for people who want it.'],
          decision: 'Put the action first and the evidence second, without hiding either.',
          notes: [
            { title: 'Plain-language headlines', copy: 'Each card states the action in words a marketer would use, not in model terminology.' },
            { title: 'Evidence on demand', copy: 'Signals and reasoning expand inline instead of sending people to another screen.' },
          ],
          toward: 'Faster first reads, so time is spent on judgement rather than decoding.',
        },
        {
          tag: 'Decide · Review & control',
          title: 'Keep People in Control',
          body: ['Every recommendation can be accepted, adjusted or dismissed. Adjustments preview their effect before anything changes.', 'Decisions are recorded with a short note, so the team can see what was done and why.'],
          decision: 'Treat the AI as a collaborator that proposes, not an autopilot that acts.',
          notes: [
            { title: 'Adjust, don’t just approve', copy: 'Editable values let people keep the idea while changing the details.' },
            { title: 'A visible trail', copy: 'Decision history turns individual choices into shared team knowledge.' },
          ],
          toward: 'More confident decisions, and a record the team can learn from.',
        },
        {
          tag: 'Scale · Design system',
          title: 'Patterns That Travel',
          body: ['The interaction patterns built for Prism became components: recommendation cards, explanation panels and decision states.', 'That let the same model of trust carry across a family of AI tools rather than being reinvented in each one.'],
          decision: 'Design the system and the product together, so consistency comes for free.',
          notes: [
            { title: 'Shared states', copy: 'Loading, reasoning, confidence and error states behave the same everywhere.' },
            { title: 'Composable layouts', copy: 'Components scale from a single prompt to an entire workflow.' },
          ],
          toward: 'A reusable foundation for the next generation of AI products.',
        },
      ],
    },
    outcomes: {
      heading: 'Clearer Decisions, Shared Foundations',
      items: [
        { value: 'Clearer', label: 'Recommendations', copy: 'Recommendations read as actions with reasons, rather than numbers to interpret.' },
        { value: 'Reusable', label: 'Component library', copy: 'Patterns built for Prism now support other AI tools in the product family.' },
        { value: 'Collaborative', label: 'Team workflow', copy: 'Decisions and their reasoning live in one place the whole team can see.' },
      ],
      closing: ['The goal was never to add another dashboard. It was to make AI a calm, legible part of how teams decide.', ' For me, the challenge was designing trust as carefully as the interface.'],
    },
    learnings: {
      heading: 'Trust Is a Design Material',
      items: [
        { title: 'Explain before you persuade.', copy: 'People accept recommendations they understand, not the ones that sound most confident.' },
        { title: 'Control builds confidence.', copy: 'Being able to adjust a suggestion makes people far more willing to use it.' },
        { title: 'Systems are product decisions.', copy: 'Component choices shape how every future AI feature will feel.' },
        { title: 'Calm beats clever.', copy: 'In high-stakes workflows, a quiet interface lets the important signal stand out.' },
      ],
      closing: ['AI products succeed when people feel smarter using them, not replaced by them.', ' Prism taught me to design for that feeling first.'],
    },
  },

  adroom: {
    company: 'Pixis AI',
    subtitle: 'From a rough idea to a library of ads, on your phone',
    intro: 'Designing a mobile-first creative room that helps marketers turn ideas into high-performing ad variations with AI as a collaborator.',
    timeline: '2024',
    role: 'Product Design · Mobile',
    skills: ['Mobile UX', 'AI Creative Tools', 'Interaction Design', 'Rapid Iteration'],
    highlights: [
      { value: 'Mobile', label: 'Creative work designed for the phone first' },
      { value: 'Fast', label: 'Short loops from brief to variation' },
      { value: 'Expressive', label: 'A canvas that invites experimentation' },
    ],
    overview: {
      heading: 'A Creative Room in Your Pocket',
      lead: 'Adroom is a mobile creative space where marketers sketch an idea, generate ad variations with AI and refine them into something ready to publish.',
      body: 'It is built for the moments between meetings, when an idea is fresh but a full creative toolchain is out of reach.',
      myRole: 'I designed the mobile product experience: the creative canvas, the generation and iteration flows, and the feedback patterns that keep AI in a supporting role.',
      opportunity: 'Give marketers a fast way to move from a rough thought to a library of useful creative directions, without losing momentum.',
    },
    problem: {
      heading: 'Ideas Stall Before They Ship',
      lead: 'Good creative ideas often start small: a line, a visual, a hunch about what will resonate.',
      body: 'Turning that spark into testable ads usually means briefs, handoffs and desktop tools. By the time variations exist, the moment and the momentum have passed.',
      research: 'Talking with marketers, the friction was rarely the idea itself. It was the distance between having an idea and seeing enough versions of it to know whether it worked.',
      quote: ['The bottleneck wasn’t creativity.', ' It was the distance between an idea and its variations.'],
      question: 'How might we help marketers explore and refine ad ideas quickly, wherever they are?',
    },
    approach: {
      heading: 'AI as a Creative Collaborator',
      statement: 'If generating, comparing and refining variations feels as quick as sketching, marketers will explore more ideas and ship better ones.',
      steps: [
        { title: 'Start', copy: 'Begin from a prompt, an image or an existing ad.', tag: 'Low-friction entry' },
        { title: 'Generate', copy: 'Produce a spread of variations to react to.', tag: 'Breadth first' },
        { title: 'Refine', copy: 'Nudge copy, visuals and format with light-touch edits.', tag: 'Direct manipulation' },
        { title: 'Publish', copy: 'Save the best directions to a shared library.', tag: 'Ready to use' },
      ],
      closing: 'The loop stays short on purpose: every step should take seconds, not sessions.',
    },
    decisions: {
      heading: 'Designing for Momentum',
      intro: 'The decisions below focus on keeping creative energy high on a small screen.',
      items: [
        {
          tag: 'Start · Creative canvas',
          title: 'An Expressive Canvas',
          body: ['The canvas is the home screen. Ideas begin as cards that can hold text, images or references, so there is never a blank form to fill in.', 'Starting is as light as jotting down a note.'],
          decision: 'Make the first step feel like sketching, not filling in a brief.',
          notes: [
            { title: 'Mixed inputs', copy: 'Text, images and existing ads can all seed a new idea.' },
            { title: 'No empty states', copy: 'Suggested starting points keep the canvas from feeling blank.' },
          ],
          toward: 'More ideas captured in the moment they occur.',
        },
        {
          tag: 'Generate · Variations',
          title: 'Breadth Before Polish',
          body: ['Generation returns a set of variations to compare side by side, rather than a single “best” answer.', 'Swiping through options makes reacting easier than specifying.'],
          decision: 'Let people react to options instead of describing perfection up front.',
          notes: [
            { title: 'Side-by-side compare', copy: 'Variations are easy to scan and shortlist on a phone.' },
            { title: 'Keep, tweak, discard', copy: 'Three simple actions keep the loop moving.' },
          ],
          toward: 'Faster exploration of creative directions.',
        },
        {
          tag: 'Refine · Feedback',
          title: 'Lightweight Feedback Loops',
          body: ['Small, direct edits such as tone, length and format replace long prompt rewrites.', 'Each change shows its result immediately, so iteration feels conversational.'],
          decision: 'Favour direct manipulation over prompt engineering.',
          notes: [
            { title: 'One-tap adjustments', copy: 'Common refinements live as quick controls.' },
            { title: 'Visible history', copy: 'Earlier versions are always one step back.' },
          ],
          toward: 'A creative workflow that stays intact from brief to publish.',
        },
      ],
    },
    outcomes: {
      heading: 'A More Direct Creative Workflow',
      items: [
        { value: 'Quicker', label: 'Idea to variation', copy: 'Marketers can move from a spark to a set of options in a single session.' },
        { value: 'Broader', label: 'Creative exploration', copy: 'Comparing variations encourages trying more directions.' },
        { value: 'Portable', label: 'Mobile-first', copy: 'Creative work no longer waits for a desk and a full toolchain.' },
      ],
      closing: ['The aim wasn’t to automate creativity. It was to shorten the distance between an idea and its best version.', ' AI earned its place by keeping people in the creative seat.'],
    },
    learnings: {
      heading: 'Momentum Is a Feature',
      items: [
        { title: 'Reacting beats specifying.', copy: 'People find what they want faster by choosing between options.' },
        { title: 'Small screens need small loops.', copy: 'Every interaction on mobile should resolve in seconds.' },
        { title: 'AI should feel like a collaborator.', copy: 'Suggestions work best when they invite edits, not acceptance.' },
        { title: 'Never lose the work.', copy: 'Visible history makes experimentation feel safe.' },
      ],
      closing: ['Creative tools are judged by how they feel in the first ten seconds.', ' Adroom taught me to protect that feeling above everything else.'],
    },
  },

  pixis: {
    company: 'Pixis AI',
    subtitle: 'A shared language for AI-powered marketing products',
    intro: 'Building the design system that connects a fast-growing suite of AI products, from foundations and components to contribution patterns.',
    timeline: '2023 — Now',
    role: 'Design Systems · Product Strategy',
    skills: ['Design Systems', 'Component Architecture', 'Documentation', 'AI Interaction Patterns'],
    highlights: [
      { value: 'Unified', label: 'One language across a growing product suite' },
      { value: 'Adoptable', label: 'Consistency made easy, not enforced' },
      { value: 'AI-ready', label: 'Patterns for intelligent interfaces' },
    ],
    overview: {
      heading: 'One System, Many Products',
      lead: 'The Pixis Design System is the shared foundation behind Pixis products: tokens, components, patterns and the guidance for using them.',
      body: 'It gives designers and engineers a common vocabulary, so new products feel related and teams spend time on problems rather than on rebuilding buttons.',
      myRole: 'I worked across foundations, components and contribution patterns, partnering with product teams and engineering to make the system practical to adopt.',
      opportunity: 'Unify a rapidly growing suite of tools without flattening the character of each product.',
    },
    problem: {
      heading: 'Growth Without a Shared Language',
      lead: 'As the product suite grew, each team solved similar problems in slightly different ways.',
      body: 'Small inconsistencies added up: different spacing, different states, different ways of presenting AI output. Users felt the seams, and teams duplicated effort.',
      research: 'Auditing existing products surfaced the same components rebuilt many times, and AI-specific moments such as loading, reasoning and confidence handled differently everywhere.',
      quote: ['The products weren’t broken.', ' They just weren’t speaking the same language.'],
      question: 'How might we make consistency the easiest path for every team, including for AI-specific interactions?',
    },
    approach: {
      heading: 'Make the Right Thing Easy',
      statement: 'If the system is easier to use than to work around, consistency follows naturally, and teams move faster because of it.',
      steps: [
        { title: 'Foundations', copy: 'Tokens for colour, type, spacing and motion.', tag: 'Shared base' },
        { title: 'Components', copy: 'Accessible building blocks with clear states.', tag: 'Build once' },
        { title: 'Patterns', copy: 'Recipes for recurring problems, including AI moments.', tag: 'Solve once' },
        { title: 'Contribution', copy: 'A clear path for teams to propose and add to the system.', tag: 'Grow together' },
      ],
      closing: 'Each layer builds on the last, from a single token to a full AI workflow.',
    },
    decisions: {
      heading: 'Designing the System',
      intro: 'These decisions shaped how the system is structured and how teams actually use it.',
      items: [
        {
          tag: 'Foundations · Tokens',
          title: 'Tokens as the Source of Truth',
          body: ['Colour, type, spacing and motion live as tokens shared between design and code.', 'A change made once flows everywhere, keeping products aligned as they evolve.'],
          decision: 'Encode design decisions as data that both design and code consume.',
          notes: [
            { title: 'Semantic naming', copy: 'Tokens describe purpose, not just value, so themes stay flexible.' },
            { title: 'One source', copy: 'Design files and code read from the same definitions.' },
          ],
          toward: 'Consistency that survives rapid product change.',
        },
        {
          tag: 'Patterns · AI interactions',
          title: 'A Point of View on AI',
          body: ['AI output needs its own patterns: streaming, reasoning, confidence, sources and recovery from errors.', 'Standardising them means every product communicates intelligence the same, trustworthy way.'],
          decision: 'Treat AI interactions as first-class system patterns, not one-off designs.',
          notes: [
            { title: 'Consistent states', copy: 'Thinking, streaming and done look and behave the same everywhere.' },
            { title: 'Explainability built in', copy: 'Patterns leave room for reasons and sources by default.' },
          ],
          toward: 'AI experiences that feel coherent across the whole suite.',
        },
        {
          tag: 'Adoption · Contribution',
          title: 'Built With Teams',
          body: ['A lightweight contribution model lets product teams propose components and improvements.', 'Documentation focuses on when and why to use something, not only how.'],
          decision: 'Make adoption practical, and make teams co-owners of the system.',
          notes: [
            { title: 'Clear contribution path', copy: 'Proposals move from a team need to a shared component.' },
            { title: 'Usage guidance', copy: 'Docs explain intent so components are used well.' },
          ],
          toward: 'A system that grows with the products instead of behind them.',
        },
      ],
    },
    outcomes: {
      heading: 'A System Teams Choose to Use',
      items: [
        { value: 'Connected', label: 'Product suite', copy: 'Products share a recognisable look, feel and behaviour.' },
        { value: 'Faster', label: 'Prototyping', copy: 'Teams assemble new ideas from tested components.' },
        { value: 'Coherent', label: 'AI experiences', copy: 'Intelligent features communicate in one consistent way.' },
      ],
      closing: ['A design system is only as good as the products it enables.', ' The goal was to make every team faster, not just every screen consistent.'],
    },
    learnings: {
      heading: 'Systems Are Relationships',
      items: [
        { title: 'Adoption is the real metric.', copy: 'A component nobody uses is just documentation.' },
        { title: 'Name things by purpose.', copy: 'Semantic tokens make change cheap later.' },
        { title: 'AI needs its own patterns.', copy: 'Intelligent interfaces have states traditional systems never planned for.' },
        { title: 'Co-ownership scales.', copy: 'Systems grow best when teams contribute, not just consume.' },
      ],
      closing: ['The best design systems disappear into the work.', ' Building this one taught me that people, not components, are what make a system last.'],
    },
  },

  visibility: {
    company: 'Pixis AI',
    subtitle: 'Making progress, context and what matters easier to see',
    intro: 'Designing a product experience that turns scattered information into a shared understanding of status, ownership and next actions.',
    timeline: '2021',
    role: 'Product Design · UX Strategy',
    skills: ['UX Strategy', 'Information Architecture', 'Dashboard Design', 'Marketing Tech'],
    highlights: [
      { value: 'Visible', label: 'Status that is clear at a glance' },
      { value: 'Owned', label: 'Every item has a clear owner' },
      { value: 'Actionable', label: 'Next steps surfaced, not buried' },
    ],
    overview: {
      heading: 'Seeing the Whole Picture',
      lead: 'Visibility brings together the information marketing teams need to understand where things stand and what should happen next.',
      body: 'Instead of piecing status together from reports and threads, people get one view of progress, context and the important signals worth acting on.',
      myRole: 'I worked on product design and UX strategy: structuring the information, defining the core views and shaping how status and ownership are communicated.',
      opportunity: 'Turn scattered information into a shared understanding for everyone using it.',
    },
    problem: {
      heading: 'Information Everywhere, Clarity Nowhere',
      lead: 'Teams had plenty of data. What they lacked was a shared view of what it meant.',
      body: 'Status lived in spreadsheets, updates in chat, and context in people’s heads. Answering “where are we?” took time, and different people often reached different answers.',
      research: 'The recurring frustrations were about visibility, not volume: unclear ownership, stale status and important changes noticed too late.',
      quote: ['The problem wasn’t missing information.', ' It was that nobody could see it the same way.'],
      question: 'How might we give teams one clear, shared view of progress and what needs attention next?',
    },
    approach: {
      heading: 'Organise Around Questions',
      statement: 'If the product is organised around the questions people ask, rather than the data it stores, understanding becomes faster and shared.',
      steps: [
        { title: 'Status', copy: 'Where do things stand right now?', tag: 'At a glance' },
        { title: 'Ownership', copy: 'Who is responsible for each piece?', tag: 'Clear owners' },
        { title: 'Context', copy: 'What changed, and why does it matter?', tag: 'Signals' },
        { title: 'Next actions', copy: 'What should happen next?', tag: 'Act' },
      ],
      closing: 'Each view answers one question well, and together they tell the full story.',
    },
    decisions: {
      heading: 'Designing for Shared Understanding',
      intro: 'These decisions focus on making status obvious and action easy.',
      items: [
        {
          tag: 'Status · Overview',
          title: 'Status at a Glance',
          body: ['The overview leads with a small set of clear states rather than dense tables.', 'Detail is available by drilling in, but the top level answers “are we on track?” immediately.'],
          decision: 'Summarise first, and let people drill into detail when they need it.',
          notes: [
            { title: 'A few clear states', copy: 'Simple, consistent status labels replace ambiguous metrics.' },
            { title: 'Progressive detail', copy: 'Every summary links to the evidence behind it.' },
          ],
          toward: 'Faster answers to “where are we?”.',
        },
        {
          tag: 'Ownership · Accountability',
          title: 'Make Ownership Visible',
          body: ['Every item shows who owns it and when it last changed.', 'This removes the guesswork of who to ask, and makes stale items easy to spot.'],
          decision: 'Pair every piece of status with a person and a timestamp.',
          notes: [
            { title: 'Named owners', copy: 'Responsibility is explicit, not implied.' },
            { title: 'Freshness cues', copy: 'Recency shows how much to trust a status.' },
          ],
          toward: 'Fewer dropped handoffs and clearer accountability.',
        },
        {
          tag: 'Act · Next actions',
          title: 'Surface What Needs Attention',
          body: ['Important changes and blocked items rise to the top as next actions.', 'The product points people to what matters instead of waiting for them to find it.'],
          decision: 'Turn visibility into action by highlighting what needs attention now.',
          notes: [
            { title: 'Attention queue', copy: 'Changes that need a decision are grouped together.' },
            { title: 'One-step actions', copy: 'Common responses are available right where the signal appears.' },
          ],
          toward: 'A clearer view of the work and the decisions around it.',
        },
      ],
    },
    outcomes: {
      heading: 'A Clearer View of the Work',
      items: [
        { value: 'Shared', label: 'Understanding', copy: 'Teams look at the same picture of progress.' },
        { value: 'Clear', label: 'Ownership', copy: 'Everyone can see who is responsible for what.' },
        { value: 'Timely', label: 'Action', copy: 'Important changes are noticed when they happen, not after.' },
      ],
      closing: ['Visibility isn’t about showing more data. It’s about showing the right things to the right people at the right time.', ' That shift guided every screen.'],
    },
    learnings: {
      heading: 'Clarity Is Shared',
      items: [
        { title: 'Design around questions.', copy: 'People come with questions, not with a need for tables.' },
        { title: 'Status needs a source.', copy: 'Owners and timestamps make information trustworthy.' },
        { title: 'Less, but clearer.', copy: 'A few well-chosen states beat many precise but ambiguous metrics.' },
        { title: 'Point to the next step.', copy: 'Visibility is most useful when it leads to action.' },
      ],
      closing: ['Teams don’t need more dashboards. They need a shared sense of where they are.', ' Visibility taught me to design for that shared sense first.'],
    },
  },
};
