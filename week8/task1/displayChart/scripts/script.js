import { regionsArr } from "../scripts/regions.js";
import { statistic } from "./statistic.js";

const countriesList = document.getElementById("countries-list");

const spinner = document.getElementById("spinner");
const coutryInfo = document.getElementById("info-bar");
const continentsBtns = document.querySelector("#continents-btns");
const statusBtns = document.querySelector("#status-btns");
continentsBtns.addEventListener("click", continentsOnCklick);
statusBtns.addEventListener("click", statusOnCklick);

const totalCases = document.getElementById("total-cases");
const newCases = document.getElementById("new-cases");
const totalDeaths = document.getElementById("total-deaths");
const newDeths = document.getElementById("new-deths");
const totalRecovered = document.getElementById("total-recovered");
const critical = document.getElementById("critical");

//---------------------------------------------
let worldStatistic = [];
let worldContinents = [];
let continents;

let currCountries = [];
let currStatus = "confirmed";

async function getAllContinents() {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "https://restcountries.herokuapp.com/api/v1";

  const response = await axios.get(mask + url);
  worldContinents = response.data;

  continents = groupeCoutriesByContinent(worldContinents);
}

async function getAllStatistics() {
  const url = "https://corona-api.com/countries";
  const response = await axios.get(url);
  worldStatistic = response.data;
}
getAllStatistics();
getAllContinents();

setTimeout(() => {
  spinner.style.display = "none";
}, 1000);

function groupeCoutriesByContinent(worldContinents) {
  //   let obj = {};

  //   for (let i = 0; i < regionsArr.length; i++) {
  //     if (obj[regionsArr[i].region] === undefined) {
  //       obj[regionsArr[i].region] = "";
  //     }
  //     if (regionsArr[i].cca2 != undefined) {
  //       obj[regionsArr[i].region] += regionsArr[i].cca2 + ",";
  //     }
  //   }

  // return Object.entries(obj);

  let obj = {};

  for (let i = 0; i < worldContinents.length; i++) {
    if (obj[worldContinents[i].region] === undefined) {
      obj[worldContinents[i].region] = "";
    }
    if (worldContinents[i].cca2 != undefined) {
      obj[worldContinents[i].region] += worldContinents[i].cca2 + ",";
    }
  }

  return Object.entries(obj);
}

function continentsOnCklick(e) {
  let continent = e.target.id;

  if (continent === "World") {
    setCurrData(worldStatistic.data, currStatus);
    return;
  }
  for (let i = 0; i < continents.length; i++) {
    if (continents[i][0] === continent) {
      getCountriesBycodes([continent, continents[i][1].split(",")]);
    }
  }

  setCurrData(currCountries, currStatus);
}

function statusOnCklick(e) {
  let status = e.target.id;
  currStatus = status;
  setCurrData(currCountries, currStatus);
}

//------------------------------------------

function getCountriesBycodes(data) {
  let codes = data[1];

  let counties = codes.map((code) => {
    return worldStatistic.data.find((item) => item.code == code);
  });

  currCountries = counties.filter((item) => item != undefined);
}

function setCurrData(data, displayStatus) {
  currCountries = data;

  let names = data.map((item) => {
    if (item === undefined) {
      return;
    }
    return item.name;
  });

  let numbers = data.map((item) => {
    if (item === undefined) {
      return;
    }
    return item.latest_data;
  });

  let status = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === undefined || numbers[i] === null) {
      continue;
    }
    status.push(numbers[i][displayStatus]);
  }

  canvas(names, status);
  drawCountriesList(names);
}

function canvas(names, status) {
  new Chart("countiresChart", {
    type: "line",
    data: {
      labels: names,
      datasets: [
        {
          data: status,
          borderColor: "red",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}

function drawCountriesList(countries) {
  countriesList.innerText = "";

  for (let i = 0; i < countries.length; i++) {
    const span = document.createElement("span");
    span.classList.add("country-item");
    span.setAttribute("id", countries[i]);
    span.innerText = countries[i];

    span.addEventListener("click", onCountrieClick);
    countriesList.append(span);
  }
}

function onCountrieClick(e) {
  let name = e.target.id;
  let code = currCountries.find((item) => item.name == name).code.toString();

  if (code === undefined) {
    alert(code);
  }

  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "http://corona-api.com/countries/";

  // const response = axios.get(
  //   mask + url + code
  // );

  // console.log(response);

  let data;
  fetch(mask + url + code)
    .then((res) => res.json())
    .then((res) => (data = res.data))
    .catch((error) => alert(error));

  spinner.style.display = "block";
  setTimeout(() => {
    drawCountiryInfo(data);
    spinner.style.display = "none";
  }, 1000);
}

function drawCountiryInfo(data) {
  if (data.latest_data.critical !== undefined) {
    critical.innerText = data.latest_data.critical;
  }

  if (data.timeline[0].recovered !== undefined) {
    totalRecovered.innerText = data.timeline[0].recovered;
  }
  if (data.timeline[0].new_confirmed !== undefined) {
    newCases.innerText = data.timeline[0].new_confirmed;
  }

  if (data.timeline[0].deaths !== undefined) {
    totalDeaths.innerText = data.timeline[0].deaths;
  }

  if (data.timeline[0].new_deaths !== undefined) {
    newDeths.innerText = data.timeline[0].new_deaths;
  }

  if (data.timeline[0].active !== undefined) {
    totalCases.innerText = data.timeline[0].active;
  }
  // console.log(data.data.timeline);
  console.log(data);
}
