import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Lily", // Change to your first name
  lastName: "David", // Change to your last name
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Product Manager", // Change to your role (e.g., "Software Engineer", "Designer", "Product Manager")
  avatar: "/images/avatar.jpg", // Replace with your own avatar image
  email: "lilydavid@gmail.com", // Change to your email
  location: "Asia/Singapore", // Change to your IANA timezone (e.g., "America/New_York", "Europe/London", "Asia/Tokyo")
  languages: [], // Add your languages or leave empty array
};



const social = [
  // Update these with your actual social media links
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lilydavid",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lily-david-5a726628/",
  },

  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg", // Replace with your own hero image
  label: "Home",
  title: `${person.firstName}'s Sandbox`,
  description: `Portfolio website showcasing my work`,
  headline: <>Welcome to my Sandbox</>, // Change to your own headline
  featured: {
    display: true, // Set to false if you don't want a featured project
    title: <>Recent project: <strong className="ml-4">PMF for Your Music Lab</strong></>,
    href: "/work/your-project-slug", // Update with your actual project slug
  },
  subline: (
    <>
    Hi, I am {person.firstName}. I've build this space to share my learnings and experiments.
      {/* Customize this description to match your background and interests */}
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.firstName}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/lily-david-ggvpup/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        {person.firstName} is a {person.role.toLowerCase()} with experience building data-driven products and 
        leading cross-functional teams in Beauty retail, FMCG, e-commerce, and omnichannel.
        </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sephora", // Change to your company name
        timeframe: "2019 - Present", // Update with your actual timeframe
        role: "Senior Product Manager", // Change to your actual role
        achievements: [
          <>Key Results</>,
          <>
            Used ML-powered promotion recommendation engine to boost cart to checkout conversion rates by 1% YOY through advanced analytics adoption
          </>,
          <>
            Orchestrating unique user experience from catalog browsing to order fulfilment across 7 markets in SEA. Enabled prelaunch of Sephora exclusive brand Haus Labs by Lady Gaga across SEA in Q1 2025 recording 6X jump in App Session CR leading to collection of upto 80% of monthly sales during the prelaunch season in key markets.
          </>,
          <>
            Implemented enterprise SaaS solutions (OMS, ERP integrations) standardizing order fulfillment processes across 7 markets, improving on-time delivery by 10%
          </>,
          <>
            Built Sephora's Clienteling App from 0 to 1, enabling personalized in-store experiences, impacting upto 12% of SEA retail transactions, transforming in-store customer experience
          </>,
          <>
            Launched and scaled Skincredible, Sephora's ML-powered skin diagnostics app that revolutionized skin consultations, increasing store AOV by 2X by bridging online and offline beauty experiences.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // Add your own project images here
          // {
          //   src: "/images/projects/project-01/cover-01.jpg", // Replace with your image
          //   alt: "Your Project", // Update alt text
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // Add more work experiences as needed
      {
         company: "Unilever",
         timeframe: "Dec 2015 - Apr 2019",
         role: "Insights and Innovation Lead",
         achievements: [
           <>Business-partner to shopper marketing teams to support Unilever’s JBP (joint business planning) with Global retailers like Carrefour, Tesco, Reliance, Walmart, Walgreens and small/medium grocery, Kirana players.</>,
           <>Designed, built, and scaled 20+ Retail Innovation Labs across UK, SEA, EU, NA, EMEA, and South Asia, driving rapid technology adoption and rollout.</>,
           <>Integrated biometric tools into shopper research to transform shopper insights capabilities across business units</>,
         ],
         images: [],
       },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Your University", // Change to your university/college name
        description: <>Studied your field of study.</>, // Update with your actual studies
      },
      // Add more education as needed
      // {
      //   name: "Another Institution",
      //   description: <>Additional studies or certifications.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Product Strategy & Analytics", // Change to your actual skill
        description: <>Data-driven product strategy, A/B testing, user research, and using analytics tools like Google Analytics and  Mixpanel. Seasoned in Prioritisation, SDLC using Agile practices, Continuous Reserach, Product Marketing & GTM strategies </>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg", // Replace with your project image
          //   alt: "Your Project", // Update alt text
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Data & Analytics", // Add another skill
        description: <>Knowledge of data warehouses, data lakes, ETL/ELT processes, and data pipelines.Comfortable with SQL and working with DWH
Hands on experience working with Google BigQuery, Redash, Firebase, Google Analytics, Postman, MixPanel, Kameleoon, New Relic, Kafka, AWS Cloud, GCP, GKE, DOMO.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg", // Replace with your project image
          //   alt: "Your Project", // Update alt text
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // Add more skills as needed
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.firstName}`,
  description: `${person.firstName}'s sandbox`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
