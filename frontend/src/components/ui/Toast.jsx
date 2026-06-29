import { Toaster } from "react-hot-toast";

function Toast() {
  return (
    <Toaster 
      position="top-right" 
      toastOptions={{
        className: 'rounded-xl shadow-lg font-medium',
        style: {
          border: '1px solid #f3f4f6',
          padding: '16px',
          color: '#1f2937',
        },
      }}
    />
  );
}

export default Toast;