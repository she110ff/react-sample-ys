import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dispatcher from 'flux';

const CountDown = ({count, tick, reset}) => {
  if(count){
    setTimeout(() => tick(), 1000);
  };

  return (count) ?
      <h1>{count}</h1> :
      <div onClick={() => reset(10)}>
        <span>CELEBRATE!!</span>
        <span>(click to start over)</span>
      </div>;
}

const countDownActions = dispatcher => ({
	tick(currentCount){
		dispatcher.handleAction({type: 'TICK'});
	},
	reset(count){
		dispatcher.handleAction({
			type: 'RESET',
			count
		})
	}
})



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
