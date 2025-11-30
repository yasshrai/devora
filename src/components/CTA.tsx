export default function CTA() {
  // TODO: Update when download is ready - change href and button text
  const isComingSoon = true;
  const downloadUrl = "#"; // Update this with actual download URL when ready

  return (
    <section id="download" className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center bg-linear-to-b from-gray-950 to-gray-900 border border-gray-700 rounded-2xl p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          {isComingSoon 
            ? "Devora is coming soon! Stay tuned for updates."
            : "Download Devora and experience a perfectly configured Linux desktop environment"
          }
        </p>
        {isComingSoon ? (
          <div className="inline-block px-8 py-4 bg-gray-700 rounded-lg text-gray-300 font-semibold cursor-not-allowed">
            Coming Soon
          </div>
        ) : (
          <a
            href={downloadUrl}
            className="inline-block px-8 py-4 bg-linear-to-b from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
          >
            Download Devora
          </a>
        )}
      </div>
    </section>
  );
}

