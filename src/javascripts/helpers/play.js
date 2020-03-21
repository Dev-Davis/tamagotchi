import util from './util';

let funPlay = 50;
const fun = 5;
const bored = 10;

const addFun = () => {
  if (funPlay < 97) {
    funPlay += fun;
  } else if (funPlay >= 90) {
    funPlay = 100;
  }
  util.printToDom('playScore', funPlay);
};

const subBored = () => {
  if (funPlay <= 100) {
    funPlay -= bored;
  } else if (funPlay <= 10) {
    funPlay -= 10 && funPlay === null;
  }
  util.printToDom('playScore', funPlay);
};

const addEvents = () => {
  document.getElementById('funBtn').addEventListener('click', addFun);
  document.getElementById('boredBtn').addEventListener('click', subBored);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="showDisplay">';
  domString += '<p class="displayName">Play!</p>';
  domString += `<p>Fun Time: <span id="playScore">${funPlay}</span></p>`;
  domString += '</div>';
  domString += '<div class="playBtnBox">';
  domString += '<button id="funBtn" class="btn btn-primary">Fun</button>';
  domString += '<button id="boredBtn" class="btn btn-danger">Bored</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  addEvents();
};
export default
{
  domStringBuilder,
  addFun,
  subBored,
};
