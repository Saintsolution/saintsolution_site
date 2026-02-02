import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in-up">
          
        {/* LOGO CENTRALIZADO - Ajustado para não sobrepor as letras */}
<div className="flex flex-col items-center mb-8">
  <div className="flex items-center justify-center mb-6">
    <img 
      src="/logo_saintsolution.png" 
      alt="Saint Solution" 
      className="h-[180px] md:h-[220px] w-auto block object-contain"
      style={{ maxWidth: 'none' }} 
    />
  </div>
  
  {/* Texto amarelo com espaçamento correto, sem margem negativa */}
  <p className="text-amber-500 text-[11px] font-light tracking-[0.4em] uppercase leading-none">
    Bem-vindo à Saint Solution
  </p>
</div>

          <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight leading-tight text-white">
            De Efeitos Visuais
            <br />
            Para Soluções Digitais
          </h1>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto mb-12">
            20+ anos transformando visão em realidade através de VFX cinematográfico e software inovador.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-light transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50"
            >
              Entrar em Contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#vfx-portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-amber-500/50 hover:border-amber-500 text-amber-500 font-light transition-all duration-300 hover:bg-amber-500/5"
            >
              Ver Portfólio
            </a>
          </div>
        </div>

        <div className="mt-20 animate-fade-in-up relative" style={{ animationDelay: '200ms' }}>
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}