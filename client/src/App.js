
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const url = "https://rmareact.onrender.com" || "http://localhost:8080";

function App() {
  return (
    <div className="container">
      <div className="App">
        

        
      </div>
      <div class="card text-center">
  <div class="card-header">
    Login
  </div>
    <div class="card-body">
      <h5 class="card-title">Ingrese su usuario y contraseña</h5><br/>
      
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Usuario:</span>
        <input type="text" class="form-control"  aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Contraseña:</span>
        <input type="password" class="form-control"  aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
      
    </div>
    <div class="card-footer text-body-secondary">
    <button className="btn btn-primary" onClick = { async () => {
          const res = await fetch(url)
          const data = await res.json()
          console.log(data)
        }} >Aceptar</button>
    </div>
  </div>
    </div>
  );
}

export default App;
