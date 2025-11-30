export default function WhyDevora() {
  return (
    <section id="why" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          Why I Created Devora
        </h2>
        
        <div className="space-y-8">
          <div className="bg-gray-900/30 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-white">The Problem</h3>
            <p className="text-gray-400 leading-relaxed">
              Setting up a new Linux installation with GNOME can be time-consuming. You need to install extensions, 
              configure tweaks, adjust settings, and spend hours getting everything just right. Many users give up 
              or settle for a suboptimal setup.
            </p>
          </div>

          <div className="bg-gray-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-white">The Solution</h3>
            <p className="text-gray-400 leading-relaxed">
              Devora eliminates all that setup time. I've done the research, testing, and configuration so you don't have to. 
              Install Devora and get a production-ready GNOME desktop with all the best tweaks and extensions already 
              configured and working perfectly.
            </p>
          </div>

          <div className="bg-gray-900/30 border-l-4 border-green-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold mb-3 text-white">Ready-Made Experience</h3>
            <p className="text-gray-400 leading-relaxed">
              No configuration needed. No extension hunting. No tweak installation. Just boot up Devora and start being productive. 
              It's Fedora at its core, but with all the polish and customization that makes GNOME truly shine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

