import util from './util';

let sleepyTime = 100;
const nap = 20;
const awake = 20;

const addNap = () => {
  if (sleepyTime < 100 && sleepyTime >= 0) {
    sleepyTime += nap;
  } else if (sleepyTime > 90) {
    sleepyTime = 100;
  }
  util.printToDom('sleepScore', sleepyTime);
};

const ansomnia = () => {
  if (sleepyTime > 0 && sleepyTime <= 100) {
    sleepyTime -= awake;
  } else if (sleepyTime <= 0) {
    sleepyTime = 0;
  }
  util.printToDom('sleepScore', sleepyTime);
};

const addEvents = () => {
  document.getElementById('napBtn').addEventListener('click', addNap);
  document.getElementById('awakeBtn').addEventListener('click', ansomnia);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="showDisplay">';
  domString += '<p class="displayName">Sleepy Time!</p>';
  domString += `<p class="category-title">Sleepiness: <span id="sleepScore">${sleepyTime}</span></p>`;
  domString += '</div>';
  domString += '<div class="btnBox">';
  domString += '<button id="napBtn" class="btn btn-primary">Sleep</button>';
  domString += '<button id="awakeBtn" class="btn btn-danger">Awake</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  addEvents();
};
export default { domStringBuilder, ansomnia, addNap };
