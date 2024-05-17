import { useNavigate } from 'react-router-dom';
import './ListarVagas.css';

function ListarVagas() {
    const navigate = useNavigate();

    const handleVoltarHome = () => {
        navigate('/');
    };

    // Dados de exemplo das vagas
    const vagas = [
        { placa: 'ABC1234', proprietario: 'João Silva', apartamento: '101', bloco: 'A', modelo: 'Carro', cor: 'Azul', numero: 1, ocupada: 'ocupada' },
        { placa: 'XYZ9876', proprietario: 'Maria Santos', apartamento: '202', bloco: 'B', modelo: 'Moto', cor: 'Vermelha', numero: 2 , ocupada: ''},
        { placa: 'DEF5678', proprietario: 'Pedro Oliveira', apartamento: '303', bloco: 'C', modelo: 'Carro', cor: 'Verde', numero: 3, ocupada: '' },
    ];

    return (
        <div className="listar-vagas-container">
            <button onClick={handleVoltarHome}>Voltar</button>
            <h2>Listagem de Vagas</h2>
            <table>
                <thead>
                    <tr>
                        <th>Número da Vaga</th>
                        <th>Placa do Veículo</th>
                        <th>Nome do Proprietário</th>
                        <th>Número do Apartamento</th>
                        <th>Bloco do Apartamento</th>
                        <th>Modelo do Veículo</th>
                        <th>Cor do Veículo</th>
                    </tr>
                </thead>
                <tbody>
                    {vagas.map((vaga, index) => (
                        <tr key={index} className={vaga.ocupada ? 'ocupada' : 'disponivel'}>
                            <td>{vaga.numero}</td>
                            <td>{vaga.placa}</td>
                            <td>{vaga.proprietario}</td>
                            <td>{vaga.apartamento}</td>
                            <td>{vaga.bloco}</td>
                            <td>{vaga.modelo}</td>
                            <td>{vaga.cor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarVagas;
