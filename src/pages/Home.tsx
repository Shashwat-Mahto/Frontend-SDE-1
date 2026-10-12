import { useNavigate } from 'react-router'
import { routes } from '../constants/index.ts'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1 className="home-title">Machine Coding</h1>
      <p className="home-subtitle">Pick a component to practice.</p>
      <div className="home-grid">
        {routes.map(({ title, route }) => (
          <button key={route} className="home-card" onClick={() => navigate(route)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Home
