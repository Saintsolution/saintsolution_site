import { Film, Code, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Film,
      title: 'Produção Audiovisual',
      description: 'Efeitos visuais, composição e broadcast engineering de classe mundial',
    },
    {
      icon: Code,
      title: 'Desenvolvimento de Software',
      description: 'Soluções digitais inovadoras com tecnologia de ponta e design intuitivo',
    },
    {
      icon: Rocket,
      title: 'Consultoria IA',
      description: 'Implementação de inteligência artificial para otimizar seus processos',
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            O Que Fazemos
          </p>
          <h2 className="text-5xl font-light mb-4 tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-12 h-px bg-amber-500/50" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-lg border border-slate-800 hover:border-amber-500/50 bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-light mb-3">{service.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{service.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
