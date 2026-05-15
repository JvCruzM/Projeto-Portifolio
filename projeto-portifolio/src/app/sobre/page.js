export default function Sobre() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold border-b border-zinc-800 pb-2">Sobre Mim</h1>
      <p className="text-lg text-gray-300">
        Sou apaixonado por tecnologia, novas linguagens e resolução de problemas. 
        Estudo linguagens como JavaScript e Java, e estou sempre em busca de aprender novas ferramentas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 text-purple-500">Tecnologias utilizadas neste Portfólio</h2>
      <ul className="list-disc list-inside bg-zinc-900 p-6 rounded-lg text-gray-300 shadow-lg">
        <li><strong>Next.js (App Router):</strong> Framework React para renderização e rotas.</li>
        <li><strong>React:</strong> Biblioteca principal para construção das interfaces.</li>
        <li><strong>Tailwind CSS:</strong> Framework utilitário para estilização e responsividade rápida.</li>
        <li><strong>Fetch API:</strong> Utilizada nativamente para consumir a API pública do GitHub.</li>
      </ul>
    </div>
  )
}