function Card({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl shadow-gray-200/40 dark:shadow-none border border-gray-100 dark:border-slate-700 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
      <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:bg-blue-600 dark:group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 border border-blue-100 dark:border-blue-800">
        {icon || <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
      </div>
      <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
        {title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Card;