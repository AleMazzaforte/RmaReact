
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <label> Nombre: <input type= 'text'></input></label><br/>

        <button onClick = { async () => {
          const res = await fetch('http://localhost:8080')
          const data = await res.json()
          console.log(data)
        }} ></button>
      </div>
      
    </div>
  );
}

export default App;
