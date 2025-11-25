import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ScrollToTop } from "./hooks/ScrollToTop";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Surveillance from "./pages/Surveillance";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/surveillance" element={<Surveillance />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
