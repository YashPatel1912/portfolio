import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ] as const;

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowOptions(!showOptions)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative p-2.5 rounded-xl transition-all duration-300
          ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30"
              : "bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-400/30"
          }
        `}
        aria-label="Toggle theme">
        <AnimatePresence mode="wait">
          {resolvedTheme === "dark" ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.2 }}>
              <Moon className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.2 }}>
              <Sun className="w-5 h-5 text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect */}
        <span
          className={`
          absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300
          ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-br from-indigo-400 to-purple-500"
              : "bg-gradient-to-br from-amber-300 to-orange-400"
          }
          blur-lg -z-10
        `}
        />
      </motion.button>

      {/* Theme options dropdown */}
      <AnimatePresence>
        {showOptions && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 z-50 py-2 px-1 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 min-w-[140px]">
              {themes.map((themeOption) => {
                const Icon = themeOption.icon;
                const isActive =
                  (themeOption.value === "light" &&
                    resolvedTheme === "light") ||
                  (themeOption.value === "dark" && resolvedTheme === "dark") ||
                  themeOption.value === "system";

                return (
                  <motion.button
                    key={themeOption.value}
                    onClick={() => {
                      setTheme(themeOption.value);
                      setShowOptions(false);
                    }}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors
                      ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                          : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                      }
                    `}>
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      {themeOption.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTheme"
                        className="ml-auto w-2 h-2 rounded-full bg-blue-500"
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    // { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Certifications", href: "#certifications" },
    // { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-4 my-3">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 rounded-2xl glass-effect shadow-lg">
          <div className="flex items-center justify-between">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              YP
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 text-slate-600 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80">
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Right side controls */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors"
                whileTap={{ scale: 0.9 }}>
                {isOpen ? (
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                )}
              </motion.button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-1">
            <div className="glass-effect rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
              <div className="px-2 py-3 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="w-full text-left px-4 py-3 text-slate-600 dark:text-slate-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-xl hover:bg-slate-100/80 dark:hover:bg-slate-800/80">
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
