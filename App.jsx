import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import NotFound from "./components/NotFound";
import Contacto from "./components/Contacto";

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="*" element={<NotFound />} />
  <Route path="/contacto" element={<Contacto />} />
</Routes>;

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
};
export default App;
