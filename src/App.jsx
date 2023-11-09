import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ShortingLink from "./components/ShortingLink";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ShortingLink />
        <Statistics />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

export default App;
