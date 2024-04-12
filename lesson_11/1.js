let cars = ["Toyota", "Lada", "BMW", "Mercedes", "Audi"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

let temp = cars[0];
cars[0] = cars[cars.length - 1];
cars[cars.length - 1] = temp;

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}