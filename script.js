const containerDiv = document.querySelector('.container');



const url = 'https://randomuser.me/api/';


fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json);
    const tableDiv = document.querySelector('.table');

    const imageDiv = document.querySelector('.profile');
    imageDiv.src = `${json.results[0].picture.large}`;

    tableDiv.innerHTML = `
        <p class="placeholder">Name: <span class="name">${json.results[0].name.title} ${json.results[0].name.first} ${json.results[0].name.last}</p>
        <p class="placeholder">Name: <span class="gender">${json.results[0].gender}</p>
        <p class="placeholder">Name: <span class="email">${json.results[0].email}</p>
        <p class="placeholder">Name: <span class="phone">${json.results[0].cell}</p>
        <p class="placeholder">Name: <span class="age">${json.results[0].dob.age}</p>
        `
})