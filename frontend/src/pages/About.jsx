import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold">About StayInsight AI</h1>

        <p className="mt-4">
          StayInsight AI helps hotel owners analyze guest reviews and gain
          valuable insights using artificial intelligence.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;