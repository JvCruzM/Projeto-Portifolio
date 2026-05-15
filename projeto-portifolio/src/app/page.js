import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-8">
      <div className="space-y-4 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
          Olá, eu sou <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-400">
            João Vitor
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light mt-4">
          Desenvolvedor em formação de Recife, PE. Focado em criar soluções
          eficientes explorando tecnologias como JavaScript, Java e React.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto px-4">
        <Link
          href="/projetos"
          className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300 w-full sm:w-auto"
        >
          Ver meus Projetos
        </Link>
        <Link
          href="/sobre"
          className="px-8 py-3 bg-[#0a0a0a] hover:bg-[#111111] border border-zinc-800 hover:border-green-400 text-white font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto"
        >
          Mais sobre mim
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl pt-8 border-t border-gray-800">
        <div className="p-6 bg-zinc-900/50 hover:bg-zinc-900/80 rounded-xl border border-zinc-800 hover:border-purple-500 transition-colors">
          <h3 className="text-purple-400 font-bold text-lg mb-2">Front-end</h3>
          <p className="text-gray-400 text-sm">
            Criação de interfaces modernas com React, Next.js e Tailwind CSS.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/50 hover:bg-zinc-900/80 rounded-xl border border-zinc-800 hover:border-green-400 transition-colors">
          <h3 className="text-green-400 font-bold text-lg mb-2">Linguagens</h3>
          <p className="text-gray-400 text-sm">
            Estudos focados em desenvolvimento com JavaScript, Python e Java.
          </p>
        </div>

        <div className="p-6 bg-zinc-900/50 hover:bg-zinc-900/80 rounded-xl border border-zinc-800 hover:border-purple-500 transition-colors">
          <h3 className="text-purple-400 font-bold text-lg mb-2">Interesses</h3>
          <p className="text-gray-400 text-sm">
            Apaixonado por Inteligência Artificial, inovação tecnológica e
            resolução de problemas.
          </p>
        </div>
      </div>
    </div>
  );
}
