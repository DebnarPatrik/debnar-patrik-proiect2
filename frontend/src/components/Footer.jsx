import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark-surface border-t border-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-accent text-gold text-lg mb-4">DEBNAR PATRIK</h3>
            <p className="font-body text-[#E8E0D0]/70 text-sm leading-relaxed">
              Student la Informatică Economică, pasionat de web development și tehnologii moderne.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-gold text-base mb-4">Pagini</h4>
            <ul className="space-y-2">
              {[['/', 'Acasă'], ['/about', 'Despre mine'], ['/portfolio', 'Portofoliu'], ['/services', 'Servicii'], ['/contact', 'Contact']].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="font-body text-sm text-[#E8E0D0]/70 hover:text-gold transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-gold text-base mb-4">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-[#E8E0D0]/70">
              <li>📧 patrik.debnar03@e-uvt.ro</li>
              <li>📍 Timișoara, România</li>
              <li>🎓 Universitatea de Vest Timișoara</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-dark-border mt-8 pt-6 text-center">
          <p className="font-body text-sm text-[#E8E0D0]/50">
            © 2026 Debnar Patrik. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}
