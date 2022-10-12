import AppProvider from "./context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Layout from "./components/Layout";
import SingleItem from "./pages/SingleItem";

const App = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="/products/:name" element={<SingleItem />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default App;
