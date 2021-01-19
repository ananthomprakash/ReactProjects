import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5"

//array destructuring
//const [,,light]=["boots","tent","headlamp"];
//console.log(light);

//<App2 authorized={true}/>

ReactDOM.render(
 <App5 login="ananthomprakash"/>,
  document.getElementById('root')
);
