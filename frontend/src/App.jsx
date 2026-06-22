import { useEffect, useState } from "react";
import ComponentDemo from "./pages/ComponentDemo";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <button
        className="m-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >
        Toggle Theme
      </button>

      <ComponentDemo />
    </div>
  );
}

export default App;