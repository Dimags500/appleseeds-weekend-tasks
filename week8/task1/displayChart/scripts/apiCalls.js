import { spinnerOn, spinnerOff } from "./spinner.js";

async function getAllContinents() {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "https://restcountries.herokuapp.com/api/v1";
  try {
    const response = await axios.get(mask + url);
    spinnerOff();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getAllStatistics() {
  const url = "https://corona-api.com/countries";

  try {
    const response = await axios.get(url);
    spinnerOff();
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

async function getCountrieInfo(code) {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "http://corona-api.com/countries/";

  try {
    spinnerOn();
    let response = await fetch(mask + url + code);
    let data = await response.json();
    let info = data.data;
    spinnerOff();
    return info;
  } catch (error) {
    alert(error);
  }
}

async function getStatisticsAndContinents() {
  const statisticUrl = "https://corona-api.com/countries";
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const continentsUrl = "https://restcountries.herokuapp.com/api/v1";

  const statistics = await axios.get(statisticUrl);
  const continents = await axios.get(mask + continentsUrl);
  const allRequests = Promise.all([statistics, continents]);
  try {
    spinnerOff();
    return await allRequests;
  } catch (error) {
    console.log(error.message);
  }
}

export {
  getAllContinents,
  getAllStatistics,
  getCountrieInfo,
  getStatisticsAndContinents,
};
