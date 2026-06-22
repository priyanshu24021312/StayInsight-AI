function Input({
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="mb-4">
      <label className="block mb-1">
        {label}
      </label>

      <input
        className="border p-2 rounded w-full"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;