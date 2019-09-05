import React, {Component} from 'React'



class Numero extends Component{
	constructor(){
		super()
		console.log(this.props)
	}
	

	render(){

		return <input onChange={ this.props.onChange} data-index={this.props.index} data-type-numero ={this.props.typeNumero} pattern="\d+" value={this.props.value} className ="form-control" type ="number" step="1" max={this.props.max} min = {this.props.min} />    
	}
}


export default Numero;