import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Olá, eu sou <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            João Vitor
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light mt-4">
          Desenvolvedor em formação de Recife, PE. Focado em criar soluções eficientes explorando tecnologias como JavaScript, Java e React.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4">
        <Link 
          href="/projetos" 
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 w-full sm:w-auto"
        >
          Ver meus Projetos
        </Link>
        <Link 
          href="/sobre" 
          className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto"
        >
          Mais sobre mim
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl pt-8 border-t border-gray-800">
        <div className="p-6 bg-gray-800/40 hover:bg-gray-800/80 rounded-xl border border-gray-700/50 transition-colors">
          <h3 className="text-blue-400 font-bold text-lg mb-2">Front-end</h3>
          <p className="text-gray-400 text-sm">Criação de interfaces modernas com React, Next.js e Tailwind CSS.</p>
        </div>
        
        <div className="p-6 bg-gray-800/40 hover:bg-gray-800/80 rounded-xl border border-gray-700/50 transition-colors">
          <h3 className="text-purple-400 font-bold text-lg mb-2">Linguagens</h3>
          <p className="text-gray-400 text-sm">Estudos focados em desenvolvimento com JavaScript e Java.</p>
        </div>
        
        <div className="p-6 bg-gray-800/40 hover:bg-gray-800/80 rounded-xl border border-gray-700/50 transition-colors">
          <h3 className="text-green-400 font-bold text-lg mb-2">Interesses</h3>
          <p className="text-gray-400 text-sm">Apaixonado por computadores, inovação tecnológica e novas linguagens.</p>
        </div>
      </div>

    </div>
  );
}