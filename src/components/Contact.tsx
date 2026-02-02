import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Vamos Conversar
          </p>
          <h2 className="text-5xl font-light mb-4 tracking-tight">
            Entre em Contato
          </h2>
          <div className="w-12 h-px bg-amber-500/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-slate-300 font-light leading-relaxed">
              Pronto para transformar sua visão em realidade? Entre em contato conosco e vamos conversar sobre seu projeto.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:contato@saintsolution.com.br"
                className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-all">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-light">Email</p>
                  <p className="text-white font-light">contato@saintsolution.com.br</p>
                </div>
              </a>

              <a
                href="tel:+5521966879813"
                className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 hover:border-amber-500/50 hover:bg-slate-800/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-all">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-light">Telefone</p>
                  <p className="text-white font-light">+55 21 9 6687-9813</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-4 rounded-lg border border-slate-800 bg-slate-800/20">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 font-light">Localização</p>
                  <p className="text-white font-light">Rio de Janeiro, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Nome</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none transition-colors text-white font-light"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none transition-colors text-white font-light"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-slate-300 mb-2">Mensagem</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-amber-500 focus:outline-none transition-colors text-white font-light"
                  placeholder="Sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-light transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
