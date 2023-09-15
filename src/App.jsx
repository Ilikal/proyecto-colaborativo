import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Se agrega root de colores y fuentes*/
import "./assets/rootVariables.css"

import { Inicio } from "./pages/Inicio";
import { Dashboard } from "./pages/Dashboard";
import { Error404 } from "./pages/Error404";
import { CrearFormulario } from "./pages/CrearFormulario";
import { DiligenciarFormulario } from "./pages/DiligenciarFormulario";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/crear-formulario" element={<CrearFormulario />} />
                <Route path="/diligenciar-formulario" element={<DiligenciarFormulario />} />
                <Route path="/editar-formulario" element={<CrearFormulario />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
