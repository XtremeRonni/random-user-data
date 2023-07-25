const containerDiv = document.querySelector('.container');
const tableDiv = document.querySelector('.table');
const imageDiv = document.querySelector('profile');

const url = 'https://randomuser.me/api/';

fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json.results[0].name.last);
})