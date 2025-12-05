import { Link } from 'react-router-dom';
import { Link2, Zap, BarChart, Lock } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">


      <div className="relative overflow-hidden py-28 
        bg-linear-to-br from-blue-50 via-blue-100 to-blue-200">


        <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_70%)]">
        </div>


        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px]
          bg-blue-300/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]
          -translate-x-1/2 -translate-y-1/2">
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
            Shorten Your Links with
            <span className="text-blue-600 drop-shadow-md"> TinyLink</span>
          </h1>

          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Create short, memorable links in seconds. Track clicks and manage all your URLs effortlessly.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="px-8 py-3 text-lg rounded-xl font-semibold 
              bg-blue-600 text-white shadow-lg hover:shadow-xl 
              hover:bg-blue-700 transition-all duration-300"
            >
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="px-8 py-3 text-lg rounded-xl font-semibold 
              bg-white text-blue-600 shadow-md hover:shadow-xl 
              hover:bg-blue-50 transition-all duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose TinyLink?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-blue-200 transition-colors">
                <Link2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Create short links instantly with a clean and simple UI</p>
            </div>

            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-blue-200 transition-colors">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Instant link generation and fast redirects</p>
            </div>

            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-blue-200 transition-colors">
                <BarChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Analytics</h3>
              <p className="text-gray-600">Monitor clicks and performance of your short URLs</p>
            </div>

            <div className="text-center group hover:-translate-y-1 transition-all duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
              group-hover:bg-blue-200 transition-colors">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your links remain safe, encrypted and private</p>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>

          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users already shortening their links with TinyLink.
          </p>

          <Link
            to="/register"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium 
            hover:bg-blue-50 transition-colors duration-200 shadow-md"
          >
            Create Free Account
          </Link>
        </div>
      </div>
      <footer className="bg-gray-900 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-white text-xl font-semibold mb-4">Connect with Me</h3>

          <div className="flex justify-center gap-6">

            <a
              href="https://www.linkedin.com/in/adeshgaurav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.498 0h3.837v2.167h.054c.535-1.016 1.843-2.167 3.795-2.167C21.077 8 24 10.49 24 15.146V24h-4v-8.146c0-2.238-.04-5.108-3.113-5.108-3.113 0-3.586 2.432-3.586 4.94V24h-4V8z" />
              </svg>
            </a>

            <a
              href="https://github.com/Adesh344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.05 1.79 2.75 1.27 3.42.97.11-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.72 0-1.27.46-2.31 1.21-3.12-.12-.29-.53-1.46.11-3.04 0 0 1-.32 3.3 1.19a11.45 11.45 0 0 1 6 0c2.29-1.51 3.29-1.19 3.29-1.19.65 1.58.24 2.75.12 3.04.76.81 1.21 1.85 1.21 3.12 0 4.46-2.69 5.42-5.25 5.7.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/adeshgrv344/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zm9.75 2c.41 0 .75.34.75.75s-.34.75-.75.75a.75.75 0 1 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2A3 3 0 1 0 12 17a3 3 0 0 0 0-6z" />
              </svg>
            </a>

          </div>

          <p className="text-gray-500 text-sm mt-6">
            © {new Date().getFullYear()} TinyLink — All Rights Reserved
          </p>
        </div>
      </footer>


    </div>
  );
};

export default Home;
