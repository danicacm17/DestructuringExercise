let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846


let planetFacts = {
  numPlanet: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanet, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // {yearMarsDiscovered: 1659, yearNeptuneDiscovered: 1846}


function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({firstName: "Alejandro", favoriteColor: "purple"})) // Your name is Alejandro and you like purple
console.log(getUserData({firstName: "Melissa"})) // Your name is Melissa and you like green
console.log(getUserData({})) // Your name is undefined and you like green


let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']


let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]


const obj = {
  numbers: {
    a: 1,
    b: 2
  }
};

const {a,b} = obj.numbers



let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];



const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

const results = raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);
console.log(results); // {first: 'Tom', second: 'Margaret', third: 'Allison', rest: Array(2)}






