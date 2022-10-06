import "./css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Tabela from "./Tabela/index.js";
import bg from "./imagens/Imagem64.jpg"

function Button(props){
  
  return(
    <a href={props.destino} className="btn btn-primary">
      {props.children} {/* comentario de lado é assim */}
    </a>
  );
}

export default function App() {
  let estilo={
    backgroundColor: 'red',
    color:'white'
  }

  let titulo = 'Indentifique-se'
  return (
    <div>
      <img src={bg} />
      <h1 className="text-center">{titulo}</h1>
      <hr/>

      <form>
        <input className="form" placeholder="E-mail"/>
        <input className="form" placeholder="Senha"/>
        <button className="form" style={estilo}>Entrar</button>
        
          <Button destino="http://google.com">teste</Button>
          <Button>Listar</Button>
          <button>Teste</button>
        
      </form>
      
      <Tabela></Tabela>

        

    </div>
  );
}