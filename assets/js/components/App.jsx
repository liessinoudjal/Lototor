import React from 'react';
import ReactDOM from 'react-dom';
import FormLottery from './FormLottery'
//utilie pour  ie
import {fetch as fetchPolify}  from 'whatwg-fetch'

const App = () => {



    return  <div>
          
                <FormLottery root={document.getElementById('root').dataset.state}/> 
             
            </div>
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 