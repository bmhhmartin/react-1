import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="React Application"></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
};

export default App;