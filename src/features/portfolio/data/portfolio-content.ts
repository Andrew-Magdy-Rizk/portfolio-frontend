export const portfolioNavigation = [
  { href: "#home", label: "Home" }, { href: "#about", label: "About" }, { href: "#skills", label: "Skills" }, { href: "#projects", label: "Projects" }, { href: "#contact", label: "Contact" },
] as const

export const disciplines = ["Node.js developer", "Next.js", "React", "System design", "Product delivery"] as const

export const profileStats = [
  { value: "2+", label: "Years of experience" }, { value: "4,000+", label: "Platform users served" }, { value: "5,000+", label: "Course enrollments" },
] as const

export const skillGroups = [
  { title: "Backend", skills: ["JavaScript (ES6+)", "TypeScript", "Node.js", "Express.js", "RESTful API Design", "Authentication & Authorization", "Prisma ORM", "WebSockets", "Redis"] },
  { title: "Frontend", skills: ["React.js", "Next.js", "Redux", "Redux Toolkit", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Server-Side Rendering"] },
  { title: "Databases", skills: ["PostgreSQL", "MongoDB", "Mongoose", "MySQL"] },
  { title: "DevOps & Cloud", skills: ["Docker", "Git & GitHub", "CI/CD", "GitHub Actions", "Azure DevOps", "AWS", "Azure", "Vercel"] },
  { title: "Engineering", skills: ["System Design", "Database Design", "Performance Optimization", "Jest", "Debugging", "Agile-style Planning"] },
  { title: "AI workflow", skills: ["Claude Code", "Cursor", "AI pair-programming workflows"] },
] as const

export const projects = [
  { year: "2026", title: "Modern E-commerce Platform", label: "Route Academy graduation project", technologies: "Next.js | TypeScript | Tailwind CSS | Jest", description: "A storefront with product discovery, persistent cart management, and a responsive checkout experience.", highlights: ["Filtering and detailed product pages", "Persistent quantity-managed cart", "Unit-tested cart logic and components"], href: "https://freshcart-andrew-magdy.vercel.app/" },
  { year: "2026", title: "Social Media App", label: "Route Academy graduation project", technologies: "React.js | Tailwind CSS", description: "A responsive social-media frontend with profiles, post creation, a live feed, and interaction-focused UI states.", highlights: ["Like, comment, and follow interactions", "Protected routes and client-side state", "Reusable component architecture"], href: "https://social-media-app-rouge-tau.vercel.app/" },
  { year: "2025", title: "Filter Candles", label: "Production full-stack system", technologies: "Node.js | MongoDB | Express | JWT | Next.js 15 | SweetAlert2", description: "A production application for managing and displaying filter-candle products, with secure sessions and fast product discovery.", highlights: ["Access and refresh token authentication", "Search and filtering", "Responsive Tailwind and shadcn/ui interface"], href: "#contact" },
  { year: "2024", title: "Advanced Academy Web Application", label: "Graduation project | 2nd place nationally in Egypt", technologies: "ASP.NET | C# | SQL Server | SweetAlert2", description: "A complete institute-management system serving students, employees, courses, grades, and online registration.", highlights: ["Role-aware authentication and authorization", "Credit-hour subject registration", "Email password recovery and grade management"], href: "#contact" },
] as const

export const contactLinks = [
  { label: "Email", value: "andrewdakran72@gmail.com", href: "mailto:andrewdakran72@gmail.com" }, { label: "Phone", value: "+20 127 598 0639", href: "tel:+201275980639" }, { label: "LinkedIn", value: "linkedin.com/in/andrew-dakran", href: "https://www.linkedin.com/in/andrew-dakran" }, { label: "GitHub", value: "github.com/Andrew-Magdy-Rizk", href: "https://github.com/Andrew-Magdy-Rizk" },
] as const
