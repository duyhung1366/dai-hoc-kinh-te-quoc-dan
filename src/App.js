import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header/Header";
import Combo from "./pages/ComboPage";
import Home from "./pages/HomePage";

function App() {
  return (
    <GlobalStyles>
      <div className="grid">
        <Header />
        <Routes>
          <Route path="/dai-hoc-kinh-te-quoc-dan" element={<Home />}></Route>
          <Route path="combo" element={<Combo />}></Route>
        </Routes>
        <Footer />
      </div>
    </GlobalStyles>
  );
}

export default App;
