import { hero, marca } from "./data/site.js";

export default function App() {
  return (
    <main className="container">
      <h1>{marca.nome}</h1>
      <p>{hero.eyebrow}</p>
    </main>
  );
}
