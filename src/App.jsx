import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Donate from "./components/Donate";
import Resources from "./components/Resources";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <About />
          <ContactForm />
        </div>
        <Donate />
        <Resources />
      </div>
      <Footer />
    </div>
  );
}
export default App;
