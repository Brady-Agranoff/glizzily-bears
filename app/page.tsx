// app/page.jsx

export default function Home() {
  const galleryImages = [
    "https://files.oaiusercontent.com/file-2rfzYtqr2EmhG9N8TAj9Rb?se=2025-02-25T02%3A10%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D46dcd22f-9015-4c98-a78c-ad8473e36933.webp&sig=wXa7PJDRXYpx8WWXXlobJ7mX97Axnu1c1YLDO9PE6wU%3D",
    "https://files.oaiusercontent.com/file-RT1eaYwkx3WqbHEzEixd4e?se=2025-02-25T02%3A14%3A35Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D2e4b16f6-86de-490a-b7ce-29f477af1290.webp&sig=2tKWq1cGGYSFrF7s6VF%2BWMOayG0/tyeuh/eUVdmYqJ8%3D",
    "https://files.oaiusercontent.com/file-CyEBr83yAL3JyX1eieyDLz?se=2025-02-25T02%3A11%3A56Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D94517ee2-191e-4f07-a66d-fcc6313abae4.webp&sig=uRvm1IAoOFhoH80SqE4jC3g2L8aQq548YecsOLvRUjk%3D",
    "https://files.oaiusercontent.com/file-9eA17S32tkfyJnbeGdArYB?se=2025-02-25T02%3A12%3A17Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbb2893ac-618d-448a-9b71-ea3a10561965.webp&sig=EAi2JgB0NQ33rHjVzk0CY2td2BhwOexGxQPJdxywmQ0%3D",
    "https://files.oaiusercontent.com/file-GyNfp8kAoeMUVPZeBURshJ?se=2025-02-25T02%3A13%3A20Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D36796d0d-156b-4a1e-bd2e-e7b0994092f6.webp&sig=zvsf9nVLqZ%2B0rZb970x4366ai2f9KsdxdHpMEat22SQ%3D",
    "https://files.oaiusercontent.com/file-DziKNMLm2b4h1kyuwPgv6q?se=2025-02-25T02%3A14%3A01Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Deeed2c09-d5bb-45be-8c78-0e15146651ac.webp&sig=ELzuxlV1haGAmEtDx5r5GuryYNtjbJZ2rrAwnW5P%2Bd8%3D"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-600 text-white overflow-hidden">
      {/* Hero Section */}
      <header className="relative py-16 text-center bg-black/30 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-bounce-in text-purple-300 drop-shadow-lg">
          GLIZZILY BEARS
        </h1>
        <p className="text-lg md:text-xl mt-3 font-semibold italic animate-slide-up text-blue-200">
          Unleash the wildest mashup of grizzly and glizzy!
        </p>
        <div className="absolute inset-0 bg-[url('/electric-texture.png')] opacity-10 pointer-events-none" />
      </header>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-pulse text-indigo-300">
          What’s a Glizzily Bear?
        </h2>
        <p className="text-base md:text-lg leading-relaxed bg-black/50 p-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
          Say hello to the <span className="font-bold text-purple-400">Glizzily Bear</span> 
          (Ursus glizzyus)—a beast so epic it fuses grizzly grit with hotdog flair! Rocking a 
          bun-like coat and a smoky edge, this legend prowls the wild like a king of chaos.
        </p>
      </section>

      {/* Tree of Life Section */}
      <section className="py-12 bg-indigo-900/80">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 animate-spin-once text-blue-300">
            Born from Madness
          </h2>
          <p className="text-base md:text-lg text-gray-200 mb-4">
            Where the Glizzily Bear reigns supreme:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base md:text-lg text-gray-100">
            {[
              "Kingdom: Animalia",
              "Phylum: Chordata",
              "Class: Mammalia",
              "Order: Carnivora",
              "Family: Ursidae",
              "Genus: Ursus",
              "Species: Ursus glizzyus"
            ].map((item, index) => (
              <li
                key={index}
                className="bg-purple-700/70 p-4 rounded-lg hover:bg-purple-600 hover:-translate-y-1 transition-all duration-200"
              >
                <strong>{item.split(": ")[0]}:</strong> {item.split(": ")[1]}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base md:text-lg text-gray-200 italic">
            Forged in a cosmic clash of claws and condiments—pure evolutionary insanity!
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-zoom-in text-indigo-200">
          Glizzily Glory Shots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 hover:rotate-2 transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Glizzily Bear ${index + 1}`}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <p className="text-white text-lg font-bold">Bear #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 bg-purple-900 animate-slide-up">
        <p className="text-base md:text-lg font-semibold text-blue-300">
          © {new Date().getFullYear()} Glizzily Bears. Roar On!
        </p>
      </footer>
    </div>
  );
}