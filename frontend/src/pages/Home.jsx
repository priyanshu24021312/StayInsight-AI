import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <div className="grid md:grid-cols-2 gap-6 p-6">
        <Card
          title="Sentiment Analysis"
          description="Identify positive and negative hotel reviews using AI."
        />

        <Card
          title="Review Insights"
          description="Discover common themes and guest concerns."
        />
        <Card
          title="Smart Responses"
          description="Generate AI-powered responses for guest reviews."
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;