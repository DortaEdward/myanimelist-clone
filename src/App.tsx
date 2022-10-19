import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Components
import Header from "./components/Header";

// Pages
import Home from "./pages/Home";
import Anime from "./pages/Anime";

function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <div className=" min-h-screen h-screen relative">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Anime />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
