import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { EDUCATION } from "../data/resume";

export const Education = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="gradient-card p-6 hover-glow transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {edu.institution}
                  </p>
                </div>
              </div>

              <div className="space-y-3 pl-2 border-l-2 border-slate-200 dark:border-slate-700 ml-7">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="font-medium">{edu.year}</span>
                </div>

                {edu.percentage && (
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                    <Award className="w-4 h-4 text-slate-400" />
                    <span>
                      <span className="font-medium">Score:</span>{" "}
                      {edu.percentage}
                    </span>
                  </div>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Highlights:
                    </p>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
