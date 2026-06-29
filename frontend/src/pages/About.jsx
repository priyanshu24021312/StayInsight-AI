import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-10 max-w-4xl mx-auto w-full mt-10">
        <span className="text-emerald-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Mission</span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
  About StayInsight AI
</h1>
        <div className="prose prose-lg text-gray-600">
          <p className="text-lg text-gray-600 dark:text-gray-300">
  StayInsight AI helps hotel owners analyze guest reviews using cutting-edge artificial intelligence.
</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;