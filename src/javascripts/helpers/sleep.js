import util from './util';

let sleepyTime = 50;
const nap = 10;
const awake = 10;

const addNap = () => {
  if (sleepyTime < 97) {
    sleepyTime += nap;
  } else if (sleepyTime >= 91) {
    sleepyTime = 100;
  }
  util.printToDom('sleepScore', sleepyTime);
};

const ansomnia = () => {
  if (sleepyTime <= 50) {
    sleepyTime -= awake;
  } else if (sleepyTime <= 100) {
    sleepyTime = 100;
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
  domString += `<p>Sleepiness: <span id="sleepScore">${sleepyTime}</span></p>`;
  domString += '</div>';
  domString += '<div class="awakeBtnBox">';
  domString += '<button id="napBtn" class="btn btn-primary">Nap</button>';
  domString += '<button id="awakeBtn" class="btn btn-danger">Awake</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  addEvents();
};
export default { domStringBuilder, ansomnia, addNap };
