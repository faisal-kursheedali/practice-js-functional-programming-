// Import stylesheets
import './style.css';
import PureFunction from './concepts/pureFunction.js';
import ArrFn from './concepts/arrowFnc.js';
// Write Javascript code!
const appDiv = document.getElementById('app');
console.log(PureFunction('sub'));
console.log(ArrFn('sub'));

appDiv.innerHTML = `<h1>JS Starter</h1>`;
