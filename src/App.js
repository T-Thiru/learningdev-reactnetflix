import "./App.css";
import Carrousel from "./components/Carrousel";
import Logo from "./components/Logo";
import netflix from "./netflix.json";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="wrapper">
        {netflix.map((e, index) => {
          return (
            <div key={index}>
              <h2>{e.category}</h2>
              <Carrousel images={e.images} />
            </div>
          );
        })}
      </main>
      <footer>
        <p>
          Made at le Reacteur by <span>Thiru</span> - 2022
        </p>
      </footer>
    </>
  );
}

export default App;
