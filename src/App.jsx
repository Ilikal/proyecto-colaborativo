import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Inicio } from "./pages/Inicio";
import { Dashboard } from "./pages/Dashboard";
import { Error404 } from "./pages/Error404";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
