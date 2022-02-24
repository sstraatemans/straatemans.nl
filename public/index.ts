import data from './../src/data/index.json';

const importedData: Data = data;
const CHARACTER_DURATION = 1000;
let CHARACTER_COUNT = 0;
let PARTS_COUNT = 0;

const getCharacterCount = () => {
  if (CHARACTER_COUNT + 1 >= importedData.length) {
    CHARACTER_COUNT = 0;
    return CHARACTER_COUNT;
  }
  return CHARACTER_COUNT++;
};

const createRoll = (part: Element, label: string, count: number = 0) => {
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const currentText = document.createElement('div');
  currentText.innerText = part.innerHTML;
  const nextText = document.createElement('div');
  nextText.innerText = importedData[CHARACTER_COUNT][label];

  part.replaceChildren(wrapper);
  wrapper.appendChild(currentText);
  wrapper.appendChild(nextText);

  if (count === PARTS_COUNT) {
    getCharacterCount();
  }

  wrapper.addEventListener('animationend', () => {
    console.log('end tssssransition');
    part.innerHTML = nextText.innerText;
    wrapper.classList.remove('new');
    wrapper = null;

    setTimeout(() => {
      createRoll(part, label, count);
    }, CHARACTER_DURATION);
  });

  setTimeout(() => {
    wrapper.classList.add('new');
  }, 0);
};

const initRoll = () => {
  const parts = document.querySelectorAll('.roll');
  PARTS_COUNT = parts.length;

  setTimeout(() => {
    createRoll(parts[0], 'labelStart', 1);
    createRoll(parts[1], 'labelEnd', 2);
  }, CHARACTER_DURATION);
};

window.onload = () => {
  initRoll();
};
