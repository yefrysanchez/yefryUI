import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <main className="bg-darkBackground min-h-screen text-white font-inter px-4">
      <Navbar />
      <AppRouter />
    </main>
  );
}

export default App;
