import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div>
    <p>O que é React Js?</p>
    <p>
      React JS é uma biblioteca JavaScript de código aberto criada pelo Facebook (agora Meta) para construir interfaces de usuário (UIs) interativas para aplicativos web. Ele é conhecido por sua abordagem declarativa, que facilita a criação de UIs complexas e dinâmicas, tornando o código mais previsível e fácil de manter. React utiliza componentes, que são blocos de construção reutilizáveis que representam partes independentes da interface do usuário, permitindo a criação de interfaces complexas a partir de elementos simples.
    </p>
    <p>
      Uma das características mais importantes do React é o conceito de reconciliação virtual. Isso significa que o React cria uma representação virtual da UI na memória antes de atualizar a UI real no navegador. Essa abordagem permite que o React atualize a UI de forma eficiente, apenas alterando os elementos que realmente mudaram, em vez de renderizar toda a UI a cada atualização. Essa otimização garante melhor desempenho e responsividade para aplicativos web, especialmente em aplicações complexas com muitos elementos dinâmicos.
    </p>

    <p>
      React também utiliza JSX, uma extensão de sintaxe para JavaScript que permite que você escreva HTML dentro do seu código JavaScript. Isso facilita a criação de interfaces de usuário, pois você pode usar a sintaxe familiar do HTML para definir a estrutura da UI. Além disso, React oferece uma ampla gama de ferramentas e bibliotecas para auxiliar no desenvolvimento de aplicativos web, como ferramentas de gerenciamento de estado, roteamento e testes. Sua popularidade crescente, a comunidade ativa e a documentação completa tornam o React uma escolha popular para o desenvolvimento de aplicativos web modernos.
    </p>
    </div>
  );
}

export default App;
