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
      <h1 className="text-4xl font-bold border-b border-gray-700 pb-2">Projetos Desenvolvidos</h1>
      <p className="text-gray-400">Dados integrados diretamente da API pública do GitHub.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {repos.slice(0, 6).map((repo) => (
          <div key={repo.id} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:border-blue-500 border border-transparent transition-all">
            <h2 className="text-xl font-bold text-blue-400 mb-2">{repo.name}</h2>
            <p className="text-gray-300 mb-4 line-clamp-2">
              {repo.description || 'Nenhuma descrição fornecida.'}
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="bg-gray-700 px-3 py-1 rounded-full text-gray-300">
                {repo.language || 'Múltiplas'}
              </span>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                Ver no GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}