async function getProjetos() {
  const res = await fetch('https://api.github.com/users/JvCruzM/repos?sort=updated');
  if (!res.ok) {
    throw new Error('Falha ao carregar os dados da API');
  }
  return res.json();
}

export default async function Projetos() {
  const repos = await getProjetos();

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold border-b border-zinc-800 pb-2 text-white">Projetos Desenvolvidos</h1>
      <p className="text-zinc-400">Todos meus projetos listados abaixo a partir de dados integrados diretamente da API pública do GitHub.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {repos.slice(0, 6).map((repo) => (
          <div key={repo.id} className="relative group bg-zinc-900/60 backdrop-blur-sm p-6 rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <h2 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
              {repo.name}
            </h2>
            
            <p className="text-zinc-300 mb-4 line-clamp-2">
              {repo.description || 'Nenhuma descrição fornecida.'}
            </p>
            
            <div className="flex justify-between items-center text-sm">
              <span className="bg-purple-900/20 border border-purple-500/30 px-3 py-1 rounded-full text-purple-400 font-mono">
                {repo.language || 'Múltiplas'}
              </span>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 hover:underline transition-colors font-semibold">
                Ver no GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}