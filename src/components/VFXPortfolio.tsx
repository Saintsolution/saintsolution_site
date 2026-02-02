import { useState } from 'react';

interface Production {
  name: string;
  year: string;
  description: string;
  image: string;
  link?: string;
  wistiaId?: string;
  type: 'youtube' | 'wistia';
  format?: 'vertical' | 'square';
}

export default function VFXPortfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [activeWistia, setActiveWistia] = useState<string | null>(null);

  const productions: Production[] = [
    { name: 'O Clone', year: '2001-2002', description: 'VFX de classe mundial para a novela que parou o Brasil.', image: '/clone_logo.png', link: 'https://www.youtube.com/watch?v=IRURmF-_V4o', type: 'youtube' },
    { name: 'Porto dos Milagres', year: '2001', description: 'Trabalho premiado com efeitos de abertura e cenas épicas.', image: '/porto_logo.png', link: 'https://www.youtube.com/watch?v=g3zL2KUvgag', type: 'youtube' },
    { name: 'Beijo do Vampiro', year: '2002-2003', description: 'Criação de transformações e efeitos sobrenaturais.', image: '/beijo_logo.png', link: 'https://www.youtube.com/watch?v=TYJsVDhul9Y', type: 'youtube' },
    { name: 'Apocalipse', year: '2017-2018', description: 'Efeitos de destruição e larga escala para a Record TV.', image: '/apocalipse_logo.png', link: 'https://www.youtube.com/watch?v=L-XWSvdRQ8s', type: 'youtube' },
    { name: 'Dupla Identidade', year: '2014', description: 'Estética cinematográfica aplicada à série policial.', image: '/dupla_logo.png', link: 'https://www.youtube.com/watch?v=0XkNJW3VceE', type: 'youtube' },
    { name: 'Jesus', year: '2018-2019', description: 'Reconstituição histórica e efeitos de época.', image: '/logo_jesus.png', link: 'https://www.youtube.com/watch?v=ApTsyY5QFD0', type: 'youtube' }
  ];

  const aiVideos: Production[] = [
    { name: ' ', year: 'IA', description: '', image: '/vovo.png', wistiaId: '54eu0gg5vq', type: 'wistia', format: 'square' },
    { name: ' ', year: 'IA', description: '', image: '/familia.png', wistiaId: 'n5p5zso5i0', type: 'wistia', format: 'vertical' },
    { name: ' ', year: 'IA', description: '', image: '/moto.png', wistiaId: 'mxjr8nkqqe', type: 'wistia', format: 'square' }
  ];

  return (
    <section id="vfx-portfolio" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">

        {/* HEADER NOVELAS */}
        <div className="mb-16 animate-fade-in-up">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Prova Social
          </p>
          <h2 className="text-5xl font-light mb-4 tracking-tight text-white">
            Portfólio VFX & Broadcast
          </h2>
          <div className="w-12 h-px bg-amber-500/50" />
        </div>

        {/* GRID NOVELAS */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {productions.map((production, index) => (
            <a
              key={index}
              href={production.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-80 transition-all duration-300"
            >
              <img
                src={production.image}
                alt={production.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-xl font-light text-white">{production.name}</h3>
                <p className="text-xs text-amber-500 font-light mb-2">{production.year}</p>
                {hoveredId === index && (
                  <p className="text-sm text-slate-300 font-light leading-relaxed line-clamp-3 animate-fade-in-up">
                    {production.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* SEÇÃO IA */}
        <div className="mb-12 pt-16 border-t border-slate-800">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Inovação
          </p>
          <h3 className="text-4xl font-light mb-12 tracking-tight text-center text-white">
            Portfólio IA
          </h3>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {aiVideos.map((video) => (
              <div
                key={video.wistiaId}
                className={`relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900
                  ${video.format === 'vertical'
                    ? 'w-[280px] aspect-[9/16]'
                    : 'w-[350px] aspect-square'
                  }`}
              >
                <iframe
                  src={`https://fast.wistia.net/embed/iframe/${video.wistiaId}?videoFoam=true&autoplay=${activeWistia === video.wistiaId ? 'true' : 'false'}`}
                  allow="autoplay; fullscreen"
                  frameBorder="0"
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500
                    ${activeWistia === video.wistiaId ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                  `}
                />

                {activeWistia !== video.wistiaId && (
                  <div
                    onClick={() => setActiveWistia(video.wistiaId || null)}
                    className="absolute inset-0 cursor-pointer group"
                  >
                    <img
                      src={video.image}
                      alt={video.name}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center group-hover:bg-amber-500 transition-all duration-300">
                        <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-amber-500 group-hover:border-l-slate-950 ml-1" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO PRÊMIOS TV GLOBO */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Reconhecimento
          </p>
          <h3 className="text-4xl font-light mb-8 tracking-tight text-center md:text-left text-white">
            Prêmios TV GLOBO
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ id: 'LItuFh9ob-I' }].map((video) => (
              <div
                key={video.id}
                className="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-lg"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        {/* SEÇÃO YOUTUBE (FILMADOS & EDITADOS) */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <p className="text-amber-500 text-sm font-light tracking-widest uppercase mb-4">
            Produção
          </p>
          <h3 className="text-4xl font-light mb-8 tracking-tight text-center md:text-left text-white">
            Filmados & Editados
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[{ id: 'xO6bSdYLGM0' }, { id: 'XP4cc1VXKdk' }, { id: 'oM1dSRxs2wM' }].map((video) => (
              <div
                key={video.id}
                className="aspect-video rounded-lg overflow-hidden border border-slate-800 bg-slate-900 shadow-lg"
              >
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}