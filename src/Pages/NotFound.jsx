import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">404</p>
        <h1>Pagina nao encontrada</h1>
        <p className="lead">A rota nao existe. Volte para a pagina inicial.</p>
        <Link className="btn" to="/">
          Ir para Home
        </Link>
      </header>
    </main>
  );
}
