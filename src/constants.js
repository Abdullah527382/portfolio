import myopenlib from "./pages/project/imgs/myopenlib.png";
import halalfind from "./pages/project/imgs/halalfind.png";
import scraper from "./pages/project/imgs/scraper.png";
export const INTRO =
  "Hello! Welcome to my personal website, check out some of my stuff";

export const ABOUT_ME =
  "I’m Abdullah Ahmed, a full stack software engineer from Sydney, AU with 2 years of professional experience in high-paced startup environments. A year ago I graduated from UNSW with a BSc in Comp Sci. Recently I've gained interest in infra and cloud security engineering and hope to document my journey transitioning into this field!";

export const SHORT_TERM_GOALS = [
  "Completion of a community benefitting project e.g gopray that is used by family and friends daily with a technical focus on security and automation",
  "Gain a better understanding of cyber security engineering through completion of certificates and courses (checkout my blog here → <link to blog here>) and consequently potential for entry into a cybersec role.",
  "Complete the neetcode roadmap for algos",
  "Get a mid level role in a top scaleup/startup company",
];

export const FIVE_YEAR_GOALS = [
  "Create a software company which creates solutions to digital-age problems people in the community face on a daily basis.",
  "Create a profitable tech company within 5-10 years which generates adequate amount yearly e.g. SaaS subscription based product",
  "Become a senior engineer/manager in a medium-large tech company",
  "Become a “tech” mentor for the youth community",
];

export const LIFE_VISION = [
  "Have developed and lead multiple software applications (some non-profit, others software products) which create positive impact for millions of people and inspire others (including the youth)",
  "Accrued large amounts of halal money which in turn is re-invested into other companies /startups following similar paths or organizations which benefit the youth in accelerating their passion and knowledge in tech and deen.",
];

export const PROJECT_LIST = [
  {
    name: "Halalscout data portal",
    description:
      "Personal data service project with UI which bulk scrapes user specified vegetarian food products from retail websites, it is the data side of halalfind and other projects. At its core it uses a messaging queue (bullmq) to distribute scraping tasks to multiple workers (puppeteer) which scrape the data and store it in file storage (digital ocean spaces). The UI is a React TS app which allows users to view the data and download it as a CSV file.",
    technologies: [
      "Paas/CICD: Digitalocean w/ Github",
      "REST API: Typescript w/ Express",
      "ORM: Prisma",
      "DB: Postgres (Digitalocean managed)",
      "Frontend: React w/Typescript",
      "message queue: BullMQ",
      "Notifications: Redis Pub/Sub",
      "File storage: Digitalocean spaces",
      "Auth: Firebase",
    ],
    link: "https://data.halalscout.com.au",
    img_path: scraper,
  },
  {
    name: "myopenlib",
    description:
      "Full stack Node.js personal project which allows users to search for books, add them onto their own personal library, and request them from other users via a real time messaging system implemented through Socket.io. Old Deployment using Nginx reverse proxy on a remote server hosted on an AWS EC2 instance. New deployment using Digitalocean app deployment.",
    technologies: [
      "PaaS/CICD: Digitalocean w/ Gitlab",
      "REST API: Node.js Express",
      "DB: MySQL (Clever-Cloud)",
      "Frontend: React JS (w/ Redux)",
      "Auth: Express JWTs",
      "Messaging: Socket.io",
    ],
    link: "https://myopenlib-j7eax.ondigitalocean.app/",
    img_path: myopenlib,
  },
  {
    name: "halalfind (WIP)",
    description:
      "An app which allows Muslims to contribute their own research of halal/haram food products into a singular platform/DB, it is an effort to combine the individual findings/discoveries in different channels all into one trustworthy and reliable platform",
    technologies: [
      "PaaS/CICD: Digitalocean w/ Github",
      "REST API: Golang Gin (HTTP web framework)",
      "Scraper service: TS/JS node w/ Puppeteer and Bright Data scraping browser (POC)",
      "DB: Postgres / Firebase",
      "Frontend: React TS (Next.js)",
      "Auth: Firebase",
    ],
    link: "https://halalfind-2qzne.ondigitalocean.app/",
    img_path: halalfind,
  },
];

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/abdullah-ahmed-51331a1ba";
export const GITHUB_LINK = "https://github.com/Abdullah527382";
export const TWITTER_LINK = "https://twitter.com";

const SIMPLEKYC_EXPERIENCE = {
  title: "Software Engineer",
  company: "Simple KYC",
  date: "October 2021 - December 2022",
  url: "https://www.simplekyc.com/",
  technologies: [
    "TypeScript",
    "Docker",
    "Kubernetes",
    "Postgres",
    "Microsoft SQL Server",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Vue.js",
    "Jenkins",
    "Terraform",
    "React.js",
    "MySQL",
    "Node.js",
  ],
  responsibilities: [
    {
      projectName: "Kubernetes (AKS & GKE)",
      tasks: [
        "Deployments w/ Docker, Jenkins, Kubernetes, FluxCD. Created Docker containers and Jenkins pipelines for various different projects. Helped devOps team resolve various issues in K8s including certmanager/letsencrypt TLS automation issues in K8s and FluxCD which impacted prod environments.",
        "Used Terraform to provision a K8s cluster on GCP, helped universalise our infra provisioning between platforms",
        "Personal project:  K8s automation in creating deployments for our core product which aimed to help decrease the onboard time for our core product (development only)",
      ],
    },
    {
      projectName: "Go billing server",
      tasks: [
        "Contributed to an internal billing system, written in Go w/ a CLI in Typescript/Node connected to Postgres",
        "Used openapi/swagger for API documentation. Deployment with Docker and Kubernetes.",
      ],
    },
    {
      projectName: "Web portal application",
      tasks: [
        "Led the development for this project, utilizing Laravel (w/ Sanctum and Fortify for sessions and auth) for the backend and React (NextJS w/ ContextAPI and TypeScript) for frontend, connected to Postgres w/ Eloquent.",
      ],
    },
    {
      projectName: "Azure service bus",
      tasks: [
        "Helped in finding a correct architectural component in our microservices system",
        "Used the Azure Service Bus API in a client SDK for laravel which feeds data from all instances into a service bus queue, triggering an Azure Function (Typescript) to append usage data to a SQL Server database.",
      ],
    },
    {
      projectName: "Temporal.io ingestions",
      tasks: [
        "Worked with senior architects and engineers to utilize a workflow orchestration engine (Node/Typescript) to create a persistent ingestion service which scrapes a Cloudflare protected web database, architecting optimizations i.e., parallelism, to achieve faster results.",
      ],
    },
  ],
};

const TILITER_EXPERIENCE = {
  title: "Full stack software engineer",
  company: "Tiliter",
  date: "January 2023 - November 2023",
  url: "https://www.tiliter.com/",
  technologies: [
    "AWS",
    "TypeScript",
    "Docker",
    "Python",
    "Postgres",
    "TeamCity",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Next.js",
    "Django",
    "Salesforce",
    "React.js",
    "SCCM",
    "Node.js",
  ],
  responsibilities: [
    {
      projectName: "Recognition API",
      tasks: [
        "Contributed to a Python FastAPI service which connected to our AI inference model to deliver HTTP responses to input Base64 strings (images), technologies include Pytest for unit and integration testing, SQLAlchemy and Postgres for DB storage, AWS S3 for json file storage, locust for load testing. AWS CDK as infra, containerized with docker.",
        "Utilized FastAPI/Redocly for a custom API documentation, AWS Lambda for polling client simulation, AWS Cloudwatch for logs",
      ],
    },
    {
      projectName: "Tiliter REST API",
      tasks: [
        "Helped with a Python Django web service which acted as a central store for our legacy data",
        "Created new models, endpoints and tests with the Django ORM",
        "Utilized Postgres as DB, hosted on Azure web app service. Containerized with Docker",
      ],
    },
    {
      projectName: "GV2 API and Web app",
      tasks: [
        "Responsible for the development for an AWS lambda service (GV2 API) which connected the GV2 web app to the Tiliter REST API",
        "Also contributed to the rewrite of the GV2 web app, written in Typescript w/ React (NextJS)",
        "As part of the upgrade to our service tooling, this drastically helped our service partners efficiently resolve issues with IoT devices running our software",
      ],
    },
    {
      projectName: "On-call and Support Engineer",
      tasks: [
        "Partook in roster based on-call duties i.e. Cloudwatch alarms and Opsgenie to help ensure software errors didn’t impact customer usage and experience",
        "Also contributed as an on-call support engineer for our service partners to quickly resolve software issues during business hours, utilized SCCM and putty for remote debugging and troubleshooting",
      ],
    },
  ],
};

export const EXPERIENCE_LIST = [SIMPLEKYC_EXPERIENCE, TILITER_EXPERIENCE];
