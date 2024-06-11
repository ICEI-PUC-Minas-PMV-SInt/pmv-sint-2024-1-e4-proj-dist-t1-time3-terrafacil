import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * Componente responsável por gerenciar o CRUD de insumos.
 */
function InsumoCrud() {
    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [valor, setValor] = useState("");
    const [insumos, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    /**
     * Função assíncrona para carregar os insumos da API.
     */
    async function Load() {
        const result = await axios.get("https://localhost:7018/api/Insumo/GetInsumo/");
        setUsers(result.data);
        console.log(result.data);
    }

    /**
     * Função assíncrona para salvar um novo insumo.
     * @param {Event} event - O evento de clique no botão de registro.
     */
    async function save(event) {
        event.preventDefault();
        try {
            await axios.post("https://localhost:7018/api/Insumo/AddInsumo/", {
                Name: Name,
                valor: valor,
            });
            alert("Insumo registrado com sucesso");
            setId("");
            setName("");
            setValor("");
            Load();
        } catch (err) {
            alert(err);
        }
    }

    /**
     * Função assíncrona para editar um insumo existente.
     * @param {Object} insumos - O objeto de insumo a ser editado.
     */
    async function editInsumo(insumos) {
        setName(insumos.name);
        setValor(insumos.valor);
        setId(insumos.id);
    }

    /**
     * Função assíncrona para excluir um insumo.
     * @param {string} id - O ID do insumo a ser excluído.
     */
    async function DeleteInsumo(id) {
        await axios.delete("https://localhost:7018/api/Insumo/DeleteInsumo/" + id);
        alert("Insumo apagado com sucesso");
        setId("");
        setName("");
        setValor("");
        Load();
    }

    /**
     * Função assíncrona para atualizar um insumo existente.
     * @param {Event} event - O evento de clique no botão de atualização.
     */
    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch("https://localhost:7018/api/Insumo/UpdateInsumo/" + insumos.find((u) => u.id === id).id || id, {
                id: id,
                Name: Name,
                valor: valor,
            });
            alert("Atualizado");
            setId("");
            setName("");
            setValor("");
            Load();
        } catch (err) {
            alert(err);
        }
    }

    return (
        <div>
            <h1>Insumos</h1>
            <div className="container mt-4">
                <form>
                    <div className="form-group row">
                        <input
                            type="text"
                            className="form-control col-md-6"
                            id="id"
                            hidden
                            value={id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2">Tipo de insumo</label>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={Name}
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-2">Valor</label>
                        <div className="col-md-6">
                            <input
                                type="text"
                                className="form-control"
                                id="valor"
                                value={valor}
                                onChange={(event) => {
                                    setValor(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-6 offset-md-2">
                            <button className="btn btn-primary mt-4 mr-2" onClick={save}>
                                Registrar
                            </button>
                            <button className="btn btn-warning mt-4" onClick={update}>
                                Modificar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <br></br>
            <table className="table table-striped table-bordered" align="center">
                <thead>
                    <tr>
                        <th scope="col">Insumo Id</th>
                        <th scope="col">Tipo de Insumo</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>
                <tbody>
                    {insumos.map(function fn(insumo) {
                        return (
                            <tr key={insumo.id}>
                                <th scope="row">{insumo.id}</th>
                                <td>{insumo.name}</td>
                                <td>{insumo.valor}</td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-warning mr-2"
                                        onClick={() => editInsumo(insumo)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => DeleteInsumo(insumo.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default InsumoCrud;
