# 04 - Praticando o Hook useEffect e Side Effects

## Descrição do Projeto
Este é o meu quarto exercício prático. O objetivo foi dominar o hook `useEffect` para lidar com as interações do componente com o "mundo exterior" (side effects), como a busca de dados de API. O projeto é um Painel de Status de Usuário que permite a navegação entre IDs.

## Principais Conquistas e Conceitos
* **Controle de Ciclo de Vida (`useEffect`):** Implementação dos três pilares (Montagem, Atualização e Limpeza) para buscar dados assíncronos.
* **Estabilidade UX (Anti-Content Jump):** Fixação da altura do contêiner (`h-12`) para prevenir o *Layout Shift* (tela que "dança") durante o carregamento de dados.
* **Array de Dependências Dinâmico:** Uso de `[userId]` para re-executar o `fetch` toda vez que o ID do usuário mudar.
* **Controle de Race Condition:** Desativação dos botões de navegação (`disabled={isMin || isLoading}`) enquanto uma requisição de API está pendente, prevenindo múltiplos cliques e bugs de estado.
* **Controle de Limites (Robusto):** Uso de `Math.min(MAX)` e `Math.max(MIN)` para garantir que a navegação não vá abaixo de 1 nem acima de 10.
* **Estilização Condicional:** Uso do modificador `disabled:` do Tailwind para aplicar estilos cinzas quando os botões atingem o limite.




