import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, ShieldCheck } from "lucide-react";
import { CERTIFICATIONS } from "../data/resume";

export const Certifications = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 section-light">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="gradient-card p-6 hover-glow group transition-all duration-300">
              {/* Header with icon and badge */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <span className="flex items-center gap-1.5 text-xs px-3 py-1.5 bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-full font-semibold border border-emerald-200 dark:border-emerald-800">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>

              {/* Certification Name */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cert.name}
              </h3>

              {/* Organization */}
              <p className="text-gradient font-semibold text-sm mb-4">
                {cert.organization}
              </p>

              {/* Issue Date */}
              <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-5">
                <Calendar size={16} />
                <span>{cert.issueDate}</span>
              </div>

              {/* Credential ID */}
              {cert.credentialId && (
                <div className="mb-5 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide mb-1">
                    Credential ID
                  </p>
                  <p className="text-xs font-mono text-slate-700 dark:text-slate-300 break-all">
                    {cert.credentialId}
                  </p>
                </div>
              )}

              {/* Certificate Link Button */}
              {cert.certificateUrl && (
                <motion.a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full">
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
