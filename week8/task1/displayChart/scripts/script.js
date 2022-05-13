import { regionsArr } from "../scripts/regions.js";
import { statistic } from "./statistic.js";

const spinner = document.getElementById("spinner");
const continentsBtns = document.querySelector("#continents-btns");
continentsBtns.addEventListener("click", continentsOnCklick);

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

function continentsOnCklick(e) {
  let continent = e.target.id;
  displayContinent(continent, statistic.data, continents, getCountriesBycodes);
}

// let continents = Object.entries(obj);

// for (let i = 0; i < continents.length; i++) {
//   const codes = continents[i][1].split(",");
//   getCountriesBycodes(codes);
// }

async function getAllStatistics() {
  const url = "https://corona-api.com/countries";
  const response = await axios.get(url);
  worldStatistic = response.data;
}
// let worldStatistic = [];
// getAllStatistics();

setTimeout(() => {
  //   console.log(worldStatistic);
  spinner.style.display = "none";
}, 1000);

function displayContinent(continent, data, continents, callback) {
  let prevRequest;

  if (continent === "World") {
    displayCanvas(statistic.data);
  }
  for (let i = 0; i < continents.length; i++) {
    if (continents[i][0] === continent) {
      callback([continent, continents[i][1].split(",")]);
    }
  }
}

function getCountriesBycodes(data) {
  let codes = data[1];

  let counties = codes.map((c) => {
    return statistic.data.find((i) => i.code == c);
  });

  displayCanvas(counties);
}

function displayCanvas(data) {
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
  call(names, numbers);
}

function call(names, numbers) {
  console.log(numbers);

  console.log(names);

  let confirmed = []; //= Object.entries(numbers).flat();

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === undefined || numbers[i] === null) {
      continue;
    }

    confirmed.push(numbers[i].confirmed);
  }

  console.log(confirmed);

  new Chart("myChart", {
    type: "line",
    data: {
      labels: names,
      datasets: [
        {
          data: confirmed,
          borderColor: "red",
          fill: false,
        },
        {
          data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
          borderColor: "green",
          fill: false,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
}
