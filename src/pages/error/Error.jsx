import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        <h1 className="text-[130px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 leading-none">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Oops!
        </h2>

        <p className="text-gray-400 mt-5 text-lg leading-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <Link
            to="/"
            className="px-7 py-3 rounded-xl bg-pink-600 text-white font-semibold transition duration-300 hover:bg-pink-700 hover:scale-105 shadow-lg"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-7 py-3 rounded-xl border border-gray-600 text-white transition duration-300 hover:bg-white hover:text-black hover:scale-105"
          >
            Go Back
          </button>

        </div>

        <div className="mt-16 flex justify-center gap-6">
          <div className="w-4 h-4 rounded-full bg-pink-500 animate-bounce"></div>
          <div className="w-4 h-4 rounded-full bg-purple-500 animate-bounce delay-150"></div>
          <div className="w-4 h-4 rounded-full bg-cyan-400 animate-bounce delay-300"></div>
        </div>

      </div>
    </section>
  );
}