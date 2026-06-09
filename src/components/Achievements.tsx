import { motion } from "framer-motion";
import { Trophy, Sparkles } from "lucide-react";
import { ACHIEVEMENTS } from "../data/resume";

export const Achievements = () => {
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
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="achievements"
      className="py-24 px-4 sm:px-6 lg:px-8 section-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className="gradient-card p-6 hover-glow group transition-all duration-300 relative overflow-hidden">
              {/* Subtle gold accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl group-hover:opacity-100 opacity-50 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {achievement.category === "achievement" ? (
                      <Sparkles className="w-7 h-7 text-white" />
                    ) : (
                      <Trophy className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-amber-600 dark:text-amber-400 font-semibold">
                      {achievement.date}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-2 border-l-2 border-amber-400/50 dark:border-amber-500/50">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
