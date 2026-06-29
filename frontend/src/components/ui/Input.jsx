function Input({ label, placeholder, value, onChange, type = "text" }) {
  return (
    <div className="mb-5 relative text-left">
      <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-800 focus:bg-white dark:focus:bg-gray-700"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;