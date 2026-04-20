export const eventConfig = {
  brand: {
    sponsor: "Crypto Labs at Visa",
    sponsorLine: "Sponsored by the Crypto Labs team at Visa",
  },
  hero: {
    title: "AI Literacy @ SF",
    subtitle: "Learn to Build with AI",
    headline: "An evening of practical AI literacy — built around making, not lecturing.",
    sub:
      "Join us for a moderated panel and a hands-on workshop where you'll set up Claude Code, get introduced to OpenClaw, and test-drive Visa's brand-new product, Visa CLI — alongside builders, students, and curious minds from across the city.",
    primaryCta: "Apply to Attend",
    secondaryCta: "View Agenda",
    laptopCallout: "Laptops required — you'll be building live during the workshop.",
  },
  meta: {
    dateLong: "Wednesday, May 20, 2026",
    dateShort: "May 20",
    time: "5:00 – 7:00 PM PT",
    timeShort: "5–7 PM",
    locationShort: "Visa office, San Francisco",
    locationLong: "Visa office, San Francisco — exact address shared upon confirmation",
  },
  badges: [
    "Beginner-friendly",
    "Hands-on",
    "Open to the public",
    "May 20",
    "5–7 PM",
    "Laptops required",
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
    laptopReinforce: "Bring your laptop — we'll build together.",
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
      title: "Hands-on workshop (laptops required)",
      body:
        "A 90-minute build session covering Claude Code access and setup, an introduction to OpenClaw, and live testing of Visa CLI — Visa's brand-new developer product.",
      bullets: [
        "Claude Code access + setup",
        "Introduction to OpenClaw",
        "Live testing of Visa CLI",
      ],
    },
  ],
  agendaNote: "Laptops are required for the workshop portion of the evening.",
  learn: [
    {
      title: "Get set up with Claude Code",
      body: "Walk through access, install, and your first useful prompt — together.",
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
    laptopNote: "Laptops are required to participate.",
  },
  logistics: [
    { label: "Date", value: "Wednesday, May 20, 2026" },
    { label: "Time", value: "5:00 – 7:00 PM PT" },
    {
      label: "Location",
      value: "Visa office, San Francisco — exact address shared upon confirmation",
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
  logisticsLaptop: "Laptops required — please bring a laptop to participate.",
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
      q: "Do I need to bring a laptop?",
      a: "Yes — laptops are required. This is hands-on and you'll build along with us. Plan to bring a charged laptop you can use freely for two hours.",
    },
    {
      q: "How does acceptance work?",
      a: "Apply using the form below. Seats are limited, so we review applications as they come in and send confirmations by email with the exact address.",
    },
    {
      q: "Will there be recordings?",
      a: "The panel may be summarized publicly afterwards, but the workshop portion is intentionally in-person and not recorded so attendees can experiment freely.",
    },
  ],
  formEndpoint: (import.meta.env.VITE_FORM_ENDPOINT as string | undefined) ?? "/api/applications",
};

export type EventConfig = typeof eventConfig;
