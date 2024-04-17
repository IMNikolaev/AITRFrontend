// Task 1.1
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const newStarWarsHeroes = starWarsHeroes.map(({ name, isJedi }) => ({ name, isJedi }));
console.log(newStarWarsHeroes);
// Task 1.2
const youngJedi = starWarsHeroes.filter(hero => hero.isJedi && hero.age < 40);

console.log(youngJedi);
// Task 1.3

const totalJediAge = starWarsHeroes
    .filter(hero => hero.isJedi)
    .reduce((totalAge, jedi) => totalAge + jedi.age, 0);

console.log(totalJediAge);

// Task 1.4

const heroesWithIncreasedAge = starWarsHeroes.map(hero => {
    return {
        name: hero.name,
        age: hero.age + 10,
        isJedi: hero.isJedi
    };
});

console.log(heroesWithIncreasedAge);

// Task 1.5

const updatedStarWarsHeroes = starWarsHeroes.map(hero => {
    if (hero.name === "Anakin Skywalker") {
        return {
            name: "Darth Vader",
            age: 50,
            isJedi: false
        };
    }
    return hero;
});

console.log(updatedStarWarsHeroes);

// Task 1.6

const filteredNames = starWarsHeroes
    .filter(hero => hero.age > 30)
    .map(hero => hero.name.toUpperCase())
    .filter(name => !name.startsWith('A')); // Не помню что бы мы этому учились (Или я был невнимательным)

console.log(filteredNames);

// Task 1.7
starWarsHeroes.forEach(hero => {
    const status = hero.isJedi ? 'is a Jedi' : 'is not a Jedi';
    console.log(`${hero.name} ${status}. Age: ${hero.age}`);
});