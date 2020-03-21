import util from './util';

let eat = 50;
const healthyEat = 5;
const unhealthyEat = 10;

const addEat = () => {
  if (eat < 100 && eat >= 0) {
    eat += healthyEat;
  } else if (eat > 90) {
    eat = 100;
  }
  util.printToDom('score', eat);
};

const subEat = () => {
  if (eat > 0 && eat <= 100) {
    eat -= unhealthyEat;
  } else if (eat <= 0) {
    eat = 0;
  }
  util.printToDom('score', eat);
};

const addEvents = () => {
  document.getElementById('healthyBtn').addEventListener('click', addEat);
  document.getElementById('unhealthyBtn').addEventListener('click', subEat);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="showDisplay">';
  domString += '<p class="displayName">Eat!</p>';
  domString += `<p class="category-title">Fullness: <span id="score">${eat}</span></p>`;
  domString += '</div>';
  domString += '<div class="btnBox">';
  domString += '<button id="healthyBtn" class="btn btn-primary">Healthy Food</button>';
  domString += '<button id="unhealthyBtn" class="btn btn-danger">Unhealthy Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  addEvents();
};
export default { domStringBuilder, subEat, addEat };
