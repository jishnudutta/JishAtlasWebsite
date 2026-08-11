import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import DocsPage from "./pages/DocsPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        className="absolute left-[-9999px] top-0 z-[200] rounded-br-lg bg-ink px-5 py-3 text-[0.9rem] text-white focus:left-0 focus:text-white focus:no-underline"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
          <Route path="/docs/:slug" element={<DocsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
