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
    </div>
  );
};

export default Home;
