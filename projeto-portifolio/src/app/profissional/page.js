export default function Profissional() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold border-b border-gray-700 pb-2 text-white">
        Experiência Profissional
      </h1>
      
      <p className="text-gray-400 text-lg">
        Atualmente em busca da primeira oportunidade formal como Desenvolvedor, mas construindo experiência prática através de projetos, estudos contínuos e resolução de problemas técnicos.
      </p>

      <div className="space-y-6 mt-6">
        
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h2 className="text-2xl font-bold text-white">Desenvolvedor Front-end (Projetos Pessoais)</h2>
            <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full w-max mt-2 md:mt-0">Atual</span>
          </div>
          <p className="text-gray-300 mb-4">
            Desenvolvimento de aplicações web, sites responsivos e integrações com APIs (como demonstrado neste portfólio). 
            Foco em transformar designs em código limpo utilizando o ecossistema JavaScript.
          </p>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Habilidades Aplicadas:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">React</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Next.js</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Tailwind CSS</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">JavaScript</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Consumo de APIs</span>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors">
           <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h2 className="text-2xl font-bold text-white">Suporte e Manutenção Técnica (Autônomo/Prático)</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Experiência prática com infraestrutura de TI em nível de hardware. Realização de manutenções preventivas e corretivas em computadores e eletrônicos, incluindo troca de componentes e aplicação de pasta térmica de alta performance.
          </p>
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Habilidades Aplicadas:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Hardware</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Troubleshooting</span>
            <span className="bg-gray-700 px-3 py-1 rounded text-sm text-gray-200">Montagem de PCs</span>
          </div>
        </div>

      </div>
    </div>
  );
}