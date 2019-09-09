import React, {Component} from 'react'
import TypeNumeroContext, {TypeNumeroProvider} from './TypeNumeroContext'

import Numero from './Numero'
import Annees from './Annees'
import _form from './functions/_form'

require('../../css/components/form.scss')

class FormLottery extends Component {

 constructor(props) {
  super(props);
  this.state = JSON.parse(this.props.root);
  this.state.error=false; 
  _form.handleChange = _form.handleChange.bind(this)
  _form.isBonNumero = _form.isBonNumero.bind(this)
  _form.isBonEtoile = _form.isBonEtoile.bind(this)
  this.simuler = this.simuler.bind(this);
}
	

 
 simuler(e){
 	e.preventDefault();
 	let error = false;
 	let form = e.currentTarget;
 	let nb_annees = form.querySelector(".ans span.checked").innerHTML;
 	let numeros = []; 
 	let etoiles = [];
 	form.querySelectorAll(".numeros.numero input").forEach((input, index)=>{
 		if(input.value != ""){
 			numeros.push( input.value)
 		}else{
 			error = true;
 		}
 	})
 	form.querySelectorAll(".numeros.etoile input").forEach((input, index)=>{
 		if(input.value != ""){
 			etoiles.push( input.value)
 		}else{
 			error = true;
 		}
 	})  

 	if(error){
 		this.setState({error:true})
 	}
 	console.log(nb_annees,numeros,etoiles);

 }

render(){
const alert = this.state.error? <div class="alert alert-danger" role="alert">
						 Votre grille n'est pas complète ou contient des doublons !
						 </div> : "";
return	( 
	    <div>
	        <form onSubmit={this.simuler}>
	          <h1><span>Simulateur </span> {this.state.lotteryName}</h1>
	          {alert 
	          }
			  
	          <h2>Choisissez sur combien d'années vous voulez simuler</h2>
	           	<div className="d-flex flex-row bd-highlight mb-1 ans">
			        {this.state.anneesDeTirages.map((	annees, index) =>
						<Annees handleAnnees={_form.handleAnnees} key={"annees-"+index} annees={annees} checked={(index ==0)?true:false}/>
			        )}
			
				</div>  
				<div className="d-flex flex-column flex-md-row">
		         	<div className="mt-3 mr-5">
		         		 <h2>Saisir {this.state.nb_numero} numeros entre {this.state.min} et {this.state.maxNumero}</h2>
				          <TypeNumeroProvider value= {{typeNumero:'numero'}}>
				            <div className="row ">
				               {this.state.grilleNumeros.map((value, index) => 
				                 <Numero key={"num-"+index}  typeNumero="numero" onChange={ _form.handleChange} index={index}  value={value} max={this.state.maxNumero} min = {this.state.min}/>  
				              )}
				            </div>
				          </TypeNumeroProvider>
		         	</div>
		            <div className="mt-3">
		            	<h2>Saisir {this.state.nb_etoile} étoiles entre {this.state.min} et {this.state.maxEtoile}</h2>
			            <TypeNumeroProvider value= {{typeNumero:'etoile'}}>
			            <div className="d-flex flex-row bd-highlight mb-3">
			              {this.state.grilleEtoiles.map((value, index) =>
			                <Numero key={"etoile-"+index} typeNumero="etoile" onChange={ _form.handleChange} index={index}  value={value} max={this.state.maxEtoile} min = {this.state.min}/>     
			              )}
			            </div>
			            </TypeNumeroProvider>
		            </div>
		        </div>
		        <div className="form-group">
		        	<button className="btn btn-success btn-block"  type="submit" > simuler !</button>
		        </div>
	        </form>
	    </div>
		)
	}
}

export default FormLottery;