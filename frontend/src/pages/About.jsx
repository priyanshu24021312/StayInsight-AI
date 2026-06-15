import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">
          About StayInsight AI
        </h1>

        <p>
          StayInsight AI helps hotel owners analyze guest
          reviews and gain valuable insights using artificial
          intelligence.
        </p>
      </div>
    </>
  );
}

export default About;