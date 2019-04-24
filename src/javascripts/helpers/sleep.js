import util from './util';

let sleepyTime = 50;
const nap = 10;
const deepSleep = 60;

const addNap = () => {
  if (sleepyTime < 97) {
    sleepyTime += nap;
  } else if (sleepyTime >= 91) {
    sleepyTime = 100;
  }
  util.printToDom('sleepScore', sleepyTime);
};

const addSleep = () => {
  if (sleepyTime <= 50) {
    sleepyTime += deepSleep;
  } else if (sleepyTime <= 100) {
    sleepyTime = 100;
  }
  util.printToDom('sleepScore', sleepyTime);
};

const addEvents = () => {
  document.getElementById('napBtn').addEventListener('click', addNap);
  document.getElementById('sleepBtn').addEventListener('click', addSleep);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="showDisplay">';
  domString += '<div class="displayName">Sleepy Time!</div>';
  domString += `<div>Full: <span id="sleepScore">${sleepyTime}</span></div>`;
  domString += '</div>';
  domString += '<div class="sleepBtnBox">';
  domString += '<button id="napBtn">Nap</button>';
  domString += '<button id="sleepBtn">Deep Sleep</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  addEvents();
};
export default { domStringBuilder, addSleep, addNap };
