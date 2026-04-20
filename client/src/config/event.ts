export const eventConfig = {
  brand: {
    sponsor: "Crypto Labs at Visa",
    sponsorLine: "Sponsored by the Crypto Labs team at Visa",
  },
  hero: {
    title: "AI Literacy with Visa in San Francisco",
    subtitle: "Learn to Build with AI",
    headline: "An evening of practical AI literacy — built around making, not lecturing.",
    sub:
      "Join us for a moderated panel and a hands-on workshop where you'll set up Claude Code, get introduced to OpenClaw, and test-drive Visa's brand-new product, Visa CLI — alongside builders, students, and curious minds from across the city.",
    primaryCta: "Apply to Attend",
    secondaryCta: "View Agenda",
    laptopCallout: "Bring a laptop and a real project you're working on — you'll build live with the Crypto Labs team.",
  },
  meta: {
    dateLong: "Wednesday, May 20, 2026",
    dateShort: "May 20",
    time: "5:00 – 7:00 PM PT",
    timeShort: "5–7 PM",
    locationShort: "Visa office, San Francisco",
    locationLong: "Visa office, San Francisco — exact address shared upon confirmation",
    deadlineLong: "Wednesday, May 6, 2026 (11:59 PM PT)",
    deadlineShort: "May 6",
    deadlineNote:
      "Applications close on May 6, 2026 — two weeks before the event — so we have time to review and confirm.",
  },
  badges: [
    "Beginner-friendly",
    "Hands-on",
    "Open to the public",
    "May 20",
    "5–7 PM",
  ],
  why: {
    title: "Why this event?",
    intro:
      "AI literacy doesn't come from slide decks. It comes from opening a terminal, writing a prompt, breaking something, fixing it, and shipping a real result. This evening is built around exactly that.",
    points: [
      {
        title: "Learn by doing",
        body:
          "We'll skip the theory and spend most of the night actually building. Bring questions, bring curiosity, bring a laptop.",
      },
      {
        title: "Real tools, real workflows",
        body:
          "We'll work with Claude Code, OpenClaw, and Visa CLI — the same modern AI tooling teams use in production today.",
      },
      {
        title: "Made for everyone",
        body:
          "Whether you're a small business owner, a student, a builder, or just AI-curious, this evening is designed to meet you where you are.",
      },
    ],
  },
  agenda: [
    {
      time: "5:00 – 5:30 PM",
      title: "Moderated panel",
      body:
        "A 30-minute conversation on practical AI literacy — what it really means to be fluent with AI tools in 2026, and how anyone can get started.",
    },
    {
      time: "5:30 – 7:00 PM",
      title: "Hands-on workshop",
      body:
        "A 90-minute build session covering Claude Code access and setup, an introduction to OpenClaw, and live testing of Visa CLI — Visa's brand-new developer product. Bring a real project you're working on and iterate on it live with the Visa Crypto Labs team.",
      bullets: [
        "Claude Code access + setup",
        "Introduction to OpenClaw",
        "Live testing of Visa CLI",
        "Hands-on iteration on your own project with the Crypto Labs team",
      ],
    },
  ],
  learn: [
    {
      title: "Get set up with Claude Code",
      body: "Walk through access, install, and your first useful prompt — together.",
    },
    {
      title: "Bring a real project to iterate on",
      body:
        "Bring something you're actually working on — a side project, a small business workflow, a class assignment, an idea you've been stuck on. The Visa Crypto Labs team will sit with you and iterate on it live, using the same tools we just set up.",
    },
    {
      title: "Use AI to build real outputs, fast",
      body:
        "Practical workflows for turning an idea into a working artifact in minutes, not days.",
    },
    {
      title: "Get introduced to OpenClaw",
      body: "What OpenClaw is, what it's good for, and how to start using it tonight.",
    },
    {
      title: "Test-drive Visa CLI",
      body:
        "An exclusive first look at Visa's brand-new product — and a chance to give the team direct feedback.",
    },
    {
      title: "See where AI fits in real work",
      body:
        "Concrete examples of how modern AI tooling slots into the way people actually work today.",
    },
  ],
  audience: {
    title: "Who should apply",
    intro:
      "This is an open session. All ages are welcome. No prior experience is required.",
    list: [
      "Small business owners",
      "Students",
      "Builders and creators",
      "Non-technical learners",
      "Anyone curious about AI",
    ],
  },
  logistics: [
    { label: "Date", value: "Wednesday, May 20, 2026" },
    { label: "Time", value: "5:00 – 7:00 PM PT" },
    {
      label: "Location",
      value: "Visa office, San Francisco — exact address shared upon confirmation",
    },
    {
      label: "What to bring",
      value:
        "A charged laptop and, ideally, a real project you'd like to iterate on with the Crypto Labs team.",
    },
    {
      label: "Application deadline",
      value:
        "Wednesday, May 6, 2026 at 11:59 PM PT — two weeks before the event. Late applications won't be reviewed.",
    },
    {
      label: "Capacity",
      value: "Limited seats. Confirmation will be sent by email after we review your application.",
    },
    {
      label: "Accessibility",
      value:
        "We aim to make this event accessible to everyone. Please share any accommodations in your application and we'll follow up directly.",
    },
  ],
  faqs: [
    {
      q: "Is this free?",
      a: "Yes. This event is free to attend for all confirmed applicants.",
    },
    {
      q: "Do I need technical experience?",
      a: "No. The session is designed for non-technical learners and curious beginners. We'll get everyone set up together.",
    },
    {
      q: "Who can attend? Are there age requirements?",
      a: "It's an open session and all ages are welcome — small business owners, students, builders, and the simply curious.",
    },
    {
      q: "What should I bring?",
      a: "A charged laptop you can use freely for two hours, and ideally a real project you're working on — a side project, a workflow at your business, a class assignment, or just an idea. The Crypto Labs team will sit with you and iterate on it live.",
    },
    {
      q: "When is the application deadline?",
      a: "Wednesday, May 6, 2026 at 11:59 PM PT — exactly two weeks before the event. We need that time to review applications and send confirmations. Late applications won't be reviewed.",
    },
    {
      q: "How does acceptance work?",
      a: "Apply using the form below before May 6. We review applications as they come in and send confirmations by email with the exact address.",
    },
    {
      q: "Will there be recordings?",
      a: "The panel may be summarized publicly afterwards, but the workshop portion is intentionally in-person and not recorded so attendees can experiment freely.",
    },
  ],
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "/api/applications",
};

export type EventConfig = typeof eventConfig;
