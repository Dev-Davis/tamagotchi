import util from './util';

let eat = 100;
const healthyEat = 10;
const unhealthyEat = 3;

const addEat = () => {
  if (eat < 97) {
    eat += healthyEat;
  } else if (eat >= 91) {
    eat = 100;
  }
  util.printToDom('score', eat);
};

const subEat = () => {
  if (eat <= 100) {
    eat -= unhealthyEat;
  } else if (eat === 100) {
    eat = 100;
  }
  util.printToDom('score', eat);
};

const addEvents = () => {
  document.getElementById('healthyBtn').addEventListener('click', addEat);
  document.getElementById('unhealthyBtn').addEventListener('click', subEat);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += `<div>Full: <span id="score">${eat}</span></div>`;
  domString += '</div>';
  domString += '<button id="healthyBtn">Healthy Food</button>';
  domString += '<button id="unhealthyBtn">Unhealthy Food</button>';
  util.printToDom('eat', domString);
  addEvents();
};

export default { domStringBuilder, subEat, addEat };
