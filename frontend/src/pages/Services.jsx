export default function Services() {
  const services = [
    {
      icon: '🌐',
      title: 'Dezvoltare Web',
      description: 'Crearea de site-uri web moderne și responsive folosind React, HTML5, CSS3 și JavaScript.',
      features: ['Design responsive', 'Optimizare SEO', 'Performanță ridicată', 'Cross-browser'],
    },
    {
      icon: '⚙️',
      title: 'CMS & Backend',
      description: 'Configurarea și personalizarea sistemelor CMS precum Joomla sau Strapi pentru gestionarea conținutului.',
      features: ['Joomla 5', 'Strapi Headless', 'Administrare conținut', 'API REST'],
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Proiectarea interfețelor vizuale atractive și ușor de utilizat, cu focus pe experiența utilizatorului.',
      features: ['Prototipare Figma', 'Design system', 'Accesibilitate', 'Mobile-first'],
    },
    {
      icon: '☁️',
      title: 'Deploy & Hosting',
      description: 'Publicarea și găzduirea aplicațiilor web pe platforme moderne precum Netlify, Render sau GitHub Pages.',
      features: ['Netlify', 'Render', 'GitHub Pages', 'CI/CD'],
    },
  ]

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="font-accent text-gold/70 tracking-[0.2em] text-sm uppercase mb-4 text-center">Ce ofer</p>
        <h1 className="font-heading text-4xl md:text-5xl text-gold text-center mb-6">Servicii</h1>
        <p className="font-body text-[#E8E0D0]/60 text-center max-w-2xl mx-auto mb-16">
          Competențele și serviciile pe care le pot oferi în domeniul dezvoltării web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="p-8 bg-dark-surface border border-dark-border rounded-lg hover:border-gold/30 transition-all duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-heading text-gold text-xl mb-3">{service.title}</h3>
              <p className="font-body text-[#E8E0D0]/70 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center gap-3 font-body text-sm text-[#E8E0D0]/60">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-dark-surface border border-dark-border rounded-lg p-10">
          <h2 className="font-heading text-gold text-2xl text-center mb-10">Procesul de lucru</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[['01', 'Analiză', 'Înțelegerea cerințelor și definirea scopului proiectului.'],
              ['02', 'Design', 'Crearea prototipului și a identității vizuale.'],
              ['03', 'Dezvoltare', 'Implementarea tehnică a soluției alese.'],
              ['04', 'Livrare', 'Testare, optimizare și publicare online.']].map(([num, title, desc]) => (
              <div key={num} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full border-2 border-gold flex items-center justify-center">
                  <span className="font-accent text-gold text-sm font-bold">{num}</span>
                </div>
                <h4 className="font-heading text-gold text-base mb-2">{title}</h4>
                <p className="font-body text-xs text-[#E8E0D0]/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
