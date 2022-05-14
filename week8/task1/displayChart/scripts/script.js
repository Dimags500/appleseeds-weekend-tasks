import { regionsArr } from "../scripts/regions.js";
import { statistic } from "./statistic.js";

const countriesDiv = document.getElementById("countries-list");
const spinner = document.getElementById("spinner");
const continentsBtns = document.querySelector("#continents-btns");
const statusBtns = document.querySelector("#status-btns");
continentsBtns.addEventListener("click", continentsOnCklick);
statusBtns.addEventListener("click", statusOnCklick);

let obj = {};

for (let i = 0; i < regionsArr.length; i++) {
  if (obj[regionsArr[i].region] === undefined) {
    obj[regionsArr[i].region] = "";
  }
  if (regionsArr[i].cca2 != undefined) {
    obj[regionsArr[i].region] += regionsArr[i].cca2 + ",";
  }
}
let continents = Object.entries(obj);
let worldStatistic = [];
let currCountries = [];
let currStatus = "confirmed";

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

async function getAllStatistics() {
  const url = "https://corona-api.com/countries";
  const response = await axios.get(url);
  worldStatistic = response.data;
}
getAllStatistics();

setTimeout(() => {
  spinner.style.display = "none";
}, 1000);

function getCountriesBycodes(data) {
  let codes = data[1];

  let counties = codes.map((code) => {
    return worldStatistic.data.find((item) => item.code == code);
  });

  currCountries = counties;
}

function setCurrData(data, displayStatus) {
  currCountries = data;

  let names = data.map((item) => {
    if (item == undefined) {
      return;
    }
    return item.name;
  });

  let numbers = data.map((item) => {
    if (item == undefined) {
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
  new Chart("myChart", {
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
  countriesDiv.innerText = "";

  for (let i = 0; i < countries.length; i++) {
    const span = document.createElement("span");
    span.classList.add("country-item");
    span.setAttribute("id", countries[i]);
    span.innerText = countries[i];

    span.addEventListener("click", onCountrieClick);
    countriesDiv.append(span);
  }
}

function onCountrieClick(e) {
  console.log(e.target.id);
}
