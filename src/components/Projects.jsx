import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectsData = [
  {
    title: "Connectly AI Powered Real-Time Chat",
    imageUrl: "/projects/chatApp.png",
    description: "Built a RAG-based AI companion using pgvector semantic memory, Gemini embeddings (768-dimensional Matryoshka truncation), and Groq Llama-3.3-70B, enabling contextual recall via cosine similarity over IVFFlat ANN indexes and a hierarchical memory architecture with short-term, episodic, and long-term memory.Engineered secure serverless LLM orchestration with Supabase Edge Functions (Deno/TS), JWT authentication. ",
    tech: ["ReactJS", "SupaBase", "Python","RAG"],
    link: "https://connectly-chat-app-gamma.vercel.app/" // <-- Add your deployed link here
  },
  {
    title: "AI Stock Analysis Agent ",
    imageUrl: "/projects/stock.jpg",
    description: " Engineered an AI-powered market analysis platform generating trade signals using 17-strategy algorithms, multi-timeframe technical engine, delivered via a custom TradingView Chrome extension.Built an agentic orchestration layer,the buy/sell decision is pure, testable math — not an LLM, used Google's Gemini only to explain the signals, grounded on the computed evidence (a lightweight RAG pattern), and an autonomous scanner with risk controls automated via GitHub Actions cron jobs.  ",
    tech: ["Python", "Pandas", "FastAPI","Gemini API","Numpy"],
    link: "https://github.com/teknoninja/stocks-trading-agent" // <-- Add your deployed link here
  },
  {
    title: "Muscle Rat — AI Fitness Platform",
    imageUrl: "/projects/rat3.webp",
    description: "  An AI-powered fitness Platform that gives you a personal coach, nutritionist, and program designer in the browser. Integrated fitness platform with client-side routing, code splitting, and REST API integration for 1,300+ exercises, while orchestrating a MediaPipe + Gemini pipeline for on-device pose estimation, AI-powered nutrition analysis, personalized workout plans, and PDF export. ",
    tech: ["ReactJS", "RapidAPI", "MediaPipe","Gemini API"],
    link: "https://muscle-rat-ucpc.vercel.app/" // <-- Add your deployed link here
  },
  {
    title: "Fit-Wear",
    imageUrl: "/projects/shop1.jpg",
    description: " Developed a fully responsive e-commerce platform with different categories, providing an intuitive shopping experience and smooth navigation.Integrated Supabase as a Backend as a service, Database, Authentication to enable easy content management and dynamic product updates without code changes. Implemented Stripe payment gateway for secure checkout, handling payments, order confirmations, and error states.",
    tech: ["Supabase", "ReactJS", "Stripe"],
    link: "https://e-store-snowy-rho.vercel.app/" // <-- Add your deployed link here
  },

  {
    title: "Internship at Syfe  ",
    imageUrl: "/projects/e2e.webp",
    description: "Built an end-to-end Playwright + TypeScript suite automating critical trading journeys (MFA/OTP login, fund transfers, order placement) across Syfe SG/HK apps and SelfWealth, using a Page Object architecture with tag-based region/product execution. Owned the GitHub Actions CI/CD pipeline: Dockerized smoke and regression run, LambdaTest parallel cloud execution  ",
    tech: ["Playwright", "Github","Typescript" ],
    
    
  },
    {
    title: "Drum Kit",
    imageUrl: "/projects/drums.jpeg",
    description: "A simple interactive project for fun where every keypress or click creates a unique drum beat. This project showcases how simple JavaScript concepts like event listeners, DOM manipulation, and audio APIs can turn a static webpage into a playful musical experience.",
    tech: ["HTML", "JavaScript", "CSS"],
    link: "https://drumkit-eta-rouge.vercel.app/" 
  }
  
];

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Map over the projects data to render each card */}
        {projectsData.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            style={{ textDecoration: 'none' }} // Prevents underline on the card
          >
            <motion.div
              className="project-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((techItem) => (
                  <span key={techItem}>{techItem}</span>
                ))}
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

