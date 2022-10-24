import { linkLists } from './link-lists.js';

let countriesSelect = document.getElementById('country');
let provincesSelect = document.getElementById('province');
linkLists(countriesSelect, provincesSelect);

let submitButton = document.getElementById('submit');
let form = document.getElementById('personData');

form.addEventListener('submit', function (event) {
  let data = new FormData(form);

  // console.log(data.get());
  for (let entry of data) {
    console.log(entry[1]);
  }
  event.preventDefault();
});
