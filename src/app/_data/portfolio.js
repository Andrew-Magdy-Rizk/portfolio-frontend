/* =========================================================
   Portfolio content.
   ---------------------------------------------------------
   UNFILLED CONTENT — anything below whose value is `null` or a
   string starting with "TODO:" has no source in the CV and is
   rendered on screen as a visible dashed placeholder. Grep for
   "TODO:" to find every one. Outstanding:

     • about.story              — long-form personal narrative
     • about.strengths[].note   — one line per strength
     • skills[].level           — "expert" | "advanced" | "proficient"
     • skills[].bars            — 3 × { label, pct } per category
     • testimonials             — quotes from colleagues / clients
     • projects[].live          — public URL, where one exists

   Fill a field and the placeholder disappears automatically.
   ========================================================= */

const PORTFOLIO = {
  identity: {
    name: "Andrew Dakran",
    fullName: "Andrew Magdy Rizk Dakran",
    initials: "AD",
    role: "Full Stack Developer · MERN",
    location: "Cairo · Egypt",
    available: true,
    availabilityLabel: "Open to full-stack roles",
    tagline: {
      pre: "I build",
      em: "business-focused",
      post: "full-stack systems.",
    },
    // Headline for the panel hero — the tagline read as one sentence.
    headline: "Full-stack engineer building business-focused systems that hold up.",
    lede: "Full-Stack Developer with two years of hands-on experience designing and shipping scalable web applications. Currently building at The Community (TC) in Cairo — corporate sites, internal tools, and the systems that hold them up.",
    // `count` drives the count-up animation; `null` renders `num` statically.
    stats: [
      { num: "2+", count: 2, suffix: "+", lbl: "Years Building" },
      { num: "6", count: 6, suffix: "", lbl: "Roles Held" },
      { num: "15+", count: 15, suffix: "+", lbl: "Technologies" },
      { num: "A+", count: null, suffix: "", lbl: "BSc · GPA 3.85" },
    ],
    // Floating chips over the portrait.
    heroChips: ["Next.js", "Node.js", "MongoDB"],
  },

  about: {
    story: "TODO: write the personal narrative — how you got into building, what you care about, how you work.",
    // Titles are real (they were `personal` in the CV); the one-line notes are not.
    strengths: [
      { title: "Adaptability", note: "TODO: one line on how this shows up in your work." },
      { title: "Communication", note: "TODO: one line on how this shows up in your work." },
      { title: "Team Collaboration", note: "TODO: one line on how this shows up in your work." },
      { title: "Problem-Solving", note: "TODO: one line on how this shows up in your work." },
      { title: "Work Under Pressure", note: "TODO: one line on how this shows up in your work." },
    ],
  },

  // No source for these — the contact panel shows dashed placeholders until filled.
  // Shape: { quote, name, role, initials }
  testimonials: [],

  socials: {
    github: "https://github.com/Andrew-Magdy-Rizk",
    githubLabel: "github.com/Andrew-Magdy-Rizk",
    linkedin: "https://www.linkedin.com/in/andrew-dakran-22900a224",
    linkedinLabel: "linkedin.com/in/andrew-dakran",
    email: "andrewdakran72@gmail.com",
    emailLabel: "andrewdakran72@gmail.com",
    phone: "+20 127 598 0639",
    phoneLabel: "+20 127 598 0639",
  },

  /* `level` and `bars` have no source in the CV.
     While they are null the skills panel labels the bars from `pills`
     and renders them in a visibly unfilled state.
     Fill as: level: "expert", bars: [{ label: "Next.js", pct: 90 }, …] */
  skills: [
    {
      num: "i.",
      title: "Frontend",
      level: null,
      bars: null,
      blurb:
        "Production Next.js & React with the modern toolchain. Tailwind, Shadcn/UI, Redux, SASS — built mobile-first and pushed for performance.",
      pills: ["Next.js 15", "React.js", "Redux", "JavaScript / ES6", "Tailwind CSS", "Shadcn/UI", "SASS", "Bootstrap"],
      size: "lg",
      featured: true,
    },
    {
      num: "ii.",
      title: "Backend",
      level: null,
      bars: null,
      blurb:
        "REST APIs with Node and Express. Token-based auth (Access + Refresh JWTs), role gating, and clean data layers.",
      pills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
      size: "md",
    },
    {
      num: "iii.",
      title: "Databases",
      level: null,
      bars: null,
      blurb: "Schemas modelled around real workflows — relational where it earns its keep, document where it flows.",
      pills: ["MongoDB", "PostgreSQL", "MySQL"],
      size: "sm",
    },
    {
      num: "iv.",
      title: ".NET & Microsoft",
      level: null,
      bars: null,
      blurb: "Graduation-project depth: ASP.NET + C# + SQL Server, plus day-to-day Azure DevOps for project ops.",
      pills: ["ASP.NET", "C#", "SQL Server", "Azure DevOps"],
      size: "md",
    },
    {
      num: "v.",
      title: "CMS & Commerce",
      level: null,
      bars: null,
      blurb:
        "Pragmatic stacks for client builds — WordPress when they own it, Strapi headless for new builds, Stripe & Clerk for payments and auth.",
      pills: ["WordPress", "Shopify", "Strapi", "Stripe", "Clerk"],
      size: "md",
    },
    {
      num: "vi.",
      title: "Tools & Ops",
      level: null,
      bars: null,
      blurb: "Git/GitHub for everything. Linux & AWS for hosting. Photoshop for the UI bits that need it.",
      pills: ["Git", "GitHub", "Linux", "AWS", "Photoshop"],
      size: "sm",
    },
  ],

  projects: [
    {
      slug: "filter-candles",
      title: "Filter Candles",
      glyph: "Fc",
      tag: "Full Stack",
      year: "2025",
      image: "/projects/filter-candles/hero.jpg",
      screens: [
        "/projects/filter-candles/screen-1.jpg",
        "/projects/filter-candles/screen-2.jpg",
        "/projects/filter-candles/screen-3.jpg",
      ],
      summary:
        "A complete management system for water-filter products — full-stack web app with secure auth, search, and a responsive product UI.",
      featured: true,
      size: "hero",
      stack: ["Next.js 15", "Node.js", "Express", "MongoDB", "JWT", "Tailwind", "Shadcn/UI"],
      problem:
        "A water-filter business needed a single place to manage their candle/filter products and present them to customers — replacing a patchwork of spreadsheets and a static site that hadn't been updated in months.",
      solution:
        "A full-stack web application for managing and displaying candle products, with secure session handling via Access + Refresh tokens, search and filtering for customers, and a responsive UI that works on every device.",
      features: [
        "Full-stack product management built on Next.js, Node, Express, MongoDB & Mongoose",
        "Secure authentication with Access & Refresh tokens for session management",
        "Search and filtering so users find products quickly",
        "Responsive, accessible UI with Tailwind CSS and Shadcn/UI",
        "SweetAlert2 for confirmations and feedback flows",
      ],
      arch: "Next.js 15 App Router on the front end. Node + Express API behind it, talking to MongoDB through Mongoose. JWT auth with refresh-token rotation in httpOnly cookies. Currently in production.",
      repo: null,
      live: null, // TODO: public URL, if the site is reachable
    },
    {
      slug: "advanced-academy",
      title: "Advanced Academy",
      glyph: "AA",
      tag: ".NET",
      year: "2024",
      image: "/projects/advanced-academy/hero.png",
      screens: [
        "/projects/advanced-academy/screen-1.jpg",
        "/projects/advanced-academy/screen-2.jpg",
        "/projects/advanced-academy/screen-3.jpg",
      ],
      summary:
        "Graduation project — full institute-management system for students, employees, courses, and grades. 2nd place in the Republic of Egypt.",
      featured: false,
      size: "tall",
      stack: ["ASP.NET", "C#", "SQL Server", "SweetAlert2"],
      problem:
        "Institutes were running registrations, grades, and credit-hour scheduling on paper and disconnected spreadsheets — slow for staff, opaque for students.",
      solution:
        "A web application that lets employees manage students, courses, and grades while letting students self-register subjects according to the credit-hour system, all under proper authentication and authorisation.",
      features: [
        "Full CRUD across students, employees, courses & institute tables",
        "Credit-hour subject registration online for students",
        "Grade entry by employees, grade view by students",
        "Authentication & authorisation with email-based password recovery",
        "Earned 2nd place in the Republic of Egypt graduation-project competition",
      ],
      arch: "ASP.NET Web Forms / MVC with C#. SQL Server backing all relational data. Email integration for password recovery. Built as the capstone for my BSc in Information Systems at Advanced Academy.",
      repo: null,
      live: null, // TODO: public URL, if the site is reachable
    },
    {
      slug: "ecommerce-next",
      title: "E-commerce · Next.js",
      glyph: "EC",
      tag: "Full Stack",
      year: "2024",
      image: "/projects/ecommerce-next/hero.jpg",
      screens: [
        "/projects/ecommerce-next/screen-1.jpg",
        "/projects/ecommerce-next/screen-2.jpg",
        "/projects/ecommerce-next/screen-3.jpg",
      ],
      summary:
        "A full-stack e-commerce build with Clerk auth, Strapi headless CMS, and Stripe checkout. Persistent carts, dark mode, real Gmail sign-in.",
      featured: false,
      size: "wide",
      stack: ["Next.js", "Clerk", "Strapi", "Stripe", "SweetAlert2"],
      problem:
        "I wanted a reference build of a modern e-commerce stack — one that matched the patterns I'd actually deploy for a client, not a tutorial that cuts corners on auth and payments.",
      solution:
        "A Next.js storefront wired to Strapi for catalog admin, Clerk for real Gmail sign-in, and Stripe for payments. Cart persists across sign-out so customers don't lose their session.",
      features: [
        "Product details fetched via API from Strapi",
        "Real Gmail sign-in / sign-up via Clerk",
        "Cart persists across sign-out and returns on sign-in",
        "Single-product purchase from the detail page or full cart checkout",
        "Admin-added products appear in the storefront immediately",
        "Built-in dark mode",
      ],
      arch: "Next.js App Router on the front end. Strapi as the headless CMS. Clerk for authentication, Stripe for payments.",
      repo: "https://github.com/Andrew-Magdy-Rizk/nextJs-Project",
      live: null, // TODO: public URL, if the site is reachable
    },
    {
      slug: "crafts",
      title: "Crafts",
      glyph: "Cr",
      tag: "Full Stack",
      year: "2025",
      image: "/projects/crafts/hero.jpg",
      screens: [
        "/projects/crafts/screen-1.jpg",
        "/projects/crafts/screen-2.jpg",
        "/projects/crafts/screen-3.jpg",
      ],
      summary:
        "Full-stack platform for an Egyptian crafts shop — customer storefront with dark mode, product search, and a complete admin dashboard for product and category management.",
      featured: false,
      size: "wide",
      stack: ["Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
      problem:
        "A local crafts business selling laser-cut gifts, lanterns, and educational products needed a professional online presence with a way to manage their inventory — replacing manual processes with a real web platform.",
      solution:
        "A full-stack web application with a polished Arabic-first storefront and a private admin dashboard. Customers browse products by category, view details with image galleries and color options, and create accounts. The shop owner manages products, categories, pricing, and stock status from the dashboard.",
      features: [
        "Customer storefront with product listing, search, and pagination",
        "Product detail pages with image gallery, color picker, rating, and discount pricing",
        "Dark / light mode toggle across the entire site",
        "Secure login and signup with email authentication",
        "Admin dashboard with full product CRUD and image upload",
        "Category management with cover images",
        "In-stock toggle and discount pricing per product",
        "Fully responsive — desktop and mobile",
      ],
      arch: "Next.js App Router on the front end with Tailwind CSS for styling. Node.js REST API on the backend, MongoDB for data. JWT-based authentication for both customers and admin.",
      repo: null,
      live: null, // TODO: public URL, if the site is reachable
    },
    {
      slug: "ecommerce-react",
      title: "E-commerce Shop · React",
      glyph: "Es",
      tag: "Frontend",
      year: "2023",
      summary:
        "Front-end e-commerce build using the Fake Store API — clean React state management for cart, add, remove, and clear flows.",
      featured: false,
      size: "med",
      stack: ["React.js", "Fake Store API", "CSS"],
      problem: "An early front-end build to drill state management and API consumption end-to-end.",
      solution:
        "A React shop pulling product data from the Fake Store API, with a working cart that handles add, remove, and clear-all.",
      features: [
        "Product details fetched from a public API",
        "Add to cart from any product",
        "Remove a single item from the cart",
        "Clear the entire cart in one action",
      ],
      arch: "React.js with hand-rolled state management and CSS.",
      repo: "https://github.com/Andrew-Magdy-Rizk/react-shop-app",
      live: null, // TODO: public URL, if the site is reachable
    },
  ],

  experience: [
    {
      when: "Mar 2025 — Now",
      title: "Full Stack Developer",
      org: "The Community (TC) · Cairo · Full-time",
      summary:
        "Managing multiple corporate websites and shipping small applications that improve organisational processes across the company.",
      stack: ["Next.js", "Node.js", "JavaScript", "Tailwind"],
    },
    {
      when: "Nov 2024 — Mar 2025",
      title: "Frontend Developer",
      org: "The Community (TC) · Online · Part-time",
      summary:
        "Built a courses website with Next.js 14. Used Azure DevOps to manage the entire project lifecycle — boards, repos, pipelines.",
      stack: ["Next.js 14", "React", "Azure DevOps"],
    },
    {
      when: "Sep 2024 — Jul 2025",
      title: "Teaching Assistant",
      org: "Advanced Academy · Giza · Full-time",
      summary:
        "Trained students on graduation projects across all academic branches. Took the practical sessions in every track.",
      stack: ["Mentoring", "Curriculum", "Code Review"],
    },
    {
      when: "Oct 2024 — Mar 2025",
      title: "Technical Support",
      org: "RGB · Fayoum · Full-time",
      summary:
        "Supported desktop and web cashier software in retail environments. Handled connectivity, printer integration, and online/offline failover.",
      stack: ["POS", "Networking", "Printers"],
    },
    {
      when: "Jun 2024 — Feb 2025",
      title: "Instructor",
      org: "The Community (TC) · Cairo · Part-time",
      summary:
        "Trained teenagers on Python and Scratch. Ran specialised workshops introducing adults to web technologies.",
      stack: ["Python", "Scratch", "Workshops"],
    },
    {
      when: "Jun 2024 — Aug 2024",
      title: "Instructor",
      org: "Eagles Academy · Fayoum · Part-time",
      summary:
        "Taught teenagers programming fundamentals (focus on Python) and guided adults through web application basics. Designed hands-on sessions with practical applications.",
      stack: ["Python", "Web Basics"],
    },
  ],

  education: [
    {
      when: "Sep 2020 — Jul 2024",
      title: "B.Sc. Information Systems",
      org: "Advanced Academy · Grade A+ · GPA 3.85",
      summary:
        "Graduation project: Advanced Academy Web Application — a full institute-management system that took 2nd place in the Republic of Egypt.",
    },
  ],

  certifications: [
    "Information Technology Institute (ITI) — PHP Web Development Track · 90 hours · 2024",
    "Cisco Networking Academy — IT Essentials · 2022",
    "Masr 2030 — ICDL · 2023",
    "Masr 2030 — English · 2023",
    "Agricultural Bank — Essentials · 2022",
    "TawarWeGhayar — Digital Skills · 2022",
  ],

  languages: [
    { lang: "Arabic", level: "Native" },
    { lang: "English", level: "B1" },
  ],
};

export default PORTFOLIO;
