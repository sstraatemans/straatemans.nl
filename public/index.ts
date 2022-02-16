import data from './../src/data/index.json';

const importedData: Data = data;
const CHARACTER_DURATION = 5000;

const createRoll = (part: Element, label: string) => {
  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const currentText = document.createElement('div');
  currentText.innerText = part.innerHTML;
  const nextText = document.createElement('div');
  nextText.innerText = label;

  part.replaceChildren(wrapper);
  wrapper.appendChild(currentText);
  wrapper.appendChild(nextText);

  wrapper.addEventListener('animationend', () => {
    console.log('end transition');
    part.innerHTML = label;
    wrapper.classList.remove('new');
    wrapper = null;

    setTimeout(() => {
      createRoll(part, importedData[1].labelStart);
    }, CHARACTER_DURATION);
  });

  setTimeout(() => {
    wrapper.classList.add('new');
  }, 0);
};

const initRoll = () => {
  const parts = document.querySelectorAll('.roll');

  setTimeout(() => {
    createRoll(parts[0], importedData[0].labelStart);
    createRoll(parts[1], importedData[0].labelEnd);
  }, CHARACTER_DURATION);
};

window.onload = () => {
  initRoll();
};
