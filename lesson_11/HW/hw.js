// Task 1
let names= ["Мария", "Алексей", "Елена", "Дмитрий"];
let ages= [22, 31, 45, 53];

namesAndAges = [];
for (let i = 0; i < names.length; i++) {
    namesAndAges.push(names[i] + " " + ages + " " + "лет/годов");
}
console.log(namesAndAges);
// Task 2
let reversedNamesAndeAges1 = [];
for (let i = namesAndAges.length-1; i >= 0; i--) {
    reversedNamesAndeAges1.push(namesAndAges[i]);
}
console.log(reversedNamesAndeAges1);

let reversedNamesAndeAges = namesAndAges.reverse();
console.log(reversedNamesAndeAges);

// Task 3
let countries = [];
countries.push("Франция", "Германия", "Италия");
let country = countries.pop();
countries.unshift(country);
console.log(countries);
// Task 4
let colors = ["красный", "зеленый", "синий"];
let animals = ["кошка", "собака", "кролик"];
let colorsAndAnimals = [...colors, ...animals];
let [red, green, blue,cat,dog,rabbit] = colorsAndAnimals;
console.log(blue, rabbit);