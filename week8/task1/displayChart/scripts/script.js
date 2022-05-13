import { regionsArr } from "../scripts/regions.js";
import { statistic } from "./statistic.js";

const spinner = document.getElementById("spinner");

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

for (let i = 0; i < continents.length; i++) {
  const codes = continents[i][1].split(",");
  getCountriesBycodes(codes);
}

function getCountriesBycodes(codes) {
  const url = "";
  fetch("");
}

// async function getAll() {
//   let res;
//   const url = "https://corona-api.com/countries";
//   await fetch(url)
//     .then((res) => res.json())
//     .then((data) => (res = data));

//   worldStatistic = res;
// }

async function getAllStatistics() {
  const url = "https://corona-api.com/countries";
  const response = await axios.get(url);
  worldStatistic = response.data;

  // const responseArr = await Promise.all(
  //   studentIDs.map((student) =>
  //     axios.get(`https://capsules-asb6.herokuapp.com/api/user/${student.id}`)
  //   )
  // );
  // students = responseArr.map((response) => response.data);
  // rowBuilder(students, document.getElementById("data-table"));
}
let worldStatistic = [];
getAllStatistics();

setTimeout(() => {
  console.log(worldStatistic);
  spinner.style.display = "none";
}, 2000);

var xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        borderColor: "red",
        fill: false,
      },
      {
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
      {
        data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
        borderColor: "blue",
        fill: false,
      },
    ],
  },
  options: {
    legend: { display: false },
  },
});
