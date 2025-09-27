# 02 - Props e Componentização da UI

## Descrição do Projeto
Este é o meu segundo exercício prático na jornada de React. O objetivo foi dominar a **API de Componentes**, focando em como criar componentes reutilizáveis, eficientes e de fácil manutenção, usando Tailwind para a estilização.

## Conceitos Aprendidos
* **Componentização e Reutilização:** O projeto foi dividido em componentes lógicos e auto-suficientes (`HeadingLevel2`, `Input`, `Button`), mostrando a separação de responsabilidades.
* **Estilização Profissional (Tailwind CSS):** Aplicação de classes de utilidade para construir um design moderno sem o uso de arquivos CSS customizados.

### 🥇 Domínio de Props e API de Componentes
Este projeto demonstra as três formas de manipulação de Props em seus contextos ideais:

| Componente | Conceito Aplicado | Propósito |
| :--- | :--- | :--- |
| **HeadingLevel2** | **Sintaxe Básica (`props`):** Passagem simples e direta de um único valor (`title`). | Demonstra a forma mais fundamental de passar dados. |
| **Button** | **Desestruturação (`{children, type, onClick, ...}`):** Uso de props nomeadas para lidar com eventos e conteúdo. | Melhora a legibilidade do código no componente. |
| **Input** | **Operador Rest (`{...props}`):** Cria um componente **pass-through** (flexível), que aceita e repassa todos os atributos HTML (`placeholder`, `required`, `className`, etc.) para a tag nativa `<input>`. | Demonstra a flexibilidade máxima e a capacidade de criar wrappers. |

