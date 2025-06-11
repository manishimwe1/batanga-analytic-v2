const stats = [
    { value: "250+", label: "Enterprise Clients", description: "Trusted by industry leaders globally" },
    { value: "1,500+", label: "Projects Delivered", description: "Successful implementations worldwide" },
    { value: "50+", label: "Expert Team", description: "Certified professionals and specialists" },
    { value: "99.9%", label: "Service Uptime", description: "Reliable, always-on performance" },
  ]
  
  export function StatsSection() {
    return (
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
  
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Industry Leaders
              <span className="block text-2xl md:text-3xl font-normal text-slate-300 mt-2">Across Africa and Beyond</span>
            </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-slate-400 leading-relaxed">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  