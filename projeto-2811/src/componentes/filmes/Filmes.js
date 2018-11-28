import React from 'react';
import "../filmes/Filmes.css";

class Filmes extends React.Component{
    render(){
        return <main>
        <div className="cartao acao">
          <img src="img/piratas-do-caribe.jpg" alt="">
        </div>
        <div className="cartao comedia">
          <img src="img/o-maskara.jpg" alt="">
        </div>
        <div className="cartao terror">
          <img src="img/it-a-coisa.jpg" alt="">
        </div>
        <div className="cartao terror">
          <img src="img/poltergeist.jpg" alt="">
        </div>
        <div className="cartao drama">
          <img src="img/dunkirk.jpg" alt="">
        </div>
        <div className="cartao comedia">
          <img src="img/ace-ventura.jpg" alt="">
        </div>
      </main>
    };
}

export default Filmes;
