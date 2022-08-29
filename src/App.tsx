import GlobalStyle from "./styles/styles";
import RoutesApp from "./routes";
import Navbar from "./components/templates/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <RoutesApp />
      <GlobalStyle />
    </div>
  );
}

export default App;
