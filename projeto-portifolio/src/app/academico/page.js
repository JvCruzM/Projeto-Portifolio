export default function Academico() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold border-b border-zinc-800 pb-2 text-white">
        Experiência Acadêmica
      </h1>

      <p className="text-zinc-400 text-lg">
        Todos meus conhecimentos adquiridos na área da tecnologia e estudos
        referentes a ferramentas específicas.
      </p>

      <div className="space-y-6 mt-6">
        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)] transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            Ensino Superior / Sistemas para Internet
          </h2>
          <p className="text-cyan-400 font-semibold mb-4 mt-1">
            Universidade Católica de Pernambuco (UNICAP)
          </p>

          <p className="text-zinc-300">
            Formação voltada para o ecossistema da web, englobando
            desenvolvimento front-end e back-end. Estudos aprofundados em design
            de software, estruturação de bancos de dados, segurança da
            informação e construção de soluções completas para a internet.
          </p>
        </div>

        <div className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.1)] transition-all duration-300 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <h2 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
            Certificações e Cursos Livres
          </h2>
          <p className="text-zinc-400 font-semibold mb-4 mt-1">
            Plataformas diversas (Rocketseat, etc.)
          </p>

          <ul className="space-y-4 mt-4">
            <li className="bg-black/40 border border-zinc-800 p-4 rounded-lg flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
              <div className="flex flex-col">
                <strong className="text-cyan-400 font-medium text-base">
                  Ciclo RiseUp (Fundamentos, Criando primeiro projeto com
                  tooling, Avançando nos fundamentos)
                </strong>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  Construção de uma base sólida no ecossistema web. O módulo
                  engloba lógica de programação, estruturas de dados e a
                  configuração profissional de ambiente (tooling) para iniciar
                  aplicações modernas do zero.
                </p>
              </div>
            </li>

            <li className="bg-black/40 border border-zinc-800 p-4 rounded-lg flex items-start gap-3">
              <span className="text-green-400 mt-1 flex-shrink-0">▹</span>
              <div className="flex flex-col">
                <strong className="text-cyan-400 font-medium text-base">
                  Ciclo GrownUp (Rotas e HTTP, Fundamentos do Node.js, Flask:
                  primeiro framework)
                </strong>
                <p className="text-zinc-300 text-sm mt-2 leading-relaxed">
                  Introdução robusta ao desenvolvimento back-end e arquitetura
                  de servidores. Explora o funcionamento do protocolo HTTP,
                  criação de APIs RESTful e a estruturação de aplicações
                  utilizando Node.js e Flask.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
