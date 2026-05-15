export default function Academico() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl font-bold border-b border-gray-700 pb-2 text-white">
        Experiência Acadêmica
      </h1>
      
      <p className="text-gray-400 text-lg">
        Minha jornada de aprendizado contínuo na área de tecnologia.
      </p>

      <div className="space-y-6 mt-6">
        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500 shadow-md">
          <h2 className="text-2xl font-bold text-white">Ensino Superior / Sistemas para Internet</h2>
          <p className="text-blue-400 font-semibold mb-2">Universidade Católica de Pernambuco (Unicap)</p>
          <p className="text-gray-300">
            Estudante na área de tecnologia, com foco em desenvolvimento de sistemas, lógica de programação e infraestrutura de TI. 
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500 shadow-md">
          <h2 className="text-2xl font-bold text-white">Certificações e Cursos Livres</h2>
          <p className="text-purple-400 font-semibold mb-2">Plataformas diversas (freeCodeCamp, etc.)</p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2">
            <li><strong>Lógica de Programação e JavaScript:</strong> Foco em algoritmos, estruturas de dados e desenvolvimento web.</li>
            <li><strong>Python:</strong> Automação, scripts e fundamentos da linguagem.</li>
            <li><strong>Inteligência Artificial:</strong> Estudos independentes sobre infraestrutura de IA e ferramentas (como ChatGPT).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}