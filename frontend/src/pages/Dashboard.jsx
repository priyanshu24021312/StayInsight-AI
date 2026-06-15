import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-4">
          Dashboard
        </h1>

        <p>
          Review analytics and AI-generated insights will
          appear here.
        </p>
      </div>
    </>
  );
}

export default Dashboard;