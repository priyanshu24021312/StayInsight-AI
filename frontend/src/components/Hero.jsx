import Button from "./ui/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative text-center py-28 px-4 overflow-hidden transition-colors duration-300">
      {/* Background Blobs (Now in shades of blue/indigo) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-5xl opacity-40 dark:opacity-20 pointer-events-none -z-10">
         <div className="absolute top-[0%] left-[10%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
         <div className="absolute top-[0%] right-[10%] w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
         <div className="absolute bottom-[-10%] left-[30%] w-80 h-80 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-sm font-bold tracking-wider mb-8 border border-blue-200 dark:border-blue-800 shadow-sm">
          ✨ NEXT-GEN HOSPITALITY AI
        </span>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight tracking-tight">
          Discover Guest Sentiment <br/> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-300">StayInsight AI</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Analyze thousands of hotel reviews instantly. Turn raw feedback into actionable insights to elevate your guest experience and boost your ratings.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          <Link to="/analysis">
            <Button className="text-lg px-8 py-3.5 w-full sm:w-auto">
              Analyze Reviews
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Button>
          </Link>
          <Link to="/demo">
            <Button variant="secondary" className="text-lg px-8 py-3.5 w-full sm:w-auto">
              View Components Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;