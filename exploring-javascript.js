///// Objects /////

const dog = {
  breed: "Pug",
  gender: "Male",
  vaccinations: true,
};

const anotherDog = {
  breed: "Collie",
  gender: "Female",
  vaccinations: false,
};

//Retrieving values
first_dog_breed = dog.breed;
first_dog_breed = dog["breed"];

// console.log(first_dog_breed);

//Changing values
anotherDog.vaccinations = true;

// console.log(anotherDog.vaccinations);

////// Sample Problem From Class //////

function printMultiplicationTable() {
  for (let b = 0; b <= 10; b++) {
    console.log(`Table for ${b}`);
    for (let a = 0; a <= 5; a++) {
      console.log(`${b} X ${a} = ${b * a}`);
    }
  }
}

// printMultiplicationTable();

function printMultiplicationTable2() {
  let b = 0;
  let a = 0;
  while (b <= 10) {
    console.log(`Table for ${b}`);
    a = 0;
    while (a <= 5) {
      console.log(`${b} X ${a} = ${b * a}`);
      a++;
    }
    b++;
  }
}

printMultiplicationTable2();

// function printEachNumberValues(num) {
//   for (let x = 0; x < num; x++) {
//     console.log(the values)
//   }
// }

// function printEachTableValues(num) {
//   for (let x = 0; x < num; x++) {
//     console.log(x * printEachNumberValues)
//   }
// }
