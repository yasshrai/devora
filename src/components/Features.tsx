export default function Features() {
  return (
    <section id="features" className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Why Choose Devora?
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Everything you need, pre-configured and ready to use
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Pre-Configured GNOME</h3>
            <p className="text-gray-400 leading-relaxed">
              No need to spend hours configuring GNOME. Devora comes with a beautifully tuned desktop environment, 
              optimized settings, and sensible defaults that work perfectly out of the box.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Essential Tweaks</h3>
            <p className="text-gray-400 leading-relaxed">
              Carefully selected GNOME tweaks that enhance productivity and aesthetics. 
              Window management, workspace behavior, and UI improvements are all configured for the best experience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 hover:border-purple-500/50 transition-all hover:shadow-lg hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white">Curated Extensions</h3>
            <p className="text-gray-400 leading-relaxed">
              Popular and essential GNOME extensions are pre-installed and configured. 
              From dash-to-dock to workspace indicators, everything you need is already set up and working.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

