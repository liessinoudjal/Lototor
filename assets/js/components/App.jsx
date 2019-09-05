import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {T
 constructor() {
  super();
  this.state = JSON.parse(document.getElementById('root').dataset.state); 
  this.setNumero = this.setNumero.bind(this)
  this.setEtoile = this.setEtoile.bind(this)
  this.isBonNumero = this.isBonNumero.bind(this)
  this.isBonEtoile = this.isBonEtoile.bind(this)
}
  isBonNumero(numero){
     return numero != '' ? this.state.numeros.indexOf(parseInt(numero )) :1
  }
  isBonEtoile(numero){
     return numero != '' ? this.state.etoiles.indexOf(parseInt(numero )) :1
  }

 setNumero(e){
    e.preventDefault();
    let numIndex =  e.currentTarget.dataset.index;
    let newValue =  e.currentTarget.value;
    //console.log(newValue);
    if(newValue.length <= 2 ){
       $( e.currentTarget).popover("dispose")
      if (this.isBonNumero(newValue) >=0 ){
        const  grilleNumeros  = [...this.state.grilleNumeros];  
        grilleNumeros[numIndex] = newValue;
        // update state
        this.setState({
            grilleNumeros,
        });
      }else{
       $( e.currentTarget).popover({
                animation: true,
                content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxNumero,
                placement: "bottom"
              })//.show()
        $( e.currentTarget).popover("show")
      }
    }
  
}
 
setEtoile(e){
  e.preventDefault();
    let numIndex =  e.currentTarget.dataset.index;
    let newValue =  e.currentTarget.value;
    if(newValue.length <= 2){
        $( e.currentTarget).popover("dispose")
        if (this.isBonEtoile(newValue) >=0 ){
          const  grilleEtoiles  = [...this.state.grilleEtoiles];
          grilleEtoiles[numIndex] = newValue;
          // update state
          this.setState({
            grilleEtoiles,
          });
        }else{
              $( e.currentTarget).popover({
                animation: true,
                content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxEtoile,
                placement: "bottom"
              })//.show()
             $( e.currentTarget).popover("show")
      }
     
    }
  
  }

  render() {
    return (
      <div>
          <h1><span>Simulateur </span> {this.state.lotteryName}</h1>   
          <h2>Saisir {this.state.nb_numero} numeros entre {this.state.min} et {this.state.maxNumero}</h2>
         
          <form>
            <div className="d-flex flex-row bd-highlight mb-3">
               {this.state.grilleNumeros.map((value, index) => 
                 <input onChange={ this.setNumero} data-index={index} data-toggle="popover"  key={"num-"+index} pattern="\d+"  value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
              )}
            </div>

            <h2>Saisir {this.state.nb_etoile} étoiles entre {this.state.min} et {this.state.maxEtoile}</h2>
            <div className="d-flex flex-row bd-highlight mb-3">
              {this.state.grilleEtoiles.map((value, index) => 
                  <input onChange={ this.setEtoile} data-index={index} key={"etoile-"+index}  pattern="\d+" value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
              )}
            </div> 
          </form>
         
          
      </div>
    )
  }
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 