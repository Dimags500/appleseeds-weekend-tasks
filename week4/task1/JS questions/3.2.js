// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop

const busStops = [0, [12, 0], [2, 3], [2, 0], [8, 3], [1, 10]];

function peopletInBus(stopsArray) {
  let peopleInCounter = 0;
  let peopleOutCounter = 0;
  let peopleLeft = 0;

  for (let i = 1; i < stopsArray.length; i++) {
    peopleInCounter += stopsArray[i][0];
    peopleOutCounter += stopsArray[i][1];

    peopleLeft = peopleInCounter - peopleOutCounter;
    if (peopleLeft < 0) {
      peopleLeft = 0;
    }
  }

  return peopleLeft;
}

const result = peopletInBus(busStops);

console.log(result);
