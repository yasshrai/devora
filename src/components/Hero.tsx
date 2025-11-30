export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          Devora
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-4">
          Fedora-based Linux Distribution
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
          A beautifully pre-configured Linux experience. No setup, no tweaking, no hassle. 
          Just install and enjoy a perfectly tuned GNOME desktop environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="px-8 py-4 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            Get Started
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-gray-700 rounded-lg text-gray-300 font-semibold hover:border-gray-600 hover:text-white transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

