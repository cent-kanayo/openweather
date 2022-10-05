import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex container mx-auto">
        <div className="w-1/9">
          <Products />
        </div>
        <div>
          <Cart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
