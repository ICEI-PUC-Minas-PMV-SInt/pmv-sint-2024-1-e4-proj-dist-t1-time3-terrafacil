import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


function InsumoCrud() {
    const [id, setId] = useState("");
    const [Name, setName] = useState("");
    const [valor, setValor] = useState("");
    const [insumos, setUsers] = useState([]);

    useEffect(() => {
        (async () => await Load())();
    }, []);

    async function Load() {

        const result = await axios.get("https://localhost:7018/api/Insumo/GetInsumo/");
        setUsers(result.data);
        console.log(result.data);
    }

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
    async function editInsumo(insumos) {
        setName(insumos.name);
        setValor(insumos.valor);


        setId(insumos.id);
    }

    async function DeleteInsumo(id) {
        await axios.delete("https://localhost:7018/api/Insumo/DeleteInsumo/" + id);
        alert("Insumo apagado com sucesso");
        setId("");
        setName("");
        setValor("");
        Load();
    }

    async function update(event) {
        event.preventDefault();
        try {
            await axios.patch("https://localhost:7018/api/Insumo/UpdateInsumo/" + insumos.find((u) => u.id === id).id || id,
                {
                    id: id,
                    Name: Name,
                    valor: valor,
                }
            );
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
            <div class="container mt-4">
                <form>
                    <div class="form-group">

                        <input
                            type="text"
                            class="form-control"
                            id="id"
                            hidden
                            value={id}
                            onChange={(event) => {
                                setId(event.target.value);
                            }}
                        />
                        <label>Tipo de insumo</label>
                        <input
                            type="text"
                            class="form-control"
                            id="name"
                            value={Name}
                            onChange={(event) => {
                                setName(event.target.value);
                            }}
                        />
                    </div>
                    <div class="form-group">
                        <label>Valor</label>
                        <input
                            type="text"
                            class="form-control"
                            id="valor"
                            value={valor}
                            onChange={(event) => {
                                setValor(event.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button class="btn btn-primary mt-4" onClick={save}>
                            Register
                        </button>
                        <button class="btn btn-warning mt-4" onClick={update}>
                            Update
                        </button>
                    </div>
                </form>
            </div>
            <br></br>
            <table class="table table-dark" align="center">
                <thead>
                    <tr>
                        <th scope="col">Insumo Id</th>
                        <th scope="col">Tipo de Insumo</th>
                        <th scope="col">Valor</th>


                        <th scope="col">Option</th>
                    </tr>
                </thead>
                {insumos.map(function fn(insumo) {
                    return (
                        <tbody>
                            <tr>
                                <th scope="row">{insumo.id} </th>
                                <td>{insumo.name}</td>
                                <td>{insumo.valor}</td>

                                <td>
                                    <button
                                        type="button"
                                        class="btn btn-warning"
                                        onClick={() => editInsumo(insumo)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        onClick={() => DeleteInsumo(insumo.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>

        </div>
    );
}

export default InsumoCrud