import CollectionPage from "./pages/CollectionPage";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (

    <div className="min-h-screen w-full bg-zinc-950 text-white font-sans selection:bg-cyan-500/30">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

export default App;
