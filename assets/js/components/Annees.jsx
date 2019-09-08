import React from 'react'

const Annees = (props) =>{

return (

		 <span  onClick={props.handleAnnees} className={props.checked?"checked": ""}>{props.annees}</span>

	)



}

export default Annees