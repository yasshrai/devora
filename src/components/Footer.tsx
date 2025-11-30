export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>© 2025 Devora. Built on Fedora Linux.</p>
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="https://github.com/yasshrai/devora" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

