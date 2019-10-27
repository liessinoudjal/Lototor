const _form= {
	isBonNumero : function(numero){
		return numero != '' ? this.state.numeros.indexOf(parseInt(numero )) :1
	},
	isBonEtoile : function(numero){
     	return numero != '' ? this.state.etoiles.indexOf(parseInt(numero )) :1
  	},
  	handleAnnees : function(e){
	  	//on le modifie que si il n'a pas encore ete checké
	  	if(!e.currentTarget.classList.contains("checked")){
	  		//on déchek l'element qui avait ete checké
	  		e.currentTarget.parentNode.querySelector("span.checked").classList.toggle("checked")
	  		//puis on check l element cible
	  		e.currentTarget.classList.toggle("checked")
	  	}
	  	
	},
	 handleChange(e){
	    e.preventDefault();
	    this.setState({error: false})
	    let target = e.currentTarget;
	    let numIndex =  target.dataset.index;
	    let newValue =  target.value;
	    let typeNumero =  target.dataset.typeNumero;
	    if(typeNumero === "numero"){
	        if(newValue.length <= 2 ){
	            $( target).popover("dispose")
	            if (_form.isBonNumero(newValue) >=0 ){
	                if(this.state.grilleNumeros.indexOf(newValue) < 0 || newValue == '' || (this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1) ){

	                  const  grilleNumeros  = [...this.state.grilleNumeros];  
	                  grilleNumeros[numIndex] = newValue;
	                  // update state
	                  this.setState({
	                      grilleNumeros,
	                  });

	                  if(this.state.grilleNumeros.indexOf(newValue) >= 0 && newValue.length ===1){
	          			this.setState({error: true});
	                     $( target).popover({
	                        animation: true,
	                        content: "Chiffre "+ newValue+ " déjà seléctionné.",
	                        placement: "bottom"
	                      })//.show()
	                    $( target).popover("show")
	                  }


	                }else{
	                	this.setState({error: true});
	                   $( target).popover({
	                        animation: true,
	                        content: "Chiffre "+ newValue+ " déjà seléctionné.",
	                        placement: "bottom"
	                      })//.show()
	                    $( target).popover("show")
	                }   
	            }else{
	            	this.setState({error: true});
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
	          if (_form.isBonEtoile(newValue) >=0 ){
	            if(this.state.grilleEtoiles.indexOf(newValue) < 0 || newValue == '' || (this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length ===1) ){

	              const  grilleEtoiles  = [...this.state.grilleEtoiles];  
	              grilleEtoiles[numIndex] = newValue;
	              // update state
	              this.setState({
	                  grilleEtoiles,
	              });

	              if(this.state.grilleEtoiles.indexOf(newValue) >= 0 && newValue.length ===1){
	      			this.setState({error: true});
	                 $( e.currentTarget).popover({
	                    animation: true,
	                    content: "Chiffre "+ newValue+ " déjà seléctionné.",
	                    placement: "bottom"
	                  })//.show()
	                $( e.currentTarget).popover("show")
	              }

	            }else{
	            	this.setState({error: true});
	               $( e.currentTarget).popover({
	                    animation: true,
	                    content: "Chiffre "+ newValue+ " déjà seléctionné.",
	                    placement: "bottom"
	                  })//.show()
	                $( e.currentTarget).popover("show")
	            }
	            
	          }else{
	          	this.setState({error: true});
	           $( target).popover({
	                    animation: true,
	                    content: "Chiffre compris entre "+ this.state.min +" et "+ this.state.maxEtoile,
	                    placement: "bottom"
	                  })//.show()
	            $( target).popover("show")
	          }
	        }
	    }
	  },
	  formIsNotEmpty(form, numeros, etoiles){
	  	form.querySelectorAll(".numeros.numero input").forEach((input, index)=>{
	 		if(input.value != ""){
	 			numeros.push( input.value)
	 		}else{
	 			 return false;
	 		}
	 	})
	 	form.querySelectorAll(".numeros.etoile input").forEach((input, index)=>{
	 		if(input.value != ""){
	 			etoiles.push( input.value)
	 		}else{
	 			return false;
	 		}
	 	})  
	  }

}

export default _form;