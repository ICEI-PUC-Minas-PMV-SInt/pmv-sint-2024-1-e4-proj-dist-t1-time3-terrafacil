import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function InsulmoPage() {
  const [id, setId] = useState("");
  const [Name, setName] = useState("");
  const [valor, setValor] = useState("");
  const [insumos, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "https://localhost:7018/api/Insumo/GetInsumo/"
    );
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
      await axios.patch(
        "https://localhost:7018/api/Insumo/UpdateInsumo/" +
          insumos.find((u) => u.id === id).id || id,
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
      <div className="bg-secondary p-4 text-white fs-3">Terra Facil WEB</div>
      <div className="container">
        <h1 className="text-center mt-4 fs-3">Cadastro de Insumos</h1>
        <div className="d-flex col-12 ">
          <div className="col-4" />
          <form className="col-4">
            <div class="form-group mt-4">
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
              <label className="mb-2">Tipo de insumo:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Digite o tipo"
                id="name"
                value={Name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div class="form-group mt-4">
              <label className="mb-2">Valor:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Digite o valor"
                id="valor"
                value={valor}
                onChange={(event) => {
                  setValor(event.target.value);
                }}
              />
            </div>
            <div className="mt-4 d-flex ">
              <div className="me-3">
                <button class="btn  btn-outline-primary" onClick={save}>
                  Register
                </button>
              </div>
              <div>
                <button class="btn btn-outline-warning" onClick={update}>
                  Update
                </button>
              </div>
            </div>
          </form>
          <div className="col-4" />
        </div>

        <table className="table table-white mt-5" align="center">
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
    </div>
  );
}

export default InsulmoPage;
