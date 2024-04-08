# Trade-offs de Características de Qualidade

As categorias de requisitos não-funcionais para o produto de software "TerraFácil", seriam:

1. **Usabilidade**: 
   
   a. O sistema deve ser fácil de usar com uma interface intuitiva e amigável, permitindo que os usuários realizem tarefas sem precisar de assistência após uma única sessão de treinamento, uma vez que é destinado a um público que busca aperfeiçoar suas atividades no campo através da tecnologia.

2. **Desempenho**: 
   
   a. O sistema deve ser altamente responsivo, garantindo tempo de respostas eficientes até nos hardwares mais simples, garantindo uma experiência fluida ao usuário.

3. **Confiabilidade**: 
   
   a. O sistema deve ser robusto e livre de erros, sendo equipado com mecanismos para enfrentar falhas, garantir a recuperação de dados e assegurar disponibilidade contínua.
   
   b. O sistema deve requerer a autenticação de usuários para acessar suas tarefas e configurações pessoais, para garantir acesso seguro às informações. Em relação à segurança, após três tentativas de login falhas, o usuário é bloqueado temporariamente para evitar tentativas de força bruta. Além disso, as senhas são armazenadas com segurança usando técnicas de hash e sal.

4. **Suportabilidade**: 
   
   a. O sistema deve ser projetado de forma a facilitar futuras atualizações e manutenção.

A importância relativa de cada categoria:

| Categoria | Usabilidade | Desempenho | Confiabilidade | Suportabilidade |
| --- | --- | --- | --- | --- |
| Usabilidade | - | > | < | < |
| Desempenho | < | - | < | < |
| Confiabilidade | < | > | - | < |
| Suportabilidade | > | > | > | - |

> Nesta matriz, o sinal ">" indica que a categoria da linha é mais importante que a categoria da coluna, e o sinal "<" indica que a categoria da linha é menos importante que a categoria da coluna. Por exemplo, a Usabilidade é considerada mais importante que o Desempenho, Confiabilidade e Suportabilidade, enquanto o Desempenho é considerado mais importante que a Suportabilidade, mas menos importante que a Usabilidade e Confiabilidade, e assim por diante.
