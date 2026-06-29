import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const isActive = (path) => 
    location.pathname === path 
      ? "text-blue-600 dark:text-blue-400 font-semibold" 
      : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors";

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-gray-100 dark:border-slate-800 px-6 py-4 flex justify-between items-center shadow-sm transition-colors duration-300">
      
      <Link to="/" className="text-2xl font-extrabold flex items-center gap-2 group">
        <div className="bg-blue-100 dark:bg-blue-900/40 p-2 rounded-xl group-hover:scale-105 transition-transform">
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">
          StayInsight AI
        </span>
      </Link>

      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-6 font-medium mr-2">
          <Link to="/" className={isActive("/")}>Home</Link>
          <Link to="/about" className={isActive("/about")}>About</Link>
          <Link to="/dashboard" className={isActive("/dashboard")}>Dashboard</Link>
          <Link to="/analysis" className={isActive("/analysis")}>Analysis</Link>
        </div>

        <button 
          onClick={() => setIsDark(!isDark)} 
          className="p-2.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
        >
          {isDark ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        <Link to="/login" className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Login
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;