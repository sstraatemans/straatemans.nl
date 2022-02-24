import data from './../src/data/index.json';

const importedData: Data = data;
const CHARACTER_DURATION = 1000;
let CHARACTER_COUNT = 0;
let PARTS_COUNT = 0;
let ANIMATION_COUNT = 0;

const parts: Part[] = [];
const addPart = (elm: Element, label: string) => {
  parts.push({
    elm,
    label,
  });
};

const getCharacterCount = () => {
  if (CHARACTER_COUNT + 1 >= importedData.length) {
    CHARACTER_COUNT = 0;
    return CHARACTER_COUNT;
  }
  return CHARACTER_COUNT++;
};

const createRoll = (part: Element, label: string) => {
  return new Promise<void>((resolve) => {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    const currentText = document.createElement('div');
    currentText.innerText = part.innerHTML;
    const nextText = document.createElement('div');
    nextText.innerText = importedData[CHARACTER_COUNT][label];

    part.replaceChildren(wrapper);
    wrapper.appendChild(currentText);
    wrapper.appendChild(nextText);

    wrapper.addEventListener('animationend', () => {
      part.innerHTML = nextText.innerText;
      wrapper.classList.remove('new');
      wrapper = null;

      ANIMATION_COUNT++;
      if (ANIMATION_COUNT < PARTS_COUNT) return;

      ANIMATION_COUNT = 0;
      getCharacterCount();

      resolve();
    });

    setTimeout(() => {
      wrapper.classList.add('new');
    }, 0);
  });
};

const animateParts = (parts: Part[]) => {
  const animations = parts.map((part) => {
    return createRoll(part.elm, part.label);
  });
  Promise.all(animations).then((values) => {
    setTimeout(() => {
      animateParts(parts);
    }, CHARACTER_DURATION);
  });
};

const initRoll = () => {
  const partelems = document.querySelectorAll('.roll');
  PARTS_COUNT = parts.length;

  setTimeout(() => {
    addPart(partelems[0], 'labelStart');
    addPart(partelems[1], 'labelEnd');

    animateParts(parts);
  }, CHARACTER_DURATION);
};

window.onload = () => {
  initRoll();
};
