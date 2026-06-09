import { motion } from "framer-motion";
import { Zap, Target, Code, Rocket } from "lucide-react";
import { ABOUT, PERSONAL_INFO } from "../data/resume";

export const About = () => {
  const strengthIcons = [
    { icon: Code, color: "from-blue-500 to-cyan-500" },
    { icon: Rocket, color: "from-purple-500 to-pink-500" },
    { icon: Target, color: "from-green-500 to-emerald-500" },
    { icon: Zap, color: "from-yellow-500 to-orange-500" },
    { icon: Code, color: "from-indigo-500 to-blue-500" },
    { icon: Target, color: "from-red-500 to-pink-500" },
    { icon: Rocket, color: "from-teal-500 to-green-500" },
    { icon: Zap, color: "from-violet-500 to-purple-500" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* SECTION 1: About Me Layout */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 section-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Column: Profile Image (40% width) */}
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[40%] flex justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative group">
                {/* Animated glow background */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 60px rgba(59, 130, 246, 0.3)",
                      "0 0 80px rgba(59, 130, 246, 0.5)",
                      "0 0 60px rgba(59, 130, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-30 blur-3xl"
                />

                {/* Image Container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500/50 dark:border-blue-400/50 shadow-2xl ring-4 ring-blue-500/20 dark:ring-blue-400/20">
                  <img
                    src={PERSONAL_INFO.profileImage}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating decoration elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-8 border-2 border-transparent border-t-blue-400 border-r-blue-400 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Content (60% width) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-[60%] space-y-8">
              <motion.div variants={itemVariants} className="space-y-4">
                <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {ABOUT.summary}
              </motion.p>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Career Objectives
                </h3>
                <ul className="space-y-4">
                  {ABOUT.objectives.map((objective, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
                        {objective}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Key Strengths */}
      <section
        id="strengths"
        className="py-24 px-4 sm:px-6 lg:px-8 section-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Key Strengths
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A comprehensive set of skills and competencies developed through
              hands-on experience
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ABOUT.strengths.map((strength, index) => {
              const IconComponent =
                strengthIcons[index % strengthIcons.length].icon;
              const colorGradient =
                strengthIcons[index % strengthIcons.length].color;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                  }}
                  className="group relative gradient-card p-8 overflow-hidden transition-all duration-300">
                  {/* Animated background gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-5 group-hover:opacity-10 transition-opacity`}
                  />

                  {/* Top border accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colorGradient}`}
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorGradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Text */}
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {strength}
                    </h3>
                  </div>

                  {/* Subtle shine effect on hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileHover={{ opacity: 1, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:opacity-10"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};
