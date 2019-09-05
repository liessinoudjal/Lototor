import React from 'react';
import ReactDOM from 'react-dom';
import Numero from './Numero'

class App extends React.Component {T
 constructor() {
  super();
  this.state = JSON.parse(document.getElementById('root').dataset.state); 
  this.handleChange = this.handleChange.bind(this)
  this.isBonNumero = this.isBonNumero.bind(this)
  this.isBonEtoile = this.isBonEtoile.bind(this)
}
  isBonNumero(numero){
     return numero != '' ? this.state.numeros.indexOf(parseInt(numero )) :1
  }
  isBonEtoile(numero){
     return numero != '' ? this.state.etoiles.indexOf(parseInt(numero )) :1
  }

 handleChange(e){
    e.preventDefault();
    let numIndex =  e.currentTarget.dataset.index;
    let newValue =  e.currentTarget.value;
    let typeNumero =  e.currentTarget.dataset.typeNumero;
    console.log(typeNumero);
    if(typeNumero === "numero"){
       if(newValue.length <= 2 ){
             $( e.currentTarget).popover("dispose")
            if (this.isBonNumero(newValue) >=0 ){
              if(this.state.grilleNumeros.indexOf(newValue) < 0 || newValue == '' || (this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1) ){

                const  grilleNumeros  = [...this.state.grilleNumeros];  
                grilleNumeros[numIndex] = newValue;
                // update state
                this.setState({
                    grilleNumeros,
                });

                if(this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1){
        
                   $( e.currentTarget).popover({
                      animation: true,
                      content: "Chiffre "+ newValue+ " déjà seléctionné.",
                      placement: "bottom"
                    })//.show()
                  $( e.currentTarget).popover("show")
                }

              }else{
                
              }
              
            }else{
             $( e.currentTarget).popover({
                      animation: true,
                      content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxNumero,
                      placement: "bottom"
                    })//.show()
              $( e.currentTarget).popover("show")
            }
          }
    }else if (typeNumero === "etoile"){
          if(newValue.length <= 2){
          $( e.currentTarget).popover("dispose")
          if (this.isBonEtoile(newValue) >=0 ){
           if(this.state.grilleEtoiles.indexOf(newValue) < 0 || newValue == ''){
             const  grilleEtoiles  = [...this.state.grilleEtoiles];
              grilleEtoiles[numIndex] = newValue;
              // update state
              this.setState({
                grilleEtoiles,
              });
           }else{
              $( e.currentTarget).popover({
                  animation: true,
                  content: "Chiffre "+ newValue+ " déjà seléctionné.",
                  placement: "bottom"
                })//.show()
              $( e.currentTarget).popover("show")
          }
           
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
   
  
}

  render() {
    return (
      <div>
          <h1><span>Simulateur </span> {this.state.lotteryName}</h1>   
          <h2>Saisir {this.state.nb_numero} numeros entre {this.state.min} et {this.state.maxNumero}</h2>
         
          <form>
            <div className="d-flex flex-row bd-highlight mb-3">
               {this.state.grilleNumeros.map((value, index) => 
                 <Numero key={"num-"+index}  typeNumero="numero" onChange={ this.handleChange} index={index}  value={value} max={this.state.maxNumero} min = {this.state.min}/>  
              )}
            </div>

            <h2>Saisir {this.state.nb_etoile} étoiles entre {this.state.min} et {this.state.maxEtoile}</h2>
            <div className="d-flex flex-row bd-highlight mb-3">
              {this.state.grilleEtoiles.map((value, index) =>
                <Numero key={"etoile-"+index} typeNumero="etoile" onChange={ this.handleChange} index={index}  value={value} max={this.state.maxEtoile} min = {this.state.min}/>     
              )}
            </div> 
          </form>
         
          
      </div>
    )
  }
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 