# 07 - Trabalhando com Roteamento (react-router-dom)

## Descrição do Projeto
Este é o meu sétimo exercício de aprendizado focado em Hooks/Libraries essenciais. O objetivo foi entender o roteamento moderno (`react-router-dom` Data API) e aplicar princípios de Experiência do Usuário (UX) em um fluxo de Login/Dashboard.

## Principais Conquistas e Conceitos
* **Arquitetura de Roteamento:** Uso da sintaxe moderna (`createBrowserRouter` e `RouterProvider`) para definir rotas como objetos, o que é ideal para o projeto Full-Stack final.
* **Layouts Aninhados:** O componente `App.jsx` atua como um layout global, usando `<Outlet />` para garantir que o Header e Footer sejam fixos em todas as páginas.
* **Navegação (Lógica e Estática):**
    * **`useNavigate`:** Redirecionamento condicional após o Login (autenticação simulada).
    * **`Link`:** Navegação estática para a Home/Login com estilos limpos.
* **Estado de Formulário:** Uso de `useState` para gerenciar os campos de `email` e `password` no `LoginPage`.


