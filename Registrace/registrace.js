const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
const name2 = urlParams.get('name2');
const sex = urlParams.get('sex');
const address = urlParams.get('address');
const city = urlParams.get('city');
const state = urlParams.get('state');
const tel = urlParams.get('tel');


