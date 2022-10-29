import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.page.jsx";
import About from "./pages/about/about.page";
import Portfolio from "./pages/portfolio/portfolio.page";
import "./app.styles.scss";
// import ContactPage from "./pages/contact/contact.page";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <About />
      <Portfolio />
      {/*<ContactPage />*/}
      <Footer />
    </div>
  );
}

export default App;
