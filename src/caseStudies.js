// Case study content for /work/<slug>. Draft copy written from the project
// summaries in project.js; replace with real research, numbers and screens.
// `quote`/`closing` pairs render as [plain text, accent text].

export const caseStudies = {
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

};
