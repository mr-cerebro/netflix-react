import Banner2 from "./Banner-2/Banner-2";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import List from "./List/List";
import Parte1 from "./Parte-1/Parte-1";
import Parte2 from "./Parte-2/Parte-2";
import Parte3 from "./Parte-3/Parte-3";
import Parte4 from "./Parte-4/Parte-4";

const App = () => {
  return(
    <div>
      <Header />
      <Banner />
      <Parte1 />
      <Parte2 />
      <Parte3 />
      <Parte4 />
      <List />
      <Banner2 />
      <Footer />
    </div>
  )
}

export default App;
