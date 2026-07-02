import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Lumina Studio — Site Joomla',
    category: 'CMS',
    description: 'Site de prezentare pentru agenție foto, construit cu Joomla 5 + YooTheme Pro. Include galerie, portofoliu, și pagini personalizate.',
    tech: ['Joomla 5', 'YooTheme Pro', 'CSS', 'Akeeba Backup'],
    year: '2026',
  },
  {
    id: 2,
    title: 'Lumina Studio — Site Static',
    category: 'Frontend',
    description: 'Versiunea statică a site-ului Lumina Studio, construită cu HTML, CSS și JavaScript vanilla. Găzduit pe GitHub Pages.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub'],
    year: '2026',
  },
  {
    id: 3,
    title: 'Portfolio Personal — React',
    category: 'Frontend',
    description: 'Site de portfolio personal construit cu React 18, Tailwind CSS și Strapi ca backend headless. Deploy pe Netlify.',
    tech: ['React', 'Tailwind CSS', 'Strapi', 'Netlify'],
    year: '2026',
  },
  {
    id: 4,
    title: 'Aplicație Baze de Date',
    category: 'Backend',
    description: 'Proiect academic de gestionare a bazelor de date relaționale, cu interfață web și operații CRUD.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    year: '2025',
  },
  {
    id: 5,
    title: 'Design UI — Figma',
    category: 'Design',
    description: 'Prototip de interfață pentru aplicație mobilă, creat în Figma cu focus pe UX și accesibilitate.',
    tech: ['Figma', 'UI/UX', 'Prototipare'],
    year: '2025',
  },
  {
    id: 6,
    title: 'Algoritmi și Structuri de Date',
    category: 'Backend',
    description: 'Implementare de algoritmi clasici și structuri de date în Python, pentru cursul de Informatică.',
    tech: ['Python', 'Algoritmi', 'OOP'],
    year: '2024',
  },
]

const categories = ['Toate', 'Frontend', 'Backend', 'CMS', 'Design']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Toate')

  const filtered = activeCategory === 'Toate' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="font-accent text-gold/70 tracking-[0.2em] text-sm uppercase mb-4 text-center">Lucrările mele</p>
        <h1 className="font-heading text-4xl md:text-5xl text-gold text-center mb-6">Portofoliu</h1>
        <p className="font-body text-[#E8E0D0]/60 text-center max-w-2xl mx-auto mb-12">
          Proiectele realizate în cadrul facultății și în timpul liber, acoperind diverse tehnologii și domenii.
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 font-body text-sm rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gold text-dark border-gold font-bold'
                  : 'bg-transparent text-[#E8E0D0]/70 border-dark-border hover:border-gold/50 hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <div key={project.id} className="bg-dark-surface border border-dark-border rounded-lg p-6 hover:border-gold/30 transition-all duration-300 group">
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-body rounded-full">{project.category}</span>
                <span className="font-body text-xs text-[#E8E0D0]/40">{project.year}</span>
              </div>
              <h3 className="font-heading text-gold text-lg mb-3 group-hover:text-gold-light transition-colors">{project.title}</h3>
              <p className="font-body text-sm text-[#E8E0D0]/60 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-2 py-1 bg-dark border border-dark-border text-[#E8E0D0]/50 text-xs font-body rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
