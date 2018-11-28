import React from 'react';
import "./Cabecalho.css"

class Cabecalho extends React.Component{
    render(){
        return <div>
        <div>
            <h2>MasterFlix</h2>
        </div>
  
      <div className="menu-hamburguer">
        <span className="traco traco-1"></span>
        <span className="traco traco-2"></span>
        <span className="traco traco-3"></span>
      </div>
  
      <div className="filtros">
        <p className="btn acao">Ação</p>
        <p className="btn comedia">Comédia</p>
        <p className="btn drama">Drama</p>
        <p className="btn terror">Terror</p>
      </div>

        <nav className="filtros mobile">
        <p className="btn acao">Ação</p>
        <p className="btn comedia">Comédia</p>
        <p className="btn drama">Drama</p>
        <p className="btn terror">Terror</p>
        </nav>
        </div>
    }
}

export default Cabecalho;