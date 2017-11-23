'use strict';
var size = 4;
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var randomNames = [];
var randomSurnames = [];
var randomEyes = [];
var randomCoats = [];
var allWizards = [];

function getRandom(arr, arr1) {
  for (var i = 0; i < size; i++) {
    var rand = Math.floor(Math.random() * arr.length);
    arr1[i] = arr[rand];
  }
  return arr1;
}

for (var i = 0; i < size; i++) {
  allWizards[i] = {
    namesurname: getRandom(names, randomNames)[i] + ' ' + getRandom(surnames, randomSurnames)[i],
    coat: getRandom(coatColor, randomCoats)[i],
    eye: getRandom(eyesColor, randomEyes)[i]
  };
}

document.querySelector('.setup').classList.remove('hidden');
var similarList = document.querySelector('.setup-similar-list');

var wizardTemplate = document.querySelector('#similar-wizard-template').content;

function renderWizard(arr) {
  for (var l = 0; l < size; l++) {
    var wizardOne = wizardTemplate.cloneNode(true);

    wizardOne.querySelector('.setup-similar-label').textContent = arr.namesurname;
    wizardOne.querySelector('.wizard-coat').style.fill = arr.coat;
    wizardOne.querySelector('.wizard-eyes').style.fill = arr.eye;
  }
  return wizardOne;
}

var fragment = document.createDocumentFragment();
for (var k = 0; k < allWizards.length; k++) {
  fragment.appendChild(renderWizard(allWizards[k]));
}
similarList.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');


