import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink =
    "relative px-3 py-2 text-sm font-medium transition duration-300 hover:text-red-500";

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-slate-950/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-red-500"
          >
            LeadDesk
          </motion.h1>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`${navLink} ${
              location.pathname === "/"
                ? "text-red-500"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            Home
          </Link>

          <Link
            to="/admin"
            className={`${navLink} ${
              location.pathname === "/admin"
                ? "text-red-500"
                : "text-gray-700 dark:text-gray-200"
            }`}
          >
            Dashboard
          </Link>

          {/* Theme Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: 15 }}
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-gray-300 bg-white p-2 shadow-sm transition hover:bg-red-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-700" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}