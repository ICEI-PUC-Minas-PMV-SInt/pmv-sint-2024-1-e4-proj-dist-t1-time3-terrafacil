# Especificação de APIs



| Endpoint                             | Método | Descrição                                      | Parâmetros                        | Formato da Resposta | Autenticação e Autorização |
|--------------------------------------|--------|------------------------------------------------|-----------------------------------|---------------------|----------------------------|
| /api/users/{user_id}/insumos/          | GET    | Obter todas os insumos cadastrados             | user_id (string)                  | JSON                | JWT Token                  |
| /api/users/{user_id}/insumos/{insumo_id} | POST   | Adiciona um novo insumo (create)                          | user_id (string) insumo_id (string) | JSON                | JWT Token                  |
| /api/users/{user_id}/insumos/{insumo_id} | GET    | Obter detalhes de um insumo específico (getbyid)        | user_id (string) insumo_id (string) | JSON                | JWT Token                  |
| /api/users/{user_id}/insumos/{insumo_id} | PUT    | Atualizar os detalhes de um inusmo específico | user_id (string) insumo_id (string) | JSON                | JWT Token                  |
| /api/users/{user_id}/insumos/{insumo_id} | DELETE | Excluir uma insumo específica                  | user_id (string) insumo_id (string) | JSON                | JWT Token                  |

[Retorna](../README.md)
