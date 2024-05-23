const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
const age = urlParams.get('age');
const sex = urlParams.get('sex');
const behavior = urlParams.get('behavior');
const wishes = urlParams.get('wishes');
//
var be;
var wish;
var behavior_list = [];
behavior_list[0] = ['hodně hodný', 'hodný', 'zlobivý', 'hodně zlobivý'];
behavior_list[1] = ['hodně hodná', 'hodná', 'zlobivá', 'hodně zlobivá'];
var behavior_result = behavior_list[sex][behavior];

if (sex == 0) {
  be = 'byl';
  wish = 'přál';
} else {
  be = 'byla';
  wish = 'přála';
}

var bb = "";
if (behavior > 1) {
  bb = " Slibuji, že se příští rok polepším!";
}
