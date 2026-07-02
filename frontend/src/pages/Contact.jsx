import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    // Simulare trimitere (fără bază de date, conform cerinței bonus)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <p className="font-accent text-gold/70 tracking-[0.2em] text-sm uppercase mb-4 text-center">Ia legătura</p>
        <h1 className="font-heading text-4xl md:text-5xl text-gold text-center mb-6">Contact</h1>
        <p className="font-body text-[#E8E0D0]/60 text-center max-w-2xl mx-auto mb-16">
          Ai un proiect în minte sau vrei să colaborăm? Trimite-mi un mesaj.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-gold text-2xl mb-6">Informații de contact</h2>
              <div className="space-y-4">
                {[
                  ['📧', 'Email', 'patrik.debnar03@e-uvt.ro'],
                  ['📍', 'Locație', 'Timișoara, România'],
                  ['🎓', 'Universitate', 'Universitatea de Vest Timișoara'],
                  ['💼', 'Status', 'Student · Disponibil pentru proiecte'],
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-dark-surface border border-dark-border rounded-lg">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="font-body text-xs text-[#E8E0D0]/40 uppercase tracking-wider mb-1">{label}</p>
                      <p className="font-body text-[#E8E0D0]/80 text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading text-gold text-lg mb-4">Social Media</h3>
              <div className="flex gap-4">
                {[
                  { name: 'GitHub', href: 'https://github.com/DebnarPatrik' },
                  { name: 'LinkedIn', href: '#' },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-dark-border hover:border-gold/50 text-[#E8E0D0]/70 hover:text-gold font-body text-sm rounded-lg transition-all duration-200"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-dark-surface border border-dark-border rounded-lg p-8">
            <h2 className="font-heading text-gold text-2xl mb-6">Trimite un mesaj</h2>
            {status === 'success' ? (
              <div className="p-6 bg-green-900/20 border border-green-500/30 rounded-lg text-center">
                <p className="font-body text-green-400 text-lg mb-2">✓ Mesaj trimis cu succes!</p>
                <p className="font-body text-[#E8E0D0]/60 text-sm">Te voi contacta în curând.</p>
                <button onClick={() => setStatus(null)} className="mt-4 px-6 py-2 border border-gold/30 text-gold font-body text-sm rounded hover:bg-gold/10 transition-colors">
                  Trimite alt mesaj
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs text-[#E8E0D0]/50 uppercase tracking-wider mb-2 block">Nume</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg font-body text-sm text-[#E8E0D0] focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs text-[#E8E0D0]/50 uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg font-body text-sm text-[#E8E0D0] focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs text-[#E8E0D0]/50 uppercase tracking-wider mb-2 block">Subiect</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm({...form, subject: e.target.value})}
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg font-body text-sm text-[#E8E0D0] focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Subiectul mesajului"
                  />
                </div>
                <div>
                  <label className="font-body text-xs text-[#E8E0D0]/50 uppercase tracking-wider mb-2 block">Mesaj</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 bg-dark border border-dark-border rounded-lg font-body text-sm text-[#E8E0D0] focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Scrie mesajul tău aici..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-gold text-dark font-body font-bold tracking-wide hover:bg-gold-hover transition-colors duration-200 rounded-lg disabled:opacity-50"
                >
                  {status === 'loading' ? 'Se trimite...' : 'Trimite Mesajul'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
