var evens = [0, 2, 4, 6, 8, 10];

evens.forEach(even => {
  console.log(`${even} is not odd!`);
});

// Add your doToElementsInArray() function here:
var evens = [0, 2, 4, 6, 8, 10];
 
evens.forEach((even, index, array) => {
  debugger;
  console.log(`${even} is not odd!`);
});

// Add your changeCompletely() function here:
var evens = [0, 2, 4, 6, 8, 10];
 
function evenFn(even, index, array) {
  console.log(`${even} is not odd!`);
}
 
for (let i = 0; i < evens.length; i++) {
  evenFn(evens[i], i, evens);
}


var evens = [0, 2, 4, 6, 8, 10];
 
function doToEvens(callback) {
  evens.forEach(callback);
}