import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Portfólio | João Vitor Cruz de Menezes',
  description: 'Meu portfólio pessoal e currículo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col font-sans">
        <nav className="p-6 bg-gray-800 shadow-md">
          <ul className="flex gap-6 justify-center text-lg font-semibold">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/sobre" className="hover:text-blue-400 transition-colors">Sobre</Link></li>
            <li><Link href="/academico" className="hover:text-blue-400 transition-colors">Acadêmico</Link></li>
            <li><Link href="/profissional" className="hover:text-blue-400 transition-colors">Profissional</Link></li>
            <li><Link href="/projetos" className="hover:text-blue-400 transition-colors">Projetos</Link></li>
          </ul>
        </nav>
        <main className="flex-grow max-w-4xl w-full mx-auto p-8">
          {children}
        </main>
        <footer className="text-center p-4 bg-gray-800 mt-auto text-sm text-gray-400">
          © 2026 João Vitor Cruz de Menezes. Criado em Recife, PE.
        </footer>
      </body>
    </html>
  )
}