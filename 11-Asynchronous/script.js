"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const imagesContainer = document.querySelector(".images");

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

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
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

/* const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  getJSON(
    `https://restcountries.eu/rest/v2/name/${country}`,
    "Country not found"
  )
    .then((data) => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[0];

      if (!neighbor) throw new Error("Neighbor not found");

      return getJSON(
        `https://restcountries.eu/rest/v2/alpha/${neighbor}`,
        "Country not found"
      ); //always return promise and handle it outside
    })
    .then((data) => {
      renderCountry(data, "neighbour");
    })
    //catch can't handle 404, we have to manually do that
    .catch((err) => {
      console.log(`${err} 😧😧😧`);
      renderError(`Something went wrong 😧😧😧 ${err.message}. Try again!`);
    })
    //useful for hiding a spinner when a request is done
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("germany");
}); */

// getCountryData("australia");

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

/* const whereAmI = function (lat, lang) {
  fetch(`https://geocode.xyz/${lat},${lang}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(`You are in ${data.state}, ${data.country}`);
      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.log(`${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//test coordinates
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
whereAmI(52.508, 13.381); */

/* console.log("Test Start");
setTimeout(() => console.log("0 Sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res)); //micro task queue

Promise.resolve("Resolved promise 2").then((res) => {
  for (let i = 0; i < 1000; i++) {
    console.log(res);
  }
});
console.log("Test end");
 */

/* const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening 😴");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN 💰"); //mark this promise as fulfilled
    } else {
      reject(new Error("You lost your money 💩"));
    }
  }, 2000);
});

//consuming promise
lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err)); */

//Promisify setTimeout
/* const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log("I waited 1 seconds");
    return wait(1);
  })
  .then(() => {
    console.log("I waited 2 second");
    return wait(1);
  })
  .then(() => console.log("I waited 3 second"));
 */
// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 seconds passed");
//     setTimeout(() => {
//       console.log("3 seconds passed");
//     }, 1000);
//   }, 1000);
// }, 1000);

//These promises will be resolved quickly

/* Promise.resolve("abc").then((x) => console.log(x));
Promise.reject(new Error("Problem")).catch((x) => console.error(x)); */

//Callback
/* navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.error(err)
);
 */
/* console.log("Getting Position");

//converting callback to promise
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geoLocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      if (!pos) throw new Error("No position found");
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })

    .then((response) => {
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.state}, ${data.country}`);
      return fetch(
        `https://restcountries.eu/rest/v2/name/${data.country}?fullText=true`
      );
    })
    .then((res) => {
      if (!res.ok) throw new Error(`Country not found ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", whereAmI); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Consume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/

/* let currentImage;

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    imagesContainer.appendChild(img);

    img.src = imgPath;
    img.addEventListener("load", function () {
      imagesContainer.appendChild(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Error loading image"));
    });
  });
};

createImage("img/img-1.jpg")
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then((res) => {
    currentImage.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then((res) => {
    currentImage.style.display = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImage = img;
    return wait(2);
  })
  .then((res) => {
    currentImage.style.display = "none";
  })
  .catch((err) => console.error(err));
 */

///////////////////////////////////////
//Async and Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();

    if (!pos) throw new Error("No position found");

    const { latitude: lat, longitude: lng } = pos.coords;

    const response = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json`
    );

    if (!response.ok)
      throw new Error(`Problem getting location data (${response.status})`);

    const { country } = await response.json();
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
    );

    if (!res.ok) throw new Error(`Country not found ${res.status}`);

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (error) {
    console.error(error);
    renderError(` 😱 ${error.message}`);
  }
};

btn.addEventListener("click", whereAmI);
whereAmI();
whereAmI();
whereAmI();
whereAmI();

console.log("first");
