import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "../data/resume";

export const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="relative pl-8 sm:pl-12">
              {/* Timeline dot */}
              <div className="absolute left-0 top-8 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-slate-50 dark:border-slate-950 shadow-lg" />

              {/* Timeline line */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="absolute left-1.5 top-12 w-0.5 h-full bg-gradient-to-b from-blue-300 to-purple-300 dark:from-blue-700 dark:to-purple-700" />
              )}

              <motion.div
                whileHover={{ y: -4 }}
                className="gradient-card p-6 hover-glow transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6 ml-0 sm:ml-16">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-3 ml-0 sm:ml-16">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-slate-600 dark:text-slate-300 flex gap-3 items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
