export default function Profissional() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold border-b border-zinc-800 pb-2 text-white">
        Experiência Profissional
      </h1>
      
      <p className="text-zinc-400 text-lg">
        Atualmente em busca da primeira oportunidade formal como Desenvolvedor, mas construindo experiência prática através de projetos, estudos contínuos e resolução de problemas técnicos.
      </p>

      <div className="space-y-6 mt-6">
        
        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Desenvolvedor Front-end (Projetos Pessoais)</h2>
            <span className="text-sm bg-green-900/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full w-max mt-2 md:mt-0 font-semibold">Atual</span>
          </div>
          
          <p className="text-zinc-300 mb-4">
            Desenvolvimento de aplicações web, sites responsivos e integrações com APIs. Foco em transformar designs em código limpo utilizando o ecossistema JavaScript.
          </p>
          
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Habilidades Aplicadas:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-black/50 border border-cyan-900/50 px-3 py-1 rounded text-sm text-cyan-400">React</span>
            <span className="bg-black/50 border border-cyan-900/50 px-3 py-1 rounded text-sm text-cyan-400">Next.js</span>
            <span className="bg-black/50 border border-cyan-900/50 px-3 py-1 rounded text-sm text-cyan-400">Tailwind CSS</span>
            <span className="bg-black/50 border border-cyan-900/50 px-3 py-1 rounded text-sm text-cyan-400">APIs</span>
          </div>
        </div>

        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">Suporte e Manutenção Técnica</h2>
          </div>
          
          <p className="text-zinc-300 mb-4">
            Experiência prática com infraestrutura de TI em nível de hardware. Realização de manutenções preventivas e corretivas em computadores e eletrônicos de alta performance.
          </p>
          
          <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Habilidades Aplicadas:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-black/50 border border-purple-900/50 px-3 py-1 rounded text-sm text-purple-400">Hardware</span>
            <span className="bg-black/50 border border-purple-900/50 px-3 py-1 rounded text-sm text-purple-400">Troubleshooting</span>
            <span className="bg-black/50 border border-purple-900/50 px-3 py-1 rounded text-sm text-purple-400">Montagem</span>
          </div>
        </div>

      </div>
    </div>
  );
}