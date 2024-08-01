import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <main className="bg-darkBackground min-h-screen  text-white font-inter px-4 lg:p-6">
      <Navbar />
      <SideBar />
      <AppRouter />
    </main>
  );
}

export default App;
