// import { motion } from "framer-motion";
// import { ExternalLink, Github } from "lucide-react";
// import { PROJECTS } from "../data/resume";

// export const Projects = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (
//     <section
//       id="projects"
//       className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">
//           Projects
//         </motion.h2>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="space-y-8">
//           {PROJECTS.map((project, index) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               className="group bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-6 sm:p-8 rounded-lg border border-slate-200 dark:border-slate-600 hover:shadow-xl transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-500">
//               <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
//                     {project.title}
//                   </h3>
//                   <p className="text-sm text-slate-500 dark:text-slate-400">
//                     {project.duration}
//                   </p>
//                 </div>
//               </div>

//               <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
//                 {project.description}
//               </p>

//               <div className="mb-4">
//                 <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
//                   Key Features:
//                 </h4>
//                 <ul className="space-y-2">
//                   {project.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="text-slate-700 dark:text-slate-300 flex gap-2">
//                       <span className="text-blue-600 dark:text-blue-400 font-bold">
//                         •
//                       </span>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="mb-6">
//                 <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
//                   Technologies:
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* <div className="flex flex-wrap gap-3">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-slate-600 transition-all duration-300 hover:scale-105">
//                   <Github size={18} />
//                   View Code
//                 </a>
//                 {project.live && (
//                   <a
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105">
//                     <ExternalLink size={18} />
//                     Live Demo
//                   </a>
//                 )}
//               </div> */}

//               <div className="flex flex-wrap gap-3">
//                 {/* GitHub */}
//                 <a
//                   href={project.github || "#"}
//                   target={project.github ? "_blank" : ""}
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300
//       ${
//         project.github
//           ? "bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-900 dark:hover:bg-slate-600 hover:scale-105"
//           : "bg-gray-400 text-white cursor-not-allowed"
//       }`}>
//                   <Github size={18} />
//                   {project.github ? "View Code" : "Not Available"}
//                 </a>

//                 {/* Live Demo */}
//                 <a
//                   href={project.live || "#"}
//                   target={project.live ? "_blank" : ""}
//                   rel="noopener noreferrer"
//                   className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300
//       ${
//         project.live
//           ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
//           : "bg-gray-400 text-white cursor-not-allowed"
//       }`}>
//                   <ExternalLink size={18} />
//                   {project.live ? "Live Demo" : "Not Available"}
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { PROJECTS } from "../data/resume";

export const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="gradient-card p-8 hover-glow group transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {project.duration}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-slate-600 dark:text-slate-300 flex gap-3 items-start">
                          <ArrowRight className="w-4 h-4 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* <div className="flex flex-wrap gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-secondary">
                      <Github size={18} />
                      View Code
                    </motion.a>
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-primary">
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    )}
                  </div> */}

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.github || "#"}
                      target={project.github ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300
      ${
        project.github
          ? "bg-slate-800 dark:bg-slate-700 text-white hover:bg-slate-900 dark:hover:bg-slate-600 hover:scale-105"
          : "bg-gray-400 text-white cursor-not-allowed"
      }`}>
                      <Github size={18} />
                      {project.github ? "View Code" : "Not Available"}
                    </a>
                    {/* Live Demo */}
                    <a
                      href={project.live || "#"}
                      target={project.live ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300
      ${
        project.live
          ? "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
          : "bg-gray-400 text-white cursor-not-allowed"
      }`}>
                      <ExternalLink size={18} />
                      {project.live ? "Live Demo" : "Not Available"}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
