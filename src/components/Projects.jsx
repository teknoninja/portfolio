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

export const Projects =()=>{
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
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/chatApp.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Connectly Realtime ChatApp</h3>
          <p>
          Developed a real-time chat platform with one-to-one messaging capabilities using Supabase’s Realtime API.Implemented image sharing and file upload functionality with secure storage management, enabling features like sign-up, login, and the 
          ability to block/unblock other users.Enhanced with smooth background animations for an engaging user 
          experience. 
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>SupaBase</span>
            <span>Css</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/rat3.webp')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Muscle-Rat</h3>
          <p>
          Built an online fitness platform that lets users search for exercises using Workout APIs and view related tutorials via 
          the YouTube API.Integrated RapidAPI endpoints to fetch exercise details Implemented a responsive and user-friendly interface in React for smooth navigation 
          </p>
          <div className="project-tech">
            <span>ReactJS</span>
            <span>RapidApI</span>
            <span>Css</span>
          </div>
        </motion.div>
         
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/shop1.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Fit-Wear</h3>
          <p>
          Developed a fully responsive e-commerce platform with different categories, providing an intuitive shopping experience and smooth navigation.Integrated Sanity as a headless CMS to enable easy content management and dynamic product updates without code changes.Implemented Stripe payment gateway for secure checkout, handling payments, order confirmations, and error states.
          </p>
          <div className="project-tech">
            <span>Sanity</span>
            <span>ReactJS</span>
            <span>Stripe</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/drums.jpeg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Drum Kit</h3>
          <p>
            A simple interactive project for fun where every keypress or click creates a unique drum beat. This project showcases how simple JavaScript concepts like event listeners, DOM manipulation, and audio APIs can turn a static webpage into a playful musical experience.
          </p>
          <div className="project-tech">
            <span>Html</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>
        </motion.div>
        

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/dishes1.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Food Delivering webpage</h3>
          <p>
          Designed a simple and user-friendly food delivery webpage with an interactive navbar, seamless ordering flow, and responsive layout with a simple delivery form at the end to ensure orders rightaway.
          </p>
          <div className="project-tech">
            <span>Css</span>
            <span>Bootstrap</span>
            <span>Html</span>
          </div>
        </motion.div>
        
        

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/dog.jpg')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Howl Mate</h3>
          <p>
          Designed a playful and engaging dog dating website where pets (and their owners) can find the perfect match.Built with the power of Bootstrap – delivering a clean, responsive, and modern design that looks great on any device.
          </p>
          <div className="project-tech">
            <span>Bootstrap</span>
            <span>Html</span>
            <span>CSS</span>
          </div>
        </motion.div>

        
      </motion.div>
    </motion.section> 
    )
}