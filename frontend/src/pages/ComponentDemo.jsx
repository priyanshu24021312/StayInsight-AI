import { useState } from "react";
import { toast } from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ComponentDemo() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-10 max-w-4xl mx-auto w-full space-y-12">
        
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Design System Demo
          </h1>
          <p className="text-gray-500">A playground for StayInsight AI UI components.</p>
        </div>

        {/* Buttons */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => toast.success("Primary Clicked")}>Primary Button</Button>
            <Button variant="secondary" onClick={() => toast("Secondary Clicked")}>Secondary</Button>
            <Button variant="outline" onClick={() => toast.error("Outline Clicked")}>Outline</Button>
          </div>
        </section>

        {/* Inputs */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Inputs</h2>
          <div className="max-w-md">
            <Input
              label="Email Address"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </section>

        {/* Modals & Loaders */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Feedback & Modals</h2>
          <div className="flex items-center gap-8">
            <Button onClick={() => setShowModal(true)}>Open Modal</Button>
            <div className="border-l pl-8 border-gray-200">
              <span className="text-sm text-gray-500 block mb-2 font-semibold">Loader State:</span>
              <Loader />
            </div>
          </div>

          <Modal
            isOpen={showModal}
            title="System Alert"
            onClose={() => setShowModal(false)}
          >
            <p>This is a perfectly styled, animated modal popup.</p>
          </Modal>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default ComponentDemo;