import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { RequireAuth } from "./components/RequireAuth";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { NotFound } from "./routes/NotFound";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          // valida que el usuario esta autenticado
          <RequireAuth> 
            <Home />
          </RequireAuth>
        }/>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
