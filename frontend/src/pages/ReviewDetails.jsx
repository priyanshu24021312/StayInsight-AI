import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Footer from "../components/Footer";
import { useState } from "react";

function ReviewDetails() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />
      <main className="flex-grow p-10 max-w-7xl mx-auto w-full">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-start transition-colors">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Review Details
          </h1>
          <Button onClick={() => setOpen(true)}>
            View Sample Guest Review
          </Button>

          <Modal isOpen={open} title="Guest Review #402" onClose={() => setOpen(false)}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold">
                JD
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white">John Doe</h4>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-2xl italic text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-600">
              "Excellent location and friendly staff. The AI integrated room service was a fantastic touch. Will definitely visit again!"
            </p>
          </Modal>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ReviewDetails;