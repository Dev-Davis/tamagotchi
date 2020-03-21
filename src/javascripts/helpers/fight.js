import util from './util';

let fightClub = 100;
const fight = 10;
const runAway = 10;

const addFight = () => {
  if (fightClub < 100 && fightClub >= 0) {
    fightClub += runAway;
  } else if (fightClub > 90) {
    fightClub = 100;
  }
  util.printToDom('fightScore', fightClub);
};

const subFight = () => {
  if (fightClub > 0 && fightClub <= 100) {
    fightClub -= fight;
  } else if (fightClub <= 0) {
    fightClub = 0;
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
  domString += `<p class="category-title">Fighting: <span id="fightScore">${fightClub}</span></p>`;
  domString += '</div>';
  domString += '<div class="btnBox">';
  domString += '<button id="runBtn" class="btn btn-primary">Run</button>';
  domString += '<button id="fightBtn" class="btn btn-danger">Fight</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  addEvents();
};
export default { domStringBuilder, subFight, addFight };
