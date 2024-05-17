import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './CadastroReserva.css'

function CadastroReserva() {
    const [formData, setFormData] = useState({
        placa: '',
        nomeProprietario: '',
        numeroApartamento: '',
        blocoApartamento: '',
        modeloVeiculo: '',
        corVeiculo: '',
        numeroVaga: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert("Cadastro realizado com sucesso!");
    };

    const navigate = useNavigate();

    const handleNavigateToListarVagas = () => {
        navigate('/listar-vagas');
    };

    return (
        <div className="cadastro-reserva-container">
            <button onClick={handleNavigateToListarVagas}>Ir para Listar Vagas</button>

            <h2>Cadastro de Reserva</h2>
            <form className="formulario" onSubmit={handleSubmit}>
                <input type="text" name="placa" placeholder="Placa do veículo" onChange={handleChange} />
                <input type="text" name="nomeProprietario" placeholder="Nome do proprietário" onChange={handleChange} />
                <input type="text" name="numeroApartamento" placeholder="Número do apartamento" onChange={handleChange} />
                <input type="text" name="blocoApartamento" placeholder="Bloco do apartamento" onChange={handleChange} />
                <input type="text" name="modeloVeiculo" placeholder="Modelo do veículo" onChange={handleChange} />
                <input type="text" name="corVeiculo" placeholder="Cor do veículo" onChange={handleChange} />
                <input type="text" name="numeroVaga" placeholder="Número da vaga de estacionamento" onChange={handleChange} />
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default CadastroReserva;
