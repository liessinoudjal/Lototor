import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
 constructor() {
  super();
  this.state = JSON.parse(document.getElementById('root').dataset.state); 

}

  render() {
    return (
      <div>
               <h1><span>Simulateur </span> {this.state.lotteryName}</h1>   
               <h2>saisir {this.state.nb_numero} numeros</h2>
              <div className="d-flex flex-row bd-highlight mb-3">
            
                {this.state.grille.numeros.map((value, index) => {
                    return <input pattern="\d+" key={index} value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
                })}
               </div>
               <h2>saisir {this.state.nb_etoile} étoiles</h2>
               <div className="d-flex flex-row bd-highlight mb-3">
            
               {this.state.grille.etoiles.map((value, index) => {
                    return( <div>
                          <input pattern="\d+" key={index} value={value} className ="form-control" type ="number" step="1" max={this.state.max} min = {this.state.min} />    
                        <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="100 0 583.508 546.833"><path class="star-body" d="M529.754,531.833c-6.497,0-13.093-1.576-19.075-4.558l-126.424-64.621L257.76,527.311 c-5.709,2.915-12.46,4.522-19.006,4.522c-8.924,0-17.058-2.551-24.175-7.582c-12.74-8.979-19.23-24.603-16.552-39.817 l24.065-136.605l-102.018-96.714c-11.284-10.677-15.432-27.057-10.578-41.74c5.034-14.979,17.509-25.293,33.347-27.521 l141.257-19.928l63.036-124.483C354.228,23.627,368.401,15,384.087,15c15.93,0,29.877,8.482,37.327,22.694l62.994,124.399 l141.25,19.926c15.729,2.212,28.507,12.693,33.354,27.354c4.854,14.683,0.706,31.063-10.567,41.73l-102.028,96.724l24.065,136.607 c2.673,15.188-3.792,30.786-16.473,39.76C546.737,529.192,538.352,531.833,529.754,531.833z"></path></svg>
                      </div>
                    )
                  })}
            </div>
          
               
      </div>
    )
  }
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 