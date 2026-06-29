function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 py-10 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2 mb-2">
            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            StayInsight AI
          </span>
          <p className="text-sm">Empowering the hospitality industry with intelligent analytics.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} StayInsight AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;