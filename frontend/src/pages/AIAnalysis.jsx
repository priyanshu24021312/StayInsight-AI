import Navbar from "../components/Navbar";
import Loader from "../components/ui/Loader";
import Footer from "../components/Footer";

function AIAnalysis() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="p-8 text-gray-900 dark:text-gray-100">
  <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
    Sentiment Analysis
  </h1>
  <p className="text-gray-600 dark:text-gray-400">
    Upload your files to begin the analysis.
  </p>
        <Loader />
      </main>
      <Footer />
    </div>
  );
}

export default AIAnalysis;