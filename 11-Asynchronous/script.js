"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = (data, className = "") => {
  const html = `
<article class="country ${className}">
  <img class="country__img" src=${data.flag} />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
   </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
/* 

getCountryData("portugal");
getCountryData("usa");
getCountryData("germany"); */

//////////////////////////////-----********-------//////////////////////////////

//Callback hell

/* const getCountryAndNeighbor = (country) => {
  const request = new XMLHttpRequest(); //Old school way of doing AJAX request
  //AJAX call country 1
  request.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
  request.send();

  // When the request is done, we can use the responseText property to get the response
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    //Render country 1
    renderCountry(data);

    // Get neighbor country
    const [neighbor] = data.borders;

    if (!neighbor) return;

    //AJAX call country 2
    const request2 = new XMLHttpRequest(); //Old school way of doing AJAX request2
    request2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener("load", function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeighbor("portugal");
getCountryAndNeighbor("usa");

setTimeout(() => {
  console.log("1 second passed");
  setTimeout(() => {
    console.log("2 seconds passed");
    setTimeout(() => {
      console.log("3 seconds passed");
    }, 1000);
  }, 1000);
}, 1000); */

//////////////////////////////-----********-------//////////////////////////////
//Promises

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json(); //json method is available on promise object, json() is also a promise
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

//Simplified version, flat chain promises
const getCountryData = function (country) {
  fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) return;

      return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbor}`); //always return promise and handle it outside
    })
    .then((response) => response.json())
    .then((data) => {
      renderCountry(data, "neighbour");
    });
};

// getCountryData("portugal");
getCountryData("germany");
