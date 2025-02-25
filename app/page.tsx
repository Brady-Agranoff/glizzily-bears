export default function Home() {
  const galleryImages = [
    "glizzy-bear-1.webp",
    "glizzy-bear-2.webp",
    "glizzy-bear-3.webp",
    "glizzy-bear-4.webp",
    "glizzy-bear-5.webp",
    "glizzy-bear-6.webp",
  ]; // Add your image sources here if you want a gallery later!

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-700 via-red-600 to-yellow-500 text-white overflow-hidden font-comic cursor-[url('/hotdog-cursor.png'),_auto]">
      {/* Hero Section */}
      <header className="relative py-16 text-center bg-black/40 animate-pop-in shadow-xl border-b-4 border-yellow-400">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight animate-wiggle text-yellow-300 drop-shadow-glow">
          GLIZZLY BEARS 🐻🌭
        </h1>
        <p className="text-lg md:text-2xl mt-3 font-semibold italic animate-jump-in text-yellow-200">
          The wildest mashup of grizzly and glizzy—pure chaos!
        </p>
        <div className="absolute inset-0 bg-[url('/comic-texture.png')] opacity-15 pointer-events-none" />
      </header>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-shake text-red-300">
          What’s a Glizzly Bear? 🤯
        </h2>
        <p className="text-base md:text-lg leading-relaxed bg-black/50 p-6 rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300">
          Meet the <span className="font-bold text-yellow-400">Glizzly Bear</span> 
          (Ursus glizzyus)—a beast with buns for fur and a mustard-powered roar! 🐻🌭
          This legendary creature dominates the food chain with unmatched flavor and ferocity.
        </p>
      </section>

      {/* Tree of Life Section */}
      <section className="py-12 bg-red-900/80 border-t-4 border-yellow-300 shadow-2xl">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-spin text-yellow-300">
            Born from Madness ⚡
          </h2>
          <p className="text-lg text-yellow-200 mb-4 font-bold">
            The legendary stats of the Glizzly Bear:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg font-semibold text-white">
            {["Kingdom: Animalia", "Phylum: Chordata", "Class: Mammalia", "Order: Carnivora", "Family: Ursidae", "Genus: Ursus", "Species: Ursus glizzyus"].map((item, index) => (
              <li
                key={index}
                className="bg-yellow-500/70 p-4 rounded-lg hover:bg-yellow-400 hover:rotate-6 transition-all duration-200 shadow-lg"
              >
                <strong>{item.split(": ")[0]}:</strong> {item.split(": ")[1]}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-lg text-yellow-200 italic animate-jump">
            A freak of nature... or the peak of evolution? 🌭🐻
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-zoom-in text-red-300">
          Glizzly Glory Shots 📸🔥
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.length > 0 ? (
            galleryImages.map((src, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-110 hover:rotate-3 transition-all duration-300 group border-4 border-yellow-400"
              >
                <img
                  src={src}
                  alt={`Glizzly Bear ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <p className="text-white text-xl font-bold">Bear #{index + 1}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-lg text-yellow-200 italic">No Glizzly pics yet—stay tuned! 🌭</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-red-800 animate-slide-up border-t-4 border-yellow-400 shadow-lg">
        <p className="text-lg md:text-xl font-bold text-yellow-300 animate-bounce">
          © {new Date().getFullYear()} Glizzly Bears. Stay Savage! 🐻🔥
        </p>
      </footer>
    </div>
  );
}