import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadastroReserva from './components/CadastroReserva';
import ListarVagas from './components/ListarVagas';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CadastroReserva />} />
                <Route path="/listar-vagas" element={<ListarVagas />} />
            </Routes>
        </Router>
    );
}

export default App;
