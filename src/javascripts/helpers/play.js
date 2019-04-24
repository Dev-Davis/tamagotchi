import util from './util';

let funPlay = 50;
const fun = 2;
const superFun = 50;

const addFun = () => {
  if (funPlay < 97) {
    funPlay += fun;
  } else if (funPlay >= 91) {
    funPlay = 100;
  }
  // console.error(funPlay);
  util.printToDom('playScore', funPlay);
};

const addSupFun = () => {
  if (funPlay <= 50) {
    funPlay += superFun;
  } else if (funPlay === 100 || funPlay >= 51) {
    funPlay = 100;
  }
  util.printToDom('playScore', funPlay);
};

const addEvents = () => {
  document.getElementById('funBtn').addEventListener('click', addFun);
  document.getElementById('superFunBtn').addEventListener('click', addSupFun);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += `<div>Play: <span id="playScore">${funPlay}</span></div>`;
  domString += '</div>';
  domString += '<button id="funBtn">Fun</button>';
  domString += '<button id="superFunBtn">Super Fun</button>';
  util.printToDom('play', domString);
  addEvents();
};

export default { domStringBuilder, addFun, addSupFun };
