import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import SideBar from "./components/SideBar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <main className="bg-darkBackground min-h-screen  text-white font-inter px-4 lg:p-6">
      <ScrollToTop />
      <Navbar />
      <SideBar />
      <AppRouter />
      <Footer />
    </main>
  );
}

export default App;
