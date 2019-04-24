import util from './util';

const pet = {
  pic1: 'https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg',

};

const domStringBuilder = () => {
  let domString = '';

  domString += '<div>';
  domString += `<img class="petPic" src="${pet.pic1}">`;
  domString += '</div>';

  util.printToDom('pet', domString);
};

export default { domStringBuilder };
