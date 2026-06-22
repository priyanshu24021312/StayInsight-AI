function Button({
  children,
  onClick,
  variant = "primary",
}) {
  const styles = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-600 text-white",
    outline: "border border-gray-600 text-gray-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} px-4 py-2 rounded`}
    >
      {children}
    </button>
  );
}

export default Button;