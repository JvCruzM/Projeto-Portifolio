export default function Sobre() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold border-b border-zinc-800 pb-2 text-white">Sobre Mim</h1>
      
      <p className="text-lg text-zinc-300 leading-relaxed bg-zinc-900/30 p-6 rounded-xl border border-zinc-800/50">
        Sou apaixonado por tecnologia, inteligência artificial e resolução de problemas. 
        Estudo linguagens como JavaScript e Java, com foco em front-end e manutenção técnica. 
        Estou sempre em busca de otimizar processos, aprender novas ferramentas e construir 
        interfaces de alto impacto visual.
      </p>
      
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-cyan-400">Tecnologias utilizadas neste App</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        <div className="group bg-zinc-900/60 backdrop-blur-sm p-5 rounded-lg border border-zinc-700/50 hover:border-purple-500/50 transition-colors flex flex-col justify-center">
          <h3 className="text-purple-400 font-bold text-lg mb-1">Next.js (App Router)</h3>
          <p className="text-zinc-400 text-sm">Framework base para renderização, estrutura de pastas e rotas.</p>
        </div>

        <div className="group bg-zinc-900/60 backdrop-blur-sm p-5 rounded-lg border border-zinc-700/50 hover:border-green-500/50 transition-colors flex flex-col justify-center">
          <h3 className="text-green-400 font-bold text-lg mb-1">React</h3>
          <p className="text-zinc-400 text-sm">Biblioteca de JavaScript para criação dos componentes de interface.</p>
        </div>

        <div className="group bg-zinc-900/60 backdrop-blur-sm p-5 rounded-lg border border-zinc-700/50 hover:border-green-500/50 transition-colors flex flex-col justify-center">
          <h3 className="text-green-400 font-bold text-lg mb-1">Tailwind CSS</h3>
          <p className="text-zinc-400 text-sm">Framework utilitário para estilização rápida, responsividade e animações.</p>
        </div>

        <div className="group bg-zinc-900/60 backdrop-blur-sm p-5 rounded-lg border border-zinc-700/50 hover:border-purple-500/50 transition-colors flex flex-col justify-center">
          <h3 className="text-purple-400 font-bold text-lg mb-1">Fetch API</h3>
          <p className="text-zinc-400 text-sm">Utilizada nativamente em Server Components para consumir a API do GitHub.</p>
        </div>

      </div>
    </div>
  );
}