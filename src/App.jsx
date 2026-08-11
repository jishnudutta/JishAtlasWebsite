import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import RevealObserver from "./components/RevealObserver";
import Home from "./pages/Home";
import GetStarted from "./pages/GetStarted";
import DocsPage from "./pages/DocsPage";

function AppRoutes() {
  const { pathname } = useLocation();
  // Fade on major page changes, but keep docs mounted across slug navigation
  // so the sidebar and FAQ accordions keep their state.
  const routeKey = pathname.split("/")[1] || "/";

  return (
    <>
      <ScrollToTop />
      <a
        className="absolute left-[-9999px] top-0 z-[200] rounded-br-lg bg-ink px-5 py-3 text-[0.9rem] text-white focus:left-0 focus:text-white focus:no-underline"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* Keyed by path so each navigation plays a subtle fade-in */}
        <div key={routeKey} className="animate-[fade-in_0.3s_ease]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
            <Route path="/docs/:slug" element={<DocsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
