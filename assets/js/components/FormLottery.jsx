import React ,{Component} from 'react'
import TypeNumeroContext, {TypeNumeroProvider} from './TypeNumeroContext'
import Numero from './Numero'

require('../../css/components/form.scss')

class FormLottery extends Component {

 constructor(props) {
  super(props);
  this.state = JSON.parse(this.props.root); 
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
    let target = e.currentTarget;
    let numIndex =  target.dataset.index;
    let newValue =  target.value;
    let typeNumero =  target.dataset.typeNumero;
    console.log(typeNumero);
    if(typeNumero === "numero"){
        if(newValue.length <= 2 ){
            $( target).popover("dispose")
            if (this.isBonNumero(newValue) >=0 ){
                if(this.state.grilleNumeros.indexOf(newValue) < 0 || newValue == '' || (this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1) ){

                  const  grilleNumeros  = [...this.state.grilleNumeros];  
                  grilleNumeros[numIndex] = newValue;
                  // update state
                  this.setState({
                      grilleNumeros,
                  });

                  if(this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1){
          
                     $( target).popover({
                        animation: true,
                        content: "Chiffre "+ newValue+ " déjà seléctionné.",
                        placement: "bottom"
                      })//.show()
                    $( target).popover("show")
                  }


                }else{
                   $( target).popover({
                        animation: true,
                        content: "Chiffre "+ newValue+ " déjà seléctionné.",
                        placement: "bottom"
                      })//.show()
                    $( target).popover("show")
                }   
            }else{
               $(target).popover({
                        animation: true,
                        content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxNumero,
                        placement: "bottom"
                      })//.show()
                $( target).popover("show")
            }
        }
    }else if (typeNumero === "etoile"){
       if(newValue.length <= 2 ){
          $( target).popover("dispose")
          if (this.isBonEtoile(newValue) >=0 ){
            if(this.state.grilleEtoiles.indexOf(newValue) < 0 || newValue == '' || (this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length ===1) ){

              const  grilleEtoiles  = [...this.state.grilleEtoiles];  
              grilleEtoiles[numIndex] = newValue;
              // update state
              this.setState({
                  grilleEtoiles,
              });

              if(this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length ===1){
      
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
                    content: "Chiffre "+ newValue+ " déjà seléctionné.",
                    placement: "bottom"
                  })//.show()
                $( e.currentTarget).popover("show")
            }
            
          }else{
           $( target).popover({
                    animation: true,
                    content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxEtoile,
                    placement: "bottom"
                  })//.show()
            $( target).popover("show")
          }
        }
    }
  }

render(){

	return	 (
		      <div>
		        <form>
		          <h1><span>Simulateur </span> {this.state.lotteryName}</h1> 
		          <h2>Choisissez sur combien d'années vous voulez simuler</h2>
		           <div className="d-flex flex-row bd-highlight mb-3">
				        <div className="">
				       	<label >10 <input  type="radio" name="annees" value="10"/> </label>
				       
				        </div>
				         <div className="">
				
				        <label>20 <input type="radio" name="annees" value ="20"/></label>

				        </div>
				 </div>  
				 <div className="d-flex flex-column flex-md-row">
		         	<div className="mt-3 mr-5">
		         		 <h2>Saisir {this.state.nb_numero} numeros entre {this.state.min} et {this.state.maxNumero}</h2>
				          <TypeNumeroProvider value= {{typeNumero:'numero'}}>
				            <div className="row ">
				               {this.state.grilleNumeros.map((value, index) => 
				                 <Numero key={"num-"+index}  typeNumero="numero" onChange={ this.handleChange} index={index}  value={value} max={this.state.maxNumero} min = {this.state.min}/>  
				              )}
				            </div>
				          </TypeNumeroProvider>
		         	</div>
		            <div className="mt-3">
		            	<h2>Saisir {this.state.nb_etoile} étoiles entre {this.state.min} et {this.state.maxEtoile}</h2>
			            <TypeNumeroProvider value= {{typeNumero:'etoile'}}>
			            <div className="d-flex flex-row bd-highlight mb-3">
			              {this.state.grilleEtoiles.map((value, index) =>
			                <Numero key={"etoile-"+index} typeNumero="etoile" onChange={ this.handleChange} index={index}  value={value} max={this.state.maxEtoile} min = {this.state.min}/>     
			              )}
			            </div>
			            </TypeNumeroProvider>
		            </div>
		         </div>
		          </form>
		      </div>
    		)
	}
}

export default FormLottery;