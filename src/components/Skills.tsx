import { motion } from "framer-motion";
import { SKILLS } from "../data/resume";

export const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-slate-700 dark:text-slate-300 font-medium">
          {name}
        </span>
        <span className="text-blue-600 dark:text-blue-400 font-semibold">
          {level}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 rounded-full relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, repeat: Infinity }}
            viewport={{ once: true }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS.map((skillCategory) => (
            <motion.div
              key={skillCategory.category}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="gradient-card p-8 hover-glow transition-all duration-300">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-7 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
                {skillCategory.category}
              </h3>
              <div>
                {skillCategory.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
