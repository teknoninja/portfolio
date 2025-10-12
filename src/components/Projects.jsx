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
    title: "Connectly Realtime ChatApp",
    imageUrl: "/projects/chatApp.png",
    description: "Developed a real-time chat platform with one-to-one messaging capabilities using Supabase’s Realtime API.Implemented image sharing and file upload functionality with secure storage management, enabling features like sign-up, login, and the ability to block/unblock other users.Enhanced with smooth background animations for an engaging user experience.",
    tech: ["ReactJS", "SupaBase", "CSS"],
    link: "https://connectly-chat-app-gamma.vercel.app/" // <-- Add your deployed link here
  },
  {
    title: "Muscle-Rat",
    imageUrl: "/projects/rat3.webp",
    description: " Built an online fitness platform that lets users search for exercises using Workout APIs and view related tutorials via the YouTube API.Integrated RapidAPI endpoints to fetch exercise details Implemented a responsive and user-friendly interface in React for smooth navigation",
    tech: ["ReactJS", "RapidAPI", "CSS"],
    link: "https://muscle-rat-ucpc.vercel.app/" // <-- Add your deployed link here
  },
  {
    title: "Fit-Wear",
    imageUrl: "/projects/shop1.jpg",
    description: " Developed a fully responsive e-commerce platform with different categories, providing an intuitive shopping experience and smooth navigation.Integrated Sanity as a headless CMS to enable easy content management and dynamic product updates without code changes.Implemented Stripe payment gateway for secure checkout, handling payments, order confirmations, and error states.",
    tech: ["Sanity", "ReactJS", "Stripe"],
    link: "https://e-store-snowy-rho.vercel.app/" // <-- Add your deployed link here
  },
  {
    title: "Drum Kit",
    imageUrl: "/projects/drums.jpeg",
    description: "A simple interactive project for fun where every keypress or click creates a unique drum beat. This project showcases how simple JavaScript concepts like event listeners, DOM manipulation, and audio APIs can turn a static webpage into a playful musical experience.",
    tech: ["HTML", "JavaScript", "CSS"],
    link: "https://your-drum-kit-project-link.com" // <-- Add your deployed link here
  },
  {
    title: "Food Delivering webpage",
    imageUrl: "/projects/dishes1.jpg",
    description: "Designed a simple and user-friendly food delivery webpage with an interactive navbar, seamless ordering flow, and responsive layout with a simple delivery form at the end to ensure orders rightaway.",
    tech: ["CSS", "Bootstrap", "HTML"],
    link: "https://your-food-delivery-project-link.com" // <-- Add your deployed link here
  },
  {
    title: "Howl Mate",
    imageUrl: "/projects/dog.jpg",
    description: "Designed a playful and engaging dog dating website where pets (and their owners) can find the perfect match.Built with the power of Bootstrap – delivering a clean, responsive, and modern design that looks great on any device.",
    tech: ["Bootstrap", "HTML", "CSS"],
    link: "https://your-howl-mate-project-link.com" // <-- Add your deployed link here
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

// export const Projects =()=>{
//     return (
//         <motion.section
//       id="projects"
//       className="projects"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//     >
//       <motion.h2
//         variants={fadeInUp}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//       >
//         My Projects
//       </motion.h2>
//       <motion.div
//         className="project-grid"
//         variants={staggerContainer}
//         initial="initial"
//         whileInView="animate"
//         viewport={{ once: true }}
//       >
//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{ backgroundImage: "url('/projects/chatApp.png')" }}
//             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//           />
//           <h3> Connectly Realtime ChatApp</h3>
//           <p>
//           Developed a real-time chat platform with one-to-one messaging capabilities using Supabase’s Realtime API.Implemented image sharing and file upload functionality with secure storage management, enabling features like sign-up, login, and the 
//           ability to block/unblock other users.Enhanced with smooth background animations for an engaging user 
//           experience. 
//           </p>
//           <div className="project-tech">
//             <span>ReactJS</span>
//             <span>SupaBase</span>
//             <span>Css</span>
//           </div>
//         </motion.div>
//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{ backgroundImage: "url('/projects/rat3.webp')" }}
//             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//           />
//           <h3> Muscle-Rat</h3>
//           <p>
//           Built an online fitness platform that lets users search for exercises using Workout APIs and view related tutorials via 
//           the YouTube API.Integrated RapidAPI endpoints to fetch exercise details Implemented a responsive and user-friendly interface in React for smooth navigation 
//           </p>
//           <div className="project-tech">
//             <span>ReactJS</span>
//             <span>RapidApI</span>
//             <span>Css</span>
//           </div>
//         </motion.div>
         
//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{
//               backgroundImage: "url('/projects/shop1.jpg')",
//             }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           />
//           <h3>Fit-Wear</h3>
//           <p>
//           Developed a fully responsive e-commerce platform with different categories, providing an intuitive shopping experience and smooth navigation.Integrated Sanity as a headless CMS to enable easy content management and dynamic product updates without code changes.Implemented Stripe payment gateway for secure checkout, handling payments, order confirmations, and error states.
//           </p>
//           <div className="project-tech">
//             <span>Sanity</span>
//             <span>ReactJS</span>
//             <span>Stripe</span>
//           </div>
//         </motion.div>

//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{
//               backgroundImage: "url('/projects/drums.jpeg')",
//             }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           />
//           <h3>Drum Kit</h3>
//           <p>
//             A simple interactive project for fun where every keypress or click creates a unique drum beat. This project showcases how simple JavaScript concepts like event listeners, DOM manipulation, and audio APIs can turn a static webpage into a playful musical experience.
//           </p>
//           <div className="project-tech">
//             <span>Html</span>
//             <span>JavaScript</span>
//             <span>CSS</span>
//           </div>
//         </motion.div>
        

//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{ backgroundImage: "url('/projects/dishes1.jpg')" }}
//             whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
//           />
//           <h3> Food Delivering webpage</h3>
//           <p>
//           Designed a simple and user-friendly food delivery webpage with an interactive navbar, seamless ordering flow, and responsive layout with a simple delivery form at the end to ensure orders rightaway.
//           </p>
//           <div className="project-tech">
//             <span>Css</span>
//             <span>Bootstrap</span>
//             <span>Html</span>
//           </div>
//         </motion.div>
        
        

//         <motion.div
//           className="project-card"
//           variants={fadeInUp}
//           whileHover={{ y: -10, transition: { duration: 0.2 } }}
//         >
//           <motion.div
//             className="project-image"
//             style={{
//               backgroundImage: "url('/projects/dog.jpg')",
//             }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.2 }}
//           />
//           <h3>Howl Mate</h3>
//           <p>
//           Designed a playful and engaging dog dating website where pets (and their owners) can find the perfect match.Built with the power of Bootstrap – delivering a clean, responsive, and modern design that looks great on any device.
//           </p>
//           <div className="project-tech">
//             <span>Bootstrap</span>
//             <span>Html</span>
//             <span>CSS</span>
//           </div>
//         </motion.div>

        
//       </motion.div>
//     </motion.section> 
//     )
// }