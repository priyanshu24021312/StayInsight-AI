import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow p-10 max-w-7xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Overview Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Review statistics and analytics will appear here once data is loaded.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;