import Navbar from "../components/Navbar";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Footer from "../components/Footer";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-6 relative">
        {/* Background Accent */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-40 pointer-events-none"></div>

        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-xl shadow-gray-200/50 dark:shadow-none w-full max-w-md border border-gray-100 dark:border-gray-700 relative z-10 transition-colors">
          <div className="text-center mb-8">
            <div className="inline-flex bg-blue-100 dark:bg-blue-900/40 p-3 rounded-2xl mb-4 text-blue-600 dark:text-blue-400">
               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>
            </div>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Welcome Back</h1>
            <p className="text-gray-500 dark:text-gray-400">Sign in to your StayInsight account</p>
          </div>

          <Input label="Email Address" placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input label="Password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />

          <div className="mt-8">
            <Button className="w-full text-lg py-3">Sign In Securely</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;