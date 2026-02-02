import { Zap, ExternalLink } from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: 'Consultoque Vendas',
      description: 'Plataforma para otimizar estratégias de vendas, afiliação e aumentar conversão.',
      link: 'https://consultoquesite.netlify.app',
      image: '/consultoque_logo.png',
      icon: Zap,
    },
    {
      title: 'Ledmaxi Painéis',
      description: 'Sistema inteligente para gerenciar venda de espaços publicitários em painéis de LED.',
      link: 'https://ledmaxi.com.br',
      image: '/ledmaxi_logo.png',
      icon: Zap,
    },
    {
      title: 'Framework Jogolindo',
      description: 'A primeira plataforma gamificada que une Ex-Craques do Futebol e IA para transformar jovens talentos.',
      link: 'https://www.jogolindo.com.br',
      image: '/jogolindo_logo.png',
      icon: Zap,
    },
  ];

  return (
    <section id="products" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 animate-fade-in-up">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Produtos & Serviços
          </p>
          <h2 className="text-5xl font-light mb-4 tracking-tight text-white">
            Soluções Digitais
          </h2>
          <div className="w-12 h-px bg-amber-500/50" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a
              key={product.title}
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg border border-slate-800 hover:border-amber-500/50 bg-slate-900/50 hover:bg-slate-900 transition-all duration-300 animate-fade-in-up block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail/Capa do Link */}
              <div className="aspect-video w-full overflow-hidden border-b border-slate-800">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-8 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <product.icon className="w-8 h-8 text-amber-500 group-hover:scale-110 transition-transform" />
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-500 transition-colors" />
                </div>
                
                <h3 className="text-xl font-light mb-3 text-white">{product.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              {/* Linha animada na base */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}