import { ArrowRight, FileText, CheckCircle2 } from 'lucide-react';

export default function PortfolioLink() {
  const recursos = [
    "Design", "Roteiros", "Criação de Conceitos", 
    "Vídeos", "Animações", "Edição", 
    "Nichos Educacionais", "Institucionais", "Marketing"
  ];

  return (
    <section id="portfolio-link" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="animate-fade-in-up">
            <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
              Documentação Completa
            </p>
            <h2 className="text-5xl font-light mb-6 tracking-tight">
              Portfólio Detalhado
            </h2>
            <div className="w-12 h-px bg-amber-500/50 mb-8" />

            <p className="text-slate-300 font-light leading-relaxed mb-6">
              Acesse nosso Portfólio com detalhes de todos os projetos, histórico, serviços realizados e formação.
            </p>

            <p className="text-slate-400 font-light leading-relaxed mb-8">
              Explore metodologias, processos de desenvolvimento, e exemplos práticos de como transformamos visão em realidade através de efeitos visuais de classe mundial e software inovador.
            </p>

            <a
              href="https://docs.google.com/document/d/1pjJj0B3_aH9HuhUEJHQ-KWY3MwSIq9LeKEHzisfo8Fs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:border-amber-500 hover:bg-amber-500/20 transition-all duration-300"
            >
              <FileText className="w-5 h-5 text-amber-500" />
              <span className="text-amber-500 font-light">Abrir Portfólio Completo</span>
              <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-slate-800 hover:border-amber-500/50 bg-slate-800/30 transition-all duration-300 hover:bg-slate-800/50">
                <h3 className="text-lg font-light mb-2 text-amber-500">Estudos de Caso</h3>
                <p className="text-sm text-slate-400 font-light">Análise detalhada de cada produção com preparação de um workflow apropriado.</p>
              </div>

              <div className="p-6 rounded-lg border border-slate-800 hover:border-amber-500/50 bg-slate-800/30 transition-all duration-300 hover:bg-slate-800/50">
                <h3 className="text-lg font-light mb-2 text-amber-500">Tecnologias Utilizadas</h3>
                <p className="text-sm text-slate-400 font-light">Stack de ferramentas e técnicas para cada projeto.</p>
              </div>

              <div className="p-6 rounded-lg border border-slate-800 hover:border-amber-500/50 bg-slate-800/30 transition-all duration-300 hover:bg-slate-800/50">
                <h3 className="text-lg font-light mb-2 text-amber-500">Resultados & Reconhecimento</h3>
                <p className="text-sm text-slate-400 font-light">Prêmios, audiência e impacto cultural das produções.</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Nova Seção de Recursos (Rodapé do Componente) --- */}
        <div className="pt-16 border-t border-slate-800">
          <div className="max-w-4xl">
            <h3 className="text-amber-500 text-lg font-light mb-6">Variedade de Recursos e Soluções</h3>
            <p className="text-slate-300 font-light mb-8 leading-relaxed">
              Oferecemos suporte completo desde a criação de uma solução digital personalizada até o produto final, garantindo o resultado esperado através de ferramentas apropriadas para cada desafio.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {recursos.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-amber-500/60" />
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}