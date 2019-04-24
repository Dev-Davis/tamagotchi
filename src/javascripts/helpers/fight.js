import util from './util';

let fightClub = 100;
const fight = 10;
const runAway = 1;

const addFight = () => {
  if (fightClub < 100) {
    fightClub += runAway;
  } else if (fightClub <= 100) {
    fightClub = 100;
  }
  util.printToDom('fightScore', fightClub);
};

const subFight = () => {
  if (fightClub >= 10) {
    fightClub -= fight;
  } else if (fightClub <= 99) {
    fightClub = 100;
  }
  util.printToDom('fightScore', fightClub);
};


const addEvents = () => {
  document.getElementById('runBtn').addEventListener('click', addFight);
  document.getElementById('fightBtn').addEventListener('click', subFight);
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class="showDisplay">';
  domString += '<p class="displayName">Fight!</p>';
  domString += `<p>Full: <span id="fightScore">${fightClub}</span></p>`;
  domString += '</div>';
  domString += '<div class="fightBtnBox">';
  domString += '<button id="runBtn">Run</button>';
  domString += '<button id="fightBtn">Fight</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  addEvents();
};

export default { domStringBuilder, subFight, addFight };
