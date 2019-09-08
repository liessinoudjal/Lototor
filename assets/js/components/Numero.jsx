import React, {useContext} from 'react'
import TypeNumeroContext from './TypeNumeroContext'


const Numero = (props)=>{
const typeNumeroContext = useContext(TypeNumeroContext) 
		return <span className={"numeros "+ typeNumeroContext.typeNumero}>
					<input onChange={ props.onChange} 
						data-index={props.index} 
						data-type-numero ={typeNumeroContext.typeNumero} 
						pattern="\d+" 
						value={props.value} 
						className =" ml-4" 
						type ="text" 
						step="1" 
						max={props.max}
						 min = {props.min} />   
				</span>
}

export default Numero;