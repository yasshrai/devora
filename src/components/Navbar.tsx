export default function Navbar() {
  // TODO: Update when download is ready - change isComingSoon to false
  const isComingSoon = true;

  return (
    <nav className="container mx-auto px-6 py-6">
      <div className="flex items-center justify-between">
        <div className="text-3xl font-bold text-white">
          <span className="bg-linear-to-b from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Devora
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#why" className="text-gray-300 hover:text-white transition-colors">
            Why Devora
          </a>
          {isComingSoon ? (
            <a href="#download" className="px-4 py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-all">
              Coming Soon
            </a>
          ) : (
            <a href="#download" className="px-4 py-2 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg text-white hover:from-blue-600 hover:to-purple-700 transition-all">
              Download
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

