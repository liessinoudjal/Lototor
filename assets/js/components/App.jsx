import React from 'react';
import ReactDOM from 'react-dom';
import FormLottery from './FormLottery'

const App = () => {
    return  <div>
              <FormLottery root={document.getElementById('root').dataset.state}/> 
            </div>
}


export default App;

ReactDOM.render(<App/>, document.getElementById('root')); 