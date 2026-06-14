import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="p-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-4">
          Review analytics and AI-generated insights will appear here.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;