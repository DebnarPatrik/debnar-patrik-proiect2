const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337'
import { useState, useEffect } from 'react'

export default function About() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    fetch(`${STRAPI_URL}/api/about?populate=*`)
      .then(r => r.json())
      .then(data => setAbout(data.data))
      .catch(() => setAbout(null))
  }, [])

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-accent text-gold/70 tracking-[0.2em] text-sm uppercase mb-4">Despre mine</p>
            <h1 className="font-heading text-4xl md:text-5xl text-gold mb-6">
              {about?.attributes?.title || 'Debnar Patrik'}
            </h1>
            <div className="space-y-4 font-body text-[#E8E0D0]/80 leading-relaxed">
              <p>
                Sunt student la <strong className="text-gold">Informatică Economică</strong> la Universitatea de Vest din Timișoara. 
                Pasionat de tehnologii web, am lucrat cu diverse framework-uri și CMS-uri pentru a crea site-uri moderne și funcționale.
              </p>
              <p>
                Am experiență în dezvoltarea de site-uri cu <strong className="text-gold">Joomla + YooTheme Pro</strong>, 
                aplicații React cu Tailwind CSS, și sisteme headless CMS cu Strapi.
              </p>
              <p>
                Îmi place să combin estetica vizuală cu funcționalitatea tehnică pentru a livra produse digitale de calitate.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 flex items-center justify-center">
              <svg className="w-32 h-32 text-gold/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-4 bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl text-gold text-center mb-12">Abilități & Tehnologii</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Frontend', skills: ['React', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'] },
              { title: 'Backend & CMS', skills: ['Strapi', 'Joomla 5', 'YooTheme Pro', 'Node.js', 'PHP'] },
              { title: 'Tools', skills: ['Git & GitHub', 'VS Code', 'Netlify', 'Render', 'Figma'] },
            ].map(group => (
              <div key={group.title} className="p-8 bg-dark border border-dark-border rounded-lg">
                <h3 className="font-heading text-gold text-xl mb-6">{group.title}</h3>
                <ul className="space-y-3">
                  {group.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-3 font-body text-[#E8E0D0]/80">
                      <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0"/>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl text-gold text-center mb-12">Educație</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 bg-dark-surface border border-gold/20 rounded-lg relative pl-10">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold"/>
            <h3 className="font-heading text-gold text-lg">Informatică Economică</h3>
            <p className="font-body text-[#E8E0D0]/60 text-sm mt-1">Universitatea de Vest Timișoara · 2023 – prezent</p>
            <p className="font-body text-[#E8E0D0]/80 text-sm mt-3">Specializare în sisteme informatice, dezvoltare web și baze de date.</p>
          </div>
          <div className="p-6 bg-dark-surface border border-dark-border rounded-lg relative pl-10">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-gold/40"/>
            <h3 className="font-heading text-gold/80 text-lg">Liceu Teoretic</h3>
            <p className="font-body text-[#E8E0D0]/60 text-sm mt-1">2019 – 2023</p>
          </div>
        </div>
      </section>
    </div>
  )
}
