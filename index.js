// Code your solution in this file!
const drivers = ["John", "Jane", "Mike", "Sara", "Tom"];

// returnFirstTwoDrivers() - returns the first two drivers in the array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers() - returns the last two drivers in the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// selectingDrivers - array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier() - higher-order function that returns a function to multiply fare
const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  };
};

// fareDoubler() - function that doubles the fare
const fareDoubler = createFareMultiplier(2);

// fareTripler() - function that triples the fare
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers() - selects the first two or last two drivers based on the function provided
const selectDifferentDrivers = function(drivers, driverSelector) {
  return driverSelector(drivers);
};

// Testing the functions
console.log(returnFirstTwoDrivers(drivers)); // Output: ["John", "Jane"]
console.log(returnLastTwoDrivers(drivers)); // Output: ["Sara", "Tom"]
console.log(createFareMultiplier(4)(10)); // Output: 40
console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // Output: ["John", "Jane"]
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // Output: ["Sara", "Tom"]
