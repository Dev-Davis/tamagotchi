import '../styles/main.scss';
import 'bootstrap';
import eat from './helpers/eat';
import play from './helpers/play';
import fight from './helpers/fight';
import sleep from './helpers/sleep';
import pet from './helpers/pet';

const init = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
  pet.domStringBuilder();
};

init();
