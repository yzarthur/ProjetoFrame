import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App" >
      <br/>
      <form className="Form">
        <div className="Tam">
          <label for="exampleInputEmail1" class="form-label"><b>Usuário:</b> </label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <br/>
        <div >
          <label for="exampleInputPassword1" class="form-label"><b>Senha:</b> </label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <br/>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
}

export default App;