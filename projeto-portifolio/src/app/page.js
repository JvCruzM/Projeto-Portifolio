import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Olá, eu sou <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400">
            João Vitor
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-light mt-4">
          Desenvolvedor em formação de Recife, PE. Focado em criar soluções
          eficientes explorando tecnologias como JavaScript, Java e React.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4">
        <Link
          href="/projetos"
          className="px-8 py-3 bg-purple-600/90 hover:bg-purple-500 text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] border border-purple-500/50 transition-all duration-300 w-full sm:w-auto"
        >
          Ver meus Projetos
        </Link>
        <Link
          href="/sobre"
          className="px-8 py-3 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900/80 border border-zinc-700 hover:border-cyan-400 text-white font-semibold rounded-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-300 w-full sm:w-auto"
        >
          Mais sobre mim
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl pt-8 border-t border-zinc-800/50">
        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-purple-400 font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
            Front-end
          </h3>
          <p className="text-zinc-400 text-sm">
            Criação de interfaces modernas com React, Next.js e Tailwind CSS.
          </p>
        </div>

        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-cyan-400 font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors">
            Linguagens
          </h3>
          <p className="text-zinc-400 text-sm">
            Estudos focados em desenvolvimento com JavaScript e Java.
          </p>
        </div>

        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] transition-all duration-300 overflow-hidden text-left">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <h3 className="text-green-400 font-bold text-lg mb-2 group-hover:text-green-300 transition-colors">
            Interesses
          </h3>
          <p className="text-zinc-400 text-sm">
            Apaixonado por Inteligência Artificial, inovação tecnológica e
            resolução de problemas.
          </p>
        </div>
      </div>
    </div>
  );
}
