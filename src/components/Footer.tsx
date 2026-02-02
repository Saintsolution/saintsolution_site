import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          
          {/* Lado Superior: Marca */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-2 tracking-widest">
              SAINT SOLUTION
            </h2>
            <p className="text-amber-500 text-sm font-medium uppercase tracking-tighter">
              Digital Solutions
            </p>
          </div>

          {/* Centro: Redes Sociais (Agora no Meio) */}
          <div className="flex gap-8">
            <a 
              href="https://instagram.com/saintsolution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={28} />
            </a>
            <a 
              href="https://facebook.com/saintsolution" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/chicomauro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>

          {/* Lado Inferior: Legal e CNPJ */}
          <div className="space-y-1">
            <p className="text-sm">
              © {currentYear} Todos os direitos reservados - Chico Mauro.
            </p>
            <p className="text-xs text-slate-500">
              Saint Solution é um nome fantasia de CNPJ 64.165.379/0001-72
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;