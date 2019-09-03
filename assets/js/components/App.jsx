import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
 constructor() {
  super();
  this.state = JSON.parse(document.getElementById('root').dataset.state); 
  this.setNumero = this.setNumero.bind(this)
  this.setEtoile = this.setEtoile.bind(this)
}

 setNumero(e){
    e.preventDefault();
    //si le numero entré n'est pas supérieur au numero max autorisé et qu'il n'as pas déjà été selectionné
    let {numIndex,newValue} = [ e.currentTarget.dataset.index, e.currentTarget.value];

    const { numeros } = this.state.grille;
    numeros[numIndex] = newValue;
    // update state
    this.setState({
        numeros,
    });
}
 
setEtoile(e){
  e.preventDefault();
   //si le numero entré n'est pas supérieur au numero max autorisé et qu'il n'as pas déjà été selectionné
   let {numIndex,newValue} = [ e.currentTarget.dataset.index, e.currentTarget.value];

   const { etoiles } = this.state.grille;
   etoiles[numIndex] = newValue;
   // update state
   this.setState({
    etoiles,
   });
  }

  render() {
    return (
      <div>
          <h1><span>Simulateur </span> {this.state.lotteryName}</h1>   
          <h2>saisir {this.state.nb_numero} numeros entre {this.state.min} et {this.state.maxNumero}</h2>
        <div className="d-flex flex-row bd-highlight mb-3">
      
          {this.state.grille.numeros.map((value, index) => 
              <input onChange={ this.setNumero} data-index={index} key={"num-"+index} pattern="\d+"  value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
          )}
          </div>
          <h2>saisir {this.state.nb_etoile} étoiles entre {this.state.min} et {this.state.maxEtoile}</h2>
          <div className="d-flex flex-row bd-highlight mb-3">
      
          {this.state.grille.etoiles.map((value, index) => 
            
                <input onChange={ this.setEtoile} data-index={index} key={"etoile-"+index}  pattern="\d+" value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
            )}
      </div>      
      </div>
    )
  }
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 