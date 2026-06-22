import { useState } from "react";
import { toast } from "react-hot-toast";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";

function ComponentDemo() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="p-10 space-y-8">

      <Toast />

      <h1 className="text-3xl font-bold">
        StayInsight AI Components Demo
      </h1>

      {/* Button */}

      <div>
        <h2 className="font-semibold mb-2">
          Button Component
        </h2>

        <Button
          onClick={() => alert("Button Working")}
        >
          Click Me
        </Button>
      </div>

      {/* Input */}

      <div>
        <h2 className="font-semibold mb-2">
          Input Component
        </h2>

        <Input
          label="Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
      </div>

      {/* Toast */}

      <div>
        <h2 className="font-semibold mb-2">
          Toast Component
        </h2>

        <Button
          variant="secondary"
          onClick={() =>
            toast.success("Analysis Complete")
          }
        >
          Show Toast
        </Button>
      </div>

      {/* Modal */}

      <div>
        <h2 className="font-semibold mb-2">
          Modal Component
        </h2>

        <Button
          variant="outline"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </Button>

        <Modal
          isOpen={showModal}
          title="Review Details"
          onClose={() =>
            setShowModal(false)
          }
        >
          <p>
            This is a sample modal.
          </p>
        </Modal>
      </div>

      {/* Loader */}

      <div>
        <h2 className="font-semibold mb-2">
          Loader Component
        </h2>

        <Loader />
      </div>

    </div>
  );
}

export default ComponentDemo;