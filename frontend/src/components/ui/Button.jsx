function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseStyle = "px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2";
  
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 border border-blue-200 dark:border-slate-600 shadow-sm hover:shadow-md",
    outline: "border-2 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;