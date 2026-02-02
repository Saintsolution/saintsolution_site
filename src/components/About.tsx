import { Lightbulb, Trophy, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            A Jornada
          </p>
          <h2 className="text-5xl font-light mb-4 tracking-tight">
            Quem Somos
          </h2>
          <div className="w-12 h-px bg-amber-500/50" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-light mb-4">Chico Mauro</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Fundador e CEO da Saint Solution. Artista visual com mais de 20 anos de experiência em VFX e Broadcast na TV Globo (Projac) e Record.
              </p>
            </div>

            <p className="text-slate-300 font-light leading-relaxed">
              Começou sua carreira criando efeitos visuais de classe mundial para as maiores produções televisivas brasileiras. Projetos como O Clone, Apocalipse e dezenas de outras séries marcaram época.
            </p>

            <p className="text-slate-300 font-light leading-relaxed">
              A evolução natural foi migrar essa expertise para o desenvolvimento de software. Hoje, combina sensibilidade estética com precisão técnica para criar soluções que não apenas funcionam, mas inspiram.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-light text-white mb-1">Criatividade</h4>
                  <p className="text-sm text-slate-400 font-light">Raiz em duas décadas de produção audiovisual</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-light text-white mb-1">Desenvolvimento</h4>
                  <p className="text-sm text-slate-400 font-light">Automação e soluções digitais de ponta</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-light text-white mb-1">Excelência</h4>
                  <p className="text-sm text-slate-400 font-light">Compromisso com qualidade cinematográfica</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="aspect-square rounded-lg overflow-hidden border border-slate-800 bg-slate-800">
              <img
                src="/cyber_eu copy.png"
                alt="Chico Mauro"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-lg border border-amber-500/20 bg-amber-500/5" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-lg border border-amber-500/20 bg-amber-500/5" />
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-800 grid md:grid-cols-3 gap-8">
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="text-4xl font-light text-amber-500 mb-2">30+</p>
            <p className="text-slate-400 font-light">Anos de Experiência</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <p className="text-4xl font-light text-amber-500 mb-2">100+</p>
            <p className="text-slate-400 font-light">Produções Audiovisuais</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <p className="text-4xl font-light text-amber-500 mb-2">50+</p>
            <p className="text-slate-400 font-light">Clientes Satisfeitos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
