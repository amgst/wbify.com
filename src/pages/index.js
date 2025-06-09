import * as React from "react"

const IndexPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Wbify</h1>
        <p className="text-lg text-gray-700">Explore our recent Shopify projects</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Aren't these truly <span className="text-purple-400">remarkable?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest Shopify projects that have transformed businesses and delivered exceptional results.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "blue ruby",
                brand: "Blue Ruby Jewelry",
                description: "Luxury jewelry e-commerce with custom product configurator",
                tags: ["E-commerce", "Custom App"],
                date: "Dec 15, 2024",
                colors: "from-blue-500 to-indigo-600",
                overlay: "bg-blue-600",
              },
              {
                name: "SIDEKICK",
                brand: "SideKick Tools",
                description: "Professional tools marketplace with advanced search and filtering",
                tags: ["Marketplace", "B2B"],
                date: "Nov 28, 2024",
                colors: "from-orange-500 to-red-600",
                overlay: "bg-orange-600",
              },
              {
                name: "WOLF CIRCUS",
                brand: "Wolf Circus",
                description: "Modern jewelry brand with AR try-on functionality",
                tags: ["Fashion", "AR/VR"],
                date: "Oct 12, 2024",
                colors: "from-amber-600 to-yellow-700",
                overlay: "bg-amber-600",
              },
              {
                name: "PrintNinja",
                brand: "PrintNinja",
                description: "Custom printing service with real-time quote calculator",
                tags: ["Print Services", "Calculator"],
                date: "Sep 05, 2024",
                colors: "from-indigo-600 to-purple-700",
                overlay: "bg-indigo-600",
              },
            ].map((project, i) => (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl transition-all duration-500 cursor-pointer`}
              >
                <div className="p-6">
                  {/* Project Logo/Brand */}
                  <div className={`${project.overlay} rounded-xl p-4 mb-4 w-fit`}>
                    <span className="text-white font-bold text-lg">{project.name}</span>
                  </div>

                  {/* Simulated Preview Area */}
                  <div className="bg-gray-700 rounded-xl overflow-hidden mb-4 aspect-video">
                    <div className={`w-full h-full bg-gradient-to-br ${project.colors} flex items-center justify-center relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-sm opacity-50">Project Preview</div>
                      </div>
                      <div className={`absolute inset-0 ${project.overlay} bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center`}>
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">View Project →</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-white font-bold text-xl mb-2">{project.brand}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-white bg-opacity-10 text-white px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Date */}
                  <p className="text-gray-500 text-xs">{project.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover-scale shadow-lg">
              View All Projects
              <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default IndexPage
