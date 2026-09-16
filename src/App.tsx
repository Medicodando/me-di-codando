import { useMemo, useState } from 'react'
import './App.css'

interface Project {
  title: string
  description: string
  tag: string
}

const projects: Project[] = [
  {
    title: 'Triagem Inteligente',
    description:
      'Protótipo de triagem clínica que prioriza atendimentos por gravidade.',
    tag: 'saúde',
  },
  {
    title: 'Prontuário Aberto',
    description:
      'Experimento de prontuário eletrônico simples, rápido e sem burocracia.',
    tag: 'dados',
  },
  {
    title: 'Bulário CLI',
    description:
      'Ferramenta de linha de comando para consultar interações medicamentosas.',
    tag: 'ferramentas',
  },
]

function App() {
  const [count, setCount] = useState(0)

  const heartbeat = useMemo(() => {
    // Frequência cardíaca simulada: aumenta conforme o "esforço" (cliques).
    const base = 60
    return base + count * 3
  }, [count])

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">me-di-codando</p>
        <h1>
          Um médico que resolveu <span className="accent">codar</span>.
        </h1>
        <p className="subtitle">
          Projetos, experimentos e ferramentas na interseção entre medicina e
          software.
        </p>

        <section className="pulse" aria-live="polite">
          <button className="pulse-button" onClick={() => setCount((c) => c + 1)}>
            Bater o coração
          </button>
          <span className="pulse-reading">
            <strong>{heartbeat}</strong> bpm
            <small>{count} batimentos registrados</small>
          </span>
        </section>
      </header>

      <section className="projects">
        <h2>Projetos</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.title} className="card">
              <span className="tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>Feito com Vite + React + TypeScript.</p>
      </footer>
    </main>
  )
}

export default App
