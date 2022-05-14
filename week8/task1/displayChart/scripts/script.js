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

  continents = groupeCountriesByContinent(worldContinents);
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

function groupeCountriesByContinent(worldContinents) {
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

function onCountrieClick(e) {
  let name = e.target.id;
  let code = currCountries.find((item) => item.name == name).code.toString();
  getCountrieInfo(code);
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

function showCountiryInfo(data) {
  try {
    let recovered = data.latest_data.recovered;
    let criticalData = data.latest_data.critical;
    let new_confirmed = data.timeline[0].new_confirmed;
    let deaths = data.timeline[0].deaths;
    let new_deaths = data.timeline[0].new_deaths;
    let active = data.timeline[0].active;

    if (critical !== undefined) {
      critical.innerText = criticalData;
    }

    if (recovered !== undefined) {
      totalRecovered.innerText = recovered;
    }
    if (new_confirmed !== undefined) {
      newCases.innerText = new_confirmed;
    }

    if (deaths !== undefined) {
      totalDeaths.innerText = deaths;
    }

    if (new_deaths !== undefined) {
      newDeths.innerText = new_deaths;
    }

    if (active !== undefined) {
      totalCases.innerText = active;
    }
  } catch (error) {}
}

function getCountrieInfo(code) {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "http://corona-api.com/countries/";

  let data;
  fetch(mask + url + code)
    .then((res) => res.json())
    .then((res) => (data = res.data))
    .catch((error) => alert(error));

  spinner.style.display = "block";
  setTimeout(() => {
    showCountiryInfo(data);
    spinner.style.display = "none";
  }, 1000);
}
