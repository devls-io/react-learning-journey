# 05 - Dominando o Hook useContext (Context API)

## Descrição do Projeto
Este é o meu quinto exercício prático. O objetivo foi resolver o problema do **Prop Drilling** e entender como criar e consumir dados globais (como um tema) de forma eficiente no React. 

## Principais Conquistas e Conceitos
* **Arquitetura de Contexto:** Implementação de uma estrutura de três níveis (`App` -> `Section` -> `Button`) para provar que a informação do tema salta o componente intermediário (`Section`).
* **Sintaxe Moderna (React 19):** Uso da sintaxe simplificada `<Context value={...}>` para fornecer o contexto.
* **Componente Contido em Contexto (Context-Aware Component):** O componente `Button` usa `useContext` para pegar dados globais, mas também aceita `props` (`useTheme={false}`) para ser flexível.
* **Flexibilidade Total:** Uso de uma `flag` booleana (`useTheme`) e do operador de coalescência nula (`?? {}`) para garantir que o botão funcione tanto no contexto (global) quanto fora dele (genérico).
* **Solução para Componentes Genéricos:** O `Button` foi refatorado para ser **dupla-função**, aceitando `className` e `onClick` ou a lógica global de tema.

  <img width="400" height="500" alt="04" src="https://github.com/user-attachments/assets/e0a1baf5-f88f-40c8-abd9-c7c939a3116a" />


