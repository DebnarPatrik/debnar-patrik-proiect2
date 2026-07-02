import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'

export default function Home() {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/articles?populate=*&pagination[limit]=6`)
      .then(r => r.json())
      .then(data => setArticles(data.data || []))
      .catch(() => setArticles([]))

    fetch(`${STRAPI_URL}/api/categories?populate=*`)
      .then(r => r.json())
      .then(data => setCategories(data.data || []))
      .catch(() => setCategories([]))
  }, [])

  const defaultArticles = [
    { id: 1, attributes: { title: 'Proiect Web cu React', excerpt: 'Dezvoltarea unui site modern folosind React și Tailwind CSS.', slug: 'proiect-web-react' }},
    { id: 2, attributes: { title: 'Aplicație Joomla', excerpt: 'Site de prezentare construit cu Joomla 5 și YooTheme Pro.', slug: 'aplicatie-joomla' }},
    { id: 3, attributes: { title: 'Design UI/UX', excerpt: 'Principii de design pentru interfețe web moderne și accesibile.', slug: 'design-ui-ux' }},
  ]

  const defaultCategories = [
    { id: 1, attributes: { name: 'Web Development', slug: 'web-development' }},
    { id: 2, attributes: { name: 'Design', slug: 'design' }},
    { id: 3, attributes: { name: 'Proiecte', slug: 'proiecte' }},
  ]

  const displayArticles = articles.length > 0 ? articles : defaultArticles
  const displayCategories = categories.length > 0 ? categories : defaultCategories

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-surface to-dark opacity-90"/>
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(200,169,110,0.1) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(200,169,110,0.05) 0%, transparent 40%)'}}>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-accent text-gold/70 tracking-[0.3em] text-sm mb-6 uppercase">Portfolio Personal</p>
          <h1 className="font-heading text-5xl md:text-7xl text-gold mb-6 leading-tight">
            Debnar Patrik
          </h1>
          <p className="font-body text-xl md:text-2xl text-[#E8E0D0]/80 mb-4">
            Student · Web Developer · Designer
          </p>
          <p className="font-body text-base text-[#E8E0D0]/60 mb-10 max-w-2xl mx-auto">
            Pasionat de tehnologii web moderne, creez experiențe digitale elegante și funcționale.
            Student la Informatică Economică, Universitatea de Vest Timișoara.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/portfolio" className="px-8 py-3 bg-gold text-dark font-body font-bold tracking-wide hover:bg-gold-hover transition-colors duration-200 rounded">
              Vezi Portofoliu
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-gold text-gold font-body tracking-wide hover:bg-gold/10 transition-colors duration-200 rounded">
              Contactează-mă
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl text-gold text-center mb-4">Categorii</h2>
        <p className="font-body text-[#E8E0D0]/60 text-center mb-12">Explorează proiectele mele pe categorii</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {displayCategories.map(cat => (
            <Link
              key={cat.id}
              to={`/portfolio?category=${cat.attributes.slug}`}
              className="group p-8 bg-dark-surface border border-dark-border hover:border-gold/50 rounded-lg transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h3 className="font-heading text-gold text-lg mb-2">{cat.attributes.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Articles / Cards */}
      <section className="py-20 px-4 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-gold text-center mb-4">Articole Recente</h2>
          <p className="font-body text-[#E8E0D0]/60 text-center mb-12">Ultimele proiecte și scrieri</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map(article => (
              <div key={article.id} className="bg-dark border border-dark-border rounded-lg overflow-hidden hover:border-gold/30 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-gold text-lg mb-3 group-hover:text-gold-light transition-colors">
                    {article.attributes.title}
                  </h3>
                  <p className="font-body text-sm text-[#E8E0D0]/60 leading-relaxed mb-4">
                    {article.attributes.excerpt || 'Citește mai mult despre acest proiect.'}
                  </p>
                  <Link
                    to={`/portfolio`}
                    className="font-body text-sm text-gold hover:text-gold-hover transition-colors inline-flex items-center gap-2"
                  >
                    Citește mai mult
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[['3+', 'Proiecte Web'], ['2', 'Framework-uri'], ['1', 'An Experiență'], ['100%', 'Dedicare']].map(([num, label]) => (
            <div key={label} className="p-6 bg-dark-surface border border-dark-border rounded-lg">
              <div className="font-heading text-4xl text-gold mb-2">{num}</div>
              <div className="font-body text-sm text-[#E8E0D0]/60">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
