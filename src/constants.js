import myopenlib from "./pages/project/imgs/myopenlib.png"
import halalfind from "./pages/project/imgs/halalfind.png"

export const INTRO = "Hello! Welcome to my personal website, check out some of my stuff"

export const ABOUT_ME = "I’m Abdullah Ahmed, a full stack software engineer from Sydney, AU with 2 years of professional experience in high-paced startup environments. A year ago I graduated from UNSW with a BSc in Comp Sci. Recently I've gained interest in infra and cloud security engineering and hope to document my journey transitioning into this field!"

export const SHORT_TERM_GOALS = [
    "Completion of a community benefitting project e.g gopray that is used by family and friends daily with a technical focus on security and automation", 
    "Gain a better understanding of cyber security engineering through completion of certificates and courses (checkout my blog here → <link to blog here>) and consequently potential for entry into a cybersec role.",
    "Complete the neetcode roadmap for algos",
    "Get a mid level role in a top scaleup/startup company"
]

export const FIVE_YEAR_GOALS = [
    "Create a software company which creates solutions to digital-age problems people in the community face on a daily basis.", 
    "Create a profitable tech company within 5-10 years which generates ~ $500k/yearly e.g. SaaS subscription based product", 
    "Become a senior engineer/manager in a medium-large tech company", 
    "Become a “tech” mentor for the youth community"
]

export const LIFE_VISION = [
    "Have developed and lead multiple software applications (some non-profit, others software products) which create positive impact for millions of people and inspire others (including the youth)",
    "Accrued large amounts of halal money which in turn is re-invested into other companies /startups following similar paths or organizations which benefit the youth in accelerating their passion and knowledge in tech and deen."
]

export const PROJECT_LIST = [
    {
        name: "myopenlib",
        description: "Full stack Node.js personal project which allows users to search for books, add them onto their own personal library, and request them from other users via a real time messaging system implemented through Socket.io. Old Deployment using Nginx reverse proxy on a remote server hosted on an AWS EC2 instance. New deployment using Digitalocean app deployment.",
        technologies: ["PaaS/CICD: Digitalocean w/ Gitlab", "REST API: Node.js Express", "DB: MySQL (Clever-Cloud)", "Frontend: React JS (w/ Redux)", "Auth: Express JWTs", "Messaging: Socket.io"],
        link: "https://myopenlib-j7eax.ondigitalocean.app/", 
        img_path: myopenlib
    },
    {
        name: "halalfind (WIP)",
        description: "An app which allows Muslims to contribute their own research of halal/haram food products into a singular platform/DB, it is an effort to combine the individual findings/discoveries in different channels all into one trustworthy and reliable platform", 
        technologies: ["PaaS/CICD: Digitalocean w/ Github", "REST API: Golang Gin (HTTP web framework)", "Scraper service: TS/JS node w/ Puppeteer and Bright Data scraping browser (POC)", "DB: Postgres / Firebase", "Frontend: React TS (Next.js)", "Auth: Firebase"],
        link: "https://halalfind-2qzne.ondigitalocean.app/",
        img_path: halalfind
    }, 

]

export const LINKEDIN_LINK = "https://www.linkedin.com/in/abdullah-ahmed-51331a1ba"
export const GITHUB_LINK = "https://github.com/Abdullah527382"
export const TWITTER_LINK = "https://twitter.com"